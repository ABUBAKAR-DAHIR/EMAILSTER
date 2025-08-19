import React, { useEffect, useState } from 'react'
import 'boxicons/css/boxicons.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Header() {
    let [menuOpen, setMenuOpen] = useState(false)

    useEffect(()=>{
        AOS.init({
            duration: 1500,
            once: true
    })
    }, [])

    useEffect(() => {

        
    }, [menuOpen])

    // simple function to toggle the visibilty of the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        const mobileMenu = document.getElementById('mobileMenu')
        const mobileNav = document.getElementById('mobileNav')

        // if it has, 'hidden' class, remove it, else add 'hidden' class
        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden')
            mobileMenu.classList.remove('max-w-0')
            mobileMenu.classList.add('w-full')
        }
        else {
            mobileMenu.classList.add('hidden')
            mobileMenu.classList.remove('w-full')
            mobileMenu.classList.add('max-w-0')
        }


        // (toggleMenu)? mobileMenu.style.maxWidth = "100%": "0"
    }
  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
        {/* <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0' data-aos="fade-down" data-aos-duration="1000">Emailster</h1> */}
        <img className='h-[100px] md:h-[120px] lg:h-[130px] align-super ' src="/emailster_logo3.png" alt="" />
        <nav className='hidden md:flex items-center gap-12 '>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' data-aos="fade-down" data-aos-duration="1000" href="">COMPANY</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' data-aos="fade-down" data-aos-duration="1500" href="">FEATURES</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' data-aos="fade-down" data-aos-duration="2000" href="">RESOURCES</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' data-aos="fade-down" data-aos-duration="2500" href="">DOCS</a>
        </nav>
        <button className='hidden z-50 md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer'>SIGN IN</button>
        <button onClick={toggleMenu} className='md:hidden text-4xl p-2 z-50'>{(!menuOpen) ? <i className='bx bx-menu text-[40px]'></i>: <i className='bx bx-x text-5xl'></i>}</button>
        
        {/* <i class='bxr bx-menu-right'></i>  paid one 😭*/}


        {/* Mobile menu - Hidden by default */}
        <div data-aos-duration="2500" id='mobileMenu' className={`fixed top-25 left-0 right-0 transform transition-transform duration-500 w-full  ${(menuOpen)? "translate-x-0": "-translate-x-full"}   z-45 p-5 bg-black bg-opacity-90 lg:hidden`}>
            <nav className='flex flex-col gap-6 items-center lg:hidden'>
                <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' href="">COMPANY</a>
                <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' href="">FEATURES</a>
                <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' href="">RESOURCES</a>
                <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 cursor-pointer' href="">DOCS</a>
            </nav>
        </div>
    </header>
  )
}
