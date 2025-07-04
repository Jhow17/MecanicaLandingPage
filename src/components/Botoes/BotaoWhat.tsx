import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const BotaoWhat = ({children}) => {
  return (
    <div>
                        <a  href="#" className='bg-green-500 hover:bg-green-600 w-fit font-semibold py-2 px-4 rounded-md text-white flex items-center justify-around' > <BsWhatsapp size={24}  />
                                      <span className='pl-1'>{children}</span></a>
    </div>
  )
}

export default BotaoWhat