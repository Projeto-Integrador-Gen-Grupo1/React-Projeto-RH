function Produto() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Nossas Soluções</h2>
      
      {/* Grid para layout flexível e responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Gestão de Talentos</h3>
          <p>Ferramenta para acompanhamento de desempenho e desenvolvimento de carreira.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Recrutamento Ágil</h3>
          <p>Plataforma centralizada para triagem e seleção de novos candidatos.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Folha de Pagamento</h3>
          <p>Automação e controle preciso dos benefícios e vencimentos da equipe.</p>
        </div>
      </div>
    </div>
  );
}

export default Produto;