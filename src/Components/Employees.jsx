import React from 'react'

export default function Employees(props) {
  return (
    <main data-aos="fade-up" data-aos-duration="6000"  className='h-[100vh] flex items-center justify-center'>
        <div className='w-[100%]  lg:w-[925px] flex items-center justify-center'>
            <div className='w-[65%] md:w-[500px] border-2 border-white bg-[#e99b63] rounded-xl bg-brand self-center relative'>
                <button className='bg-black absolute left-[-30px] top-[40%]  text-white w-[60px] h-[60px] border-1 border-white rounded-full text-3xl  hover:bg-[#e99b63]' onClick={props.onClickPrev}><i className='text-white font-extrabold text-3xl' class='bx bx-right-arrow-alt bx-rotate-180'></i></button>
                <button className='bg-black absolute right-[-30px] top-[40%]  text-white w-[60px] h-[60px] border-1 border-white rounded-full text-3xl  hover:bg-[#e99b63]' onClick={props.onClickNext}><i className='text-white font-extrabold text-3xl' class='bx bx-left-arrow-alt bx-rotate-180'></i></button>
                <div  className='flex flex-col w-[100%] justify-center items-center '>
                    <img className='w-[500px] h-[350px] lg:max-w-[600px] rounded-t-xl' src={`${props.img}`} alt={props.rank+"_img"} />
                    <p className='font-bold tracking-wider my-2 md:text-xl lg:text-3xl'>{props.rank}</p>
                    <p className=' md:text-1xl lg:text-2xl'>{props.name}</p>
                </div>
            </div>
        </div>
    </main>
  )
}
