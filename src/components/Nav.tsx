import React from 'react'
import Link from 'next/link';

const Nav = () => {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ]
  return (
    <nav className='bg-neutral-100/90 sticky top-0 z-50 font-semibold text-black min-w-full rounded-br-lg p-3 mx-auto flex justify-around items-center overflow-hidden'>
        <div className="text-xl font-bold">
          <Link href="/">Sua Oficina</Link>
        </div>
        <ul className='hidden md:flex space-x-6'>
          {navLinks.map((link) =>(
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-gray-600 hover:text-neutral-900 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
    
          ))}

        </ul>
        <a 
          href="#contato"
          className="hidden md:block text-base bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Agende seu Atendimento
        </a>

        <div className="md:hidden">
            <button>Menu</button>
        </div>

    </nav>
  )
}

export default Nav