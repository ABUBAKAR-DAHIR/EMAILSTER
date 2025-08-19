import React from 'react'
import {useInView} from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export default function ServiceLet(props) {
    let [count, setCount] = useState(0)
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const {number, comment} = props
    


    useEffect(() => {
        if(!inView) return 
        
        let current = 0

        let end = parseInt(number.replace(/\D/g, "")) || 0
        if(end === 0) return
        let duration = 2000
        let incrementTime = 50
        let steps = Math.floor(duration/incrementTime)
        let increment = end / steps

        let timer = setInterval(() => {
            current += increment
            if(current >= end){
                current = end
                clearInterval(timer)
            }
            setCount(Math.floor(current))
        }, incrementTime);
        return () => clearInterval(timer)
        
    }, [inView, number])


  return (
    <div ref={ref} className='relative  w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-md lg:rounded-xl'>
        <div className='absolute inset-[3px] text-center bg-black rounded-md lg:rounded-xl flex flex-col  items-center justify-evenly text-[22px] md:text-2xl lg:text-3xl '>
            <h1>{count} 
                {number.includes('+')? '+' : ""}
                </h1>
            <p>{comment}</p>
        </div>
    </div>
  )
}





