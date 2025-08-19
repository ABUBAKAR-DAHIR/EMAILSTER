import React, { useEffect, useState } from 'react'
import Employees from './Employees'
import Aos from 'aos';

export default function Company() {

  // useEffect(()=>{
  //   Aos.init(
  //     {
  //       duration: 300,
  //       once: true
  //     }
  //   )
  // }, [])

  let [current, setCurrent] = useState(0)
  let employees = [
    { name: "Abubakar Dahir Hassan", rank: "CEO", img: "./ceo_img.png" },
    { name: "Muhammad Yunus", rank: "CSO", img: "/cso_img.png" },
    { name: "Abdullahi Hassan", rank: "Software Engineer", img: "/se_img.png" },
    { name: "Amin Dahir", rank: "Software Engineer", img: "/se_img2.png" },
    { name: "Nucmaan Bashiir", rank: "Lead SDE", img: "/sde_img.png" }
  ];


    function onClickPrev(){
      setCurrent(prev => (prev === 0? employees.length-1 : prev-1))
    }

    function onClickNext(){
      setCurrent(next => (next === employees.length-1 ? 0: next+1))
    }

  return (
    <main  data-aos="fade-up"  className=''>
      <hr className='mt-20' />
      <p className='w-[100%] text-center mt-15 font-bold text-4xl tracking-wider 'data-aos="fade-left" >MEET OUR DEVOUT EMPLOYEES</p>
      <Employees name={employees[current].name}
       rank={employees[current].rank} 
       img={employees[current].img}
       onClickPrev = {onClickPrev}
       onClickNext = {onClickNext}
       />
    </main>
  )
}
