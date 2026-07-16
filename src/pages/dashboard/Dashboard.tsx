import { Buildings, IdentificationCard, UsersThree } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { useAuth } from '../../contexts/useAuth';
import { listarDepartamentos } from '../../services/departamentoService';
import { listarFuncionarios } from '../../services/funcionarioService';
import { listarUsuarios } from '../../services/usuarioService';
import { getApiErrorMessage } from '../../utils/apiError';

interface DashboardCounts {
  usuarios: number;
  departamentos: number;
  funcionarios: number;
}

const initialCounts: DashboardCounts = {
  usuarios: 0,
  departamentos: 0,
  funcionarios: 0,
};

function Dashboard() {
  const { usuario } = useAuth();
  const [counts, setCounts] = useState<DashboardCounts>(initialCounts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);
        setError('');
        const [usuarios, departamentos, funcionarios] = await Promise.all([
          listarUsuarios(),
          listarDepartamentos(),
          listarFuncionarios(),
        ]);

        setCounts({
          usuarios: usuarios.length,
          departamentos: departamentos.length,
          funcionarios: funcionarios.length,
        });
      } catch (loadError) {
        setError(getApiErrorMessage(loadError));
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return <LoadingSpinner label="Preparando seu dashboard..." />;
  }

  return (
    <div className="bg-ekoa-paper px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg bg-ekoa-navy p-6 text-white shadow-lg sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ekoa-gold-300">Dashboard</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Olá, {usuario?.nome || 'talento'}.</h1>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            Acompanhe os principais cadastros da plataforma e acesse rapidamente as áreas de gestão.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-700">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Usuários',
              value: counts.usuarios,
              icon: UsersThree,
              to: '/usuarios',
              color: 'text-ekoa-purple-600 bg-ekoa-purple-50',
            },
            {
              title: 'Departamentos',
              value: counts.departamentos,
              icon: Buildings,
              to: '/departamentos',
              color: 'text-ekoa-magenta-600 bg-ekoa-magenta-50',
            },
            {
              title: 'Funcionários',
              value: counts.funcionarios,
              icon: IdentificationCard,
              to: '/funcionarios',
              color: 'text-ekoa-blue-600 bg-ekoa-gold-50',
            },
          ].map((card) => (
            <NavLink
              key={card.title}
              to={card.to}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-ekoa-purple-200 hover:shadow-md"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${card.color}`}>
                <card.icon size={26} aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{card.title}</p>
              <p className="mt-2 text-4xl font-black text-ekoa-navy">{card.value}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
