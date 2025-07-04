"use client";
import React, { useState, useEffect } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setData] = useState<FormData>(() => {
    const infosSalvas =  localStorage.getItem('infos')
    if (infosSalvas){
       return  JSON.parse(infosSalvas)  
    }
    else{
      return  {name : '', email :'', message : ''}
    }
  
  });

  useEffect(() => {
    localStorage.setItem('infos',JSON.stringify(formData))

  }, [formData])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target)
    const { name, value } = e.target;
    // esta espalhando o dicionario  antigo e colocando o dicionario usando o spread operator
    setData((prevData) => ({...prevData, [name]: value }));
    
  };
  const handleSubmit  = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    
    const dados = JSON.stringify(formData)
    console.log(dados)
    const form = e.target as HTMLFormElement;

    const data = new FormData(form);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!, {
      method: 'POST',
      body: data,
    })
    if (response.ok){
      console.log('Tudo certo')
      localStorage.removeItem('infos')
      setData({name : '', email : '', message : ''})
    }

    }catch(error){
      console.log(error)

    }
  }

  return (
    <div
      id="contato"
      className="max-w-md hover:none bg-neutral-50 p-8 rounded-sm"
    >

      <form onSubmit={handleSubmit} className="space-y-6">
        <label
          htmlFor="name"
          className="block text-xl font-medium text-gray-900"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Digite seu nome"
          required
          className="mt-1 block text-sm
        
             rounded-sm bg-white w-full py-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <label
          htmlFor="email"
          className="block text-xl font-medium  text-gray-900"
        >
          E-mail
        </label>
        <input
        placeholder="Digite seu email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="mt-1 block text-sm
             rounded-sm bg-white w-full py-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <label
          htmlFor="message"
          className="block text-xl font-medium text-gray-900"
        >
          Mensagem
        </label>
        <textarea
          placeholder="Digite o que esta acontecendo com seu veículo"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="mt-1 block text-sm text-black
             rounded-sm bg-white w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
        <div>
          <button
            type="submit"
            className="py-3 px-4 text-lg border border-transparent rounded-md shadow-sm font-semibold bg-red-600 text-white hover:bg-red-700 "
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
