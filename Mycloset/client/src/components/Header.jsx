import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const imageUrl = 'https://i.ibb.co/ngnXWH1/Design-sem-nome-5.png';
  const loginImageUrl = 'https://i.ibb.co/RT0r3Mb/Login-2.png';

  return (
    <div style={{ backgroundColor: '#D36DBF' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          {/* Increase the size of the image */}
          <img src={imageUrl} alt="My Closet Logo" className="w-120 h-200" />
        </Link>
        <ul className='flex gap-4'>
          <li>
            <Link to='/about' className="font-bold text-white"></Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
}
