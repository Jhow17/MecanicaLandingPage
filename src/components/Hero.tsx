import React from 'react'
import Image from 'next/image'
import mechanic from '../../../mecanica/public/mechanic.png'

import BotaoWhat from './Botoes/BotaoWhat'
const Hero = () => {
  return (
    <header id='inicio' className='bg-neutral-950/90  min-w-full min-h-1/2 relative text-white overflow-hidden '>

      <div>
        <Image
        alt="Mecanico trabalhando em um carro"
        src={mechanic}
        fill
        sizes='100vw'
        className='object-fill opacity-60 lg:hidden'

        />
        <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
      </div>
      <div className='container mx-auto pt-14 pb-16 md:pb-0 px-4'>
        <article className='grid  grid-cols-1 lg:grid-cols-2 gap-8 relative'>
          <div className='space-y-6 '>

            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl uppercase'>Compromisso com a Qualidade</h1>
            <p className='lg:text-lg '>Equipe comprometida com a qualidade e transparência; entre e sinta-se bem. </p>

            <BotaoWhat>
              Entre em Contato
            </BotaoWhat>

            <div>
              <p>texto adicional se precisar</p>
            </div>

          </div>

          <div className='hidden h-full relative w-full  lg:block '>
             <Image
                src={mechanic}
                alt="Mecanico trabalhando em um carro"
                className="object-cover  rounded-2xl" 
                fill
                sizes="(max-width: 768px) 0vw, 50vw"
                priority
      />
     
          </div>


        </article>

      </div>
       

    </header>
  )
}

export default Hero