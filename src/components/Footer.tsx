"use client";
import React, { useState } from 'react'
import Miche from '../../../mecanica/public/Michelin-Logo.png'
import Bosch from '../../../mecanica/public/Bosch-Logo.png'
import Mobil from '../../../mecanica/public/mobil.png'
import Pire from '../../../mecanica/public/pirelli.png'
import Contact from './Contact'
import Image from 'next/image'
import BotaoWhat from './Botoes/BotaoWhat'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {

  const partners = [
  {
    name: 'Michelin',
    logo: Miche
  },
  {
    name: 'Bosch',
    logo: Bosch
  },
  {
    name: 'Mobil',
    logo: Mobil
  },
  {
    name: 'Pirelli',
    logo: Pire
  }
];
  const [mostraCont, setMostraCont] = useState(false)
  return (
    
    <footer className='bg-neutral-950 text-white'>
      <div className='container mx-auto px-4'>
        <div className='border-b border-white pb-5 pt-5 mb-5 '>
          <h4 className='text-2xl uppercase text-center mb-5 mt-5 '>Parceiros</h4>
          <div className='grid grid-cols-2  lg:grid-cols-4 gap-8'>
            {partners.map((item, idx) => (
            <div className='bg-white flex flex-col items-center justify-center rounded-sm' key={idx}>
              <Image
              alt={item.name}
              src={item.logo}
              priority
              className='w-40 h-30 object-contain'
              />
              <h5 className='text-2xl uppercase'>{item.name}</h5>

            </div>

          ))}
          

          </div>
           
        </div>
      <div className=" text-2xl max-w-md inline-block!important text-center bg-neutral-950 text-white rounded-sm border-white">
      <button 
        onClick={() => setMostraCont(!mostraCont)}
        className="font-bold px-8  w-100"
      >
         <p className='text-xl' id='contato'><span className='text-red-600 uppercase'>Agende</span> o seu Atendimento</p>
      </button>
      {mostraCont && (
        <Contact />
      )}
    </div>
        
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 pb-12 pt-6 mt-5 px-8'>
        <div className='space-y-2 px-8'>
          <h5 className='text-xl uppercase'>Sua Oficina</h5>  
          <p>Seu Slogan</p>
          <BotaoWhat>WhatsApp</BotaoWhat>
        </div>
               <div className='space-y-2 px-8'>
          <h5 className='text-xl uppercase'>Endereco</h5>  
          <p className='text-sm'>R. da Consolação - Consolação, São Paulo - SP, 01220-010</p>
          <p className='text-sm'>Tel: (xx)xxxxx-xxxx</p>
          <p className='text-sm'>E-mail: constato@gmail.com</p>
        </div>
        <div className='space-y-2 px-8 flex flex-col'>
          <h5 className='text-xl uppercase text-center'>Redes Sociais</h5> 
          <div className='flex justify-around'>
            <p><FaXTwitter /></p>
            <p><FaFacebook /></p>
            <p><FaInstagram /></p>

          </div>

        </div>


      </div>
      
     

    </footer>
  )
}

export default Footer