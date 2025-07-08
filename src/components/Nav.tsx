"use client";
import React, {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RiToolsFill } from "react-icons/ri";

import Link from 'next/link';

const Nav = () => {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ]
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <nav className='bg-neutral-100/90 sticky top-0 z-50 font-semibold text-black min-w-full rounded-br-lg p-3 mx-auto flex justify-around items-center overflow-hidden'>
        <div className="text-xl font-bold">
          <Link href="/">Sua Oficina</Link>
        </div>
        <ul className={ isOpen ?  ('bg-neutral-100/90 flex-col fixed top-0 right-0  w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-0 ') : ('hidden md:flex items-center gap-8 ') }>
          {navLinks.map((link) =>(
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-black md:text-gray-600 hover:text-neutral-900 transition-colors duration-300"
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

      
        <button className="flex md:hidden" onClick={toggleMenu}>

          {isOpen ? ( <RiToolsFill className='z-50' /> ) : ( <CiMenuBurger/>

          )  }
          
        </button>
        

    </nav>
  )
}

export default Nav