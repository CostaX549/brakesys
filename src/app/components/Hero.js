"use client"



//components

import { useContext } from "react"
import Search from "./Search"
import { SearchContext } from "../context/search"

//next image
import Image from 'next/image'

// motion

import {motion, easeInOut } from 'framer-motion';

//variants
import { fadeIn } from '/variants';
import GmailButton from "./GmailButton"
import WppButton from "./WppButton"


export default function Hero() {
 const {searchActive} = useContext(SearchContext)

 





  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>

      <div className='container mx-auto h-full xl:pt-10'>
        { /* text & img wrapper */}
       <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
         { /* text */}
         <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'> 
          <motion.h1 variants={ fadeIn('down', 0.2) } initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='h1'>
           Conheça o Melhor<span className='text-accent'> Projeto</span> Mecânico{''}
          </motion.h1>
          <motion.p
          variants={ fadeIn('down', 0.4) } initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}}
          className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
           Encontre a forma ideal de investir em sua oficina, não perca tempo e se torne cliente da Brake SYS.
          </motion.p>
          {/* btns */}
           <motion.div
            variants={ fadeIn('down', 0.6) } initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.8}}
            className='flex gap-x-3 justify-center xl:justify-start'>
            {/* btn wpp */}
            <WppButton />

            {/* btn gmail */}
            <GmailButton />
          
           </motion.div>
         </div>
         {/* img car*/}
         <motion.div 
         variants={ fadeIn('up', 0.6) } initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}}
         className='relative w-full h-full max-h-[50vh]  xl:max-w-[46%] xl:max-h-[57vh] xl:absolute xl:right-[100px] min-[1680px] xl:top-48'>
          <Image 
           src={'/images/hero/pngwing.com.png'}
           fill 
           alt='' 
           style={{objectFit: 'contain'}}
           priority
           />
         </motion.div>
       </div> 
      </div>
     
     {searchActive ? (
     <motion.div 
     initial={{ y: '-100%'}}
     animate={{y: 0}}
     transition={{ ease: easeInOut }}
     className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
          <Search />
        </motion.div>
        ) : (
       <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
        <motion.div 
        variants={ fadeIn('up', 0.8) } initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}}
        > 
        <Search />
        </motion.div>
        </div>
     
      )}
   
    </section>
  )
}
