import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div style={{ backgroundColor: '#D36DBF' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/home'>
          <h1 className='font-bold text-white'>My Closet</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li></li>
          </Link>
          <Link to='/about'>
            <li></li>
          </Link>
          <Link to='/home'>
            {currentUser ? (
              <span className='text-l text-white'>Bem Vindo!</span>
            ) : (
              <li className="text-white">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
