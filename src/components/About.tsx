import React from 'react'
import Image from 'next/image'

import BotaoWhat from './Botoes/BotaoWhat'
import { MdPlace } from "react-icons/md";
import { siteConfig } from '@/site-config/site-config'

const About = () => {
    const urlFormatted = encodeURIComponent(siteConfig.address) 
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=SEU+ENDERECO+AQUI${urlFormatted}`;
  return (
    <section id='sobre' className='bg-neutral-100 mx-auto py-9'>
        
        <div className='container mx-auto grid grid-cols-1 px-2 md:grid-cols-2 gap-12 items-center'>
            
            
            <div className='relative'>
                <div className='relative w-full h-[400px] overflow-hidden rounded-md'>
                    <Image
                        alt='Imagem de uma Oficina vista de Cima'
                        src="/oficiniaCima.png"
                        fill
                        quality={100}
                        priority
                        className='object-cover hover:scale-110 duration-300 '
                    
                    />

                </div>
                <div className='absolute w-60 h-40 right-4 -bottom-6 rounded-2xl overflow-hidden'>
                    <Image
                        alt='Imagem de uma Oficina vista de Cima'
                        src="/oficinaDentro.png"
                        fill
                        quality={100}
                        priority
                    
                    />

                </div>


            </div>
           
            <div className='space-y-8'>
                <h2 className='text-3xl font-bold uppercase'>Nossa Oficina</h2>
                <p className='text-base'>Fundada em 2002 na cidade de Boulder, Colorado – nos Estados Unidos, e atuando no Brasil desde 2010, a AUTOTEC é uma Oficina Mecânica Automotiva especializada em veículos nacionais e internacionais.</p>
                <p className='text-base'>Dispomos de equipamentos de diagnóstico de última geração. Nossa equipe é treinada para oferecer um atendimento ágil e preciso, conquistando a confiança de clientes individuais e também de empresas com frotas variadas de veículos.</p>
                <div className='flex justify-around mt-4 gap-3'>
                    <BotaoWhat >
                        Contate Nosso Concierge
                    </BotaoWhat>
                    <a href={directionsUrl} target="_blank"  className='bg-red-600 hover:bg-red-700 w-fit font-semibold py-2 px-4 rounded-md text-white flex items-center justify-around gap-2'> Como Chegar
                        <MdPlace />
                    </a>

                </div>


            </div>

        </div>

    </section>
  )
}

export default About