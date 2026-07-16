import type { Departamento, DepartamentoPayload } from '../models/Departamento';
import { isServerError } from '../utils/apiError';
import { getCachedList, removeCachedItem, replaceCachedList, upsertCachedItem } from '../utils/localCache';
import { api } from './api';

const DEPARTAMENTOS_CACHE_KEY = 'projeto-rh:cache:departamentos';

function toDepartamentoList(data: Departamento | Departamento[]): Departamento[] {
  return Array.isArray(data) ? data : [data];
}

export async function listarDepartamentos(): Promise<Departamento[]> {
  try {
    const response = await api.get<Departamento[]>('/departamentos');
    return replaceCachedList(DEPARTAMENTOS_CACHE_KEY, response.data, ['nome']);
  } catch (error) {
    if (isServerError(error)) {
      return getCachedList<Departamento>(DEPARTAMENTOS_CACHE_KEY);
    }

    throw error;
  }
}

export async function buscarDepartamentoPorId(id: number): Promise<Departamento> {
  const response = await api.get<Departamento>(`/departamentos/${id}`);
  upsertCachedItem(DEPARTAMENTOS_CACHE_KEY, response.data, ['nome']);
  return response.data;
}

export async function buscarDepartamentosPorNome(nome: string): Promise<Departamento[]> {
  const response = await api.get<Departamento | Departamento[]>(`/departamentos/nome/${encodeURIComponent(nome)}`);
  const data = toDepartamentoList(response.data);
  replaceCachedList(DEPARTAMENTOS_CACHE_KEY, data, ['nome']);
  return data;
}

export async function pesquisarDepartamentos(termo: string): Promise<Departamento[]> {
  const busca = termo.trim();
  return busca ? buscarDepartamentosPorNome(busca) : listarDepartamentos();
}

export async function criarDepartamento(dados: DepartamentoPayload): Promise<Departamento> {
  const response = await api.post<Departamento>('/departamentos', dados);
  upsertCachedItem(DEPARTAMENTOS_CACHE_KEY, response.data, ['nome']);
  return response.data;
}

export async function atualizarDepartamento(dados: DepartamentoPayload): Promise<Departamento> {
  const response = await api.put<Departamento>('/departamentos', dados);
  upsertCachedItem(DEPARTAMENTOS_CACHE_KEY, response.data, ['nome']);
  return response.data;
}

export async function excluirDepartamento(id: number): Promise<void> {
  await api.delete(`/departamentos/${id}`);
  removeCachedItem<Departamento>(DEPARTAMENTOS_CACHE_KEY, id, ['nome']);
}
