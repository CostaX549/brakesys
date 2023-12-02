"use client"

// next image
import Image from "next/image"

//icons
import { MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar, MdOutlineMap } from 'react-icons/md';

//count up
import CountUp from 'react-countup';

//react intersection observer
import { useInView } from 'react-intersection-observer'

// motion
import { motion } from 'framer-motion'
import { fadeIn } from '/variants'


const About = () => {
  const [ ref, inView ] = useInView({
     threshold: 0.5,
  })
    return ( 
      <section   className='section flex items-center'  id='about' ref={ref}>
        <div className="container mx-auto">

          <div className='flex flex-col xl:flex-row xl:justify-between'>
            {/* image */}
            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6}}
            className='flex-1 mb-8'>
              <Image className='rounded-[20px]' src={'/images/about/carrofreando.webp'} width={625} height={448}/>
            </motion.div>

           {/* text & stats */} 
           <div className='flex-1 flex items-center xl:justify-center '>
            <div className='xl:max-w-[517px]'>
              <motion.h2 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6}}
              className='h2'>Sobre nós.</motion.h2>
              <motion.p 
               variants={fadeIn('up', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.6}}

              className='mb-[42px] max-w-xl'>A BRAKESYS é uma empresa de base tecnológica brasileira localizada em Taubaté-SP, especializada em oferecer equipamentos automotivos de manutenção..</motion.p>
           
               {/* btn */}  
               <motion.button 
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6}}
               className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px]  h-16 uppercase font-medium text-white tracking-[2px] text-[13px] w-[250px]'>
                Veja o projeto
                </motion.button>
            </div>
           </div>
          </div>

        </div>
      </section>  
    
  
 
    );
}

export default About;