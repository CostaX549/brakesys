"use client"

import React, { useState } from 'react'



//icons
import { FaCalendarAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function DateSelection() {

 
 

 return (
  <div className='w-full h-full flex xl:flex-row'>
     <div className='relative flex-1 '>
        { /* btn */ }
        <div className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 xl:border-r xl:border-black/10' >
 
         
            <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
            <FaCalendarAlt className='text-accent' />
             <div className='text-[15px] uppercase font-bold '>
             DIAS
             </div>
            </div>
            
          <div className="flex items-center gap-x-3 xl:ml-6"  >
            <div className='text-[13px] font-medium text-secondary'>
             SEGUNDA
            </div>
          <FaArrowRightLong className='text-accent text-[12px]' />
            <div className='text-[13px] font-medium text-secondary'>
              SEXTA
            </div>
          </div>
        </div>
        { /* menu */ }
       
     </div>
</div>
  );
}

