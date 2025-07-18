"use client";
import { FaRegClock } from "react-icons/fa6";

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const servicos = [
  {
    title: "Revisão Geral",
    description: "Analisamos até 85 itens do seu carro, mostrando o que precisa ser feito com urgência e o que pode ser provisionado, montando um plano de manutenção pra você, cuidando assim do seu bolso e do seu carro.",
    time: "6",
    img: "/image (2).png"
  },
  {
    title: "Troca de Óleo e Filtros",
    description: "Utilizamos os óleos e filtros recomendados pela montadora, garantindo a lubrificação ideal do motor, prevenindo o desgaste e aumentando a vida útil de todos os componentes internos.",
    time: "1",
    img: "/image (3).png"
  },
  {
    title: "Sistema de Freios",
    description: "Verificação completa de pastilhas, discos, fluidos e todo o sistema de frenagem. A sua segurança é nossa prioridade, garantindo uma resposta de frenagem precisa e confiável em qualquer situação.",
    time: "2",
    img: "/image (4).png"
  },
  {
    title: "Alinhamento e Balanceamento",
    description: "Corrigimos o ângulo das rodas e eliminamos as vibrações do volante. Um serviço essencial para evitar o desgaste irregular dos pneus, economizar combustível e proporcionar uma direção mais suave.",
    time: "1",
    img: "/image (5).png"
  },
  {
    title: "Ar Condicionado",
    description: "Diagnóstico completo, recarga de gás e higienização do sistema de ar condicionado. Respire um ar mais puro e garanta o conforto térmico dentro do seu carro em qualquer estação do ano.",
    time: "2",
    img: "/image (6).png"
  }
];
const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop : false,
    align : "start",
    slidesToScroll: 1,
    breakpoints : {
        "(min-width: 768px)": {slidesToScroll: 3}
    },
    
  })

  function  scrollPrev(){
    emblaApi?.scrollPrev()
  }

    function  scrollNext(){
    emblaApi?.scrollNext()
  }
  return (
    <section id='servicos' className='bg-white mx-auto py-9'>
      <div className='container mx-auto px-2'>
        <h2 className='text-3xl font-bold uppercase mb-10'>Conheça <span className='text-red-600'>Nossos Serviços</span></h2>
        <div className='relative '>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              
              {/* {} precisa de return enquanto () retorna sozinho */}
              {servicos.map((card, idx) => (
                <div key={idx} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)]  px-3'>
                  <article className='bg-neutral-800 h-full text-white space-y-6  px-2 pt-2 rounded-sm'>


                    <div className='relative w-full h-48'>

                      <Image
                        alt={card.title}
                        src={card.img}
                        fill 
                        quality={100}
                        priority
                        className='object-cover hover:scale-105 duration-50' 
                      />
                    </div>
                    
                      
                          
                    <div className='flex flex-1 flex-col gap-4 px-4'>
                      <h3 className='text-2xl'>{card.title}</h3>
                      <p className='text-sm select-none'>
                        {card.description}
                      </p>
                      <span className="border-t-neutral-800 flex items-center gap-2"> <FaRegClock /> {card.time} h</span>
                    </div>
      
                      

                  </article>


                </div>



              ))}
              
            </div>


          </div>

            
            <button className=" hidden lg:flex bg-gray-900  items-center justify-center rounded-full shadow-lg w-15 h-15 absolute -right-5 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 " onClick={scrollNext}><MdOutlineNavigateNext className="w-10 h-10 text-white"/></button>  
            <button  className=" hidden lg:flex bg-gray-900  items-center justify-center rounded-full shadow-lg w-15 h-15 absolute -left-20 top-1/2  -translate-y-1/2 translate-x-1/2  z-10 " onClick={scrollPrev}><MdOutlineNavigateBefore className="w-10 h-10 text-white"/></button>
            

        </div>

      </div>
      
    </section>
  )
}

export default Services