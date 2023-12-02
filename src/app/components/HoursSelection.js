"use client"

import React, { useState } from 'react'



//icons
import { FaClock } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'






export default function HoursSelection() {

  const [startHour] = useState('07:00');
  const [endHour] = useState('18:00');


 return (
  <div className='w-full h-full flex xl:flex-row'>
     <div className='relative flex-1 '>
        { /* btn */ }
        <div className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
        <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
            <FaClock className='text-accent' />
             <div className='text-[15px] uppercase font-bold '>Horários</div>
            </div>
            <div className='flex items-center justify-center gap-x-3'>
            <div className='font-medium text-[13px] text-secondary  xl:ml-6'>
                {startHour}
              </div>
           <FaArrowRightLong className='text-accent text-[12px]' />    
           <div className='font-medium text-[13px] text-secondary '>
                {endHour}
              </div>
            </div>
         
        </div>
        { /* items */ }
    
     </div>
  </div>
  );
}
