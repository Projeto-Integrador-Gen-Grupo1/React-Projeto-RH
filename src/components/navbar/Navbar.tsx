import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        {/* Link para a Home */}
        <Link to='/home' className='text-2xl font-bold uppercase'>Projeto RH</Link>
        
        <div className='flex gap-4'>
          {/* Estes links fazem a navegação funcionar */}
          <Link to='/home' className='hover:underline'>Home</Link>
          <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
          <Link to='/produto' className='hover:underline'>Produtos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;