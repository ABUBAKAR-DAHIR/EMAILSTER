import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Company from './Components/Company'
import Footer from './Components/Footer'
import ServiceLet from './Components/ServiceLet'
import Services from './Components/Services'

export default function App() {
  return (
    <main>
      {/* Gradient image */}
      <img className='absolute top-0 right-0 opacity-60 z-10' src='/gradient.png'/>
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_9500px_23px_#e99b63] -rotate-[30deg -z-10'></div>
      <Header />
      <Hero />
      <Company />
      <Services />
      <Footer/>
    </main>
  )
}
