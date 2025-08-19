import React from 'react'
import ServiceLet from './ServiceLet.jsx'

export default function Services() {
    let services = [
        { number: "200+", comment: "Customers served" },
        { number: "1000+", comment: "Emails sent" },
        { number: "350+", comment: "Successful campaigns" },
        { number: "500K+", comment: "Leads generated" },
        { number: "120+", comment: "Partners worldwide" },
        { number: "10+", comment: "Years in business" },
    ];

  return (
    <div>
        <h1 className='text-xl text-center tracking-wider font-medium sm:text-2xl md:text-4xl'>OUR ACHIVEMENTS</h1>
        <div className='flex flex-wrap gap-10 px-10 my-20 justify-around w-full'>
            {
                services.map((service, index) =>{
                   return <ServiceLet number = {service.number} comment = {service.comment}/>
                })
            }
        </div>
    </div>
  )
}
