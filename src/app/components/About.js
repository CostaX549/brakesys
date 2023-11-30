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
              <Image className='rounded-[20px]' src={'/images/about/car01.png'} width={600} height={448}/>
            </motion.div>

           {/* text & stats */} 
           <div className='flex-1 flex items-center xl:justify-center '>
            <div className='xl:max-w-[517px]'>
              <motion.h2 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6}}
              className='h2'>Car services simplified.</motion.h2>
              <motion.p 
               variants={fadeIn('up', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.6}}

              className='mb-[42px] max-w-md'>Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience.</motion.p>
              {/* stats */}
              <motion.div
               variants={fadeIn('up', 0.8)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2}}
               className='flex items-center gap-x-8 mb-12'>
                {/* car types */}
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineDirectionsCar className='text-5xl text-accent mb-2' />
                  <div className='text-3xl font-black'>
                    {inView ? ( <CountUp start={0} end={50} duration={3} delay={1} /> ) : null }
                    +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary '>
                    car <br /> types
                  </div>
                </div>
                 {/* rental outlets */}
                 <div className='flex flex-col w-[100px]'>
                  <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2' />
                  <div className='text-3xl font-black'>
                    {inView ? ( <CountUp start={0} end={135} duration={3} delay={1} /> ) : null }
                    +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary '>
                    rental <br /> outlets
                  </div>
                </div>
                 {/* repair points */}
                 <div className='flex flex-col w-[100px]'>
                  <MdOutlineBuildCircle className='text-5xl text-accent mb-2' />
                  <div className='text-3xl font-black'>
                    {inView ?  ( <CountUp start={0} end={35} duration={3} delay={1} /> ) : null }
                    
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary '>
                    repair <br /> points
                  </div>
                </div>
               
              
              </motion.div>
               {/* btn */}  
               <motion.button 
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6}}
               className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px]  h-16 uppercase font-medium text-white tracking-[2px] text-[13px] w-[250px]'>
                See all cars
                </motion.button>
            </div>
           </div>
          </div>

        </div>
      </section>  
    
  
 
    );
}

export default About;