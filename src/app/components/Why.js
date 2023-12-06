"use client"

//next image
import Image from "next/image"

//framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from "/variants"

// icons
import { MdSecurity, MdAccessTime, MdTrendingUp } from 'react-icons/md'

export default function Why() {
  return (
    <section className="section flex items-center " id="why">
      <div className="container mx-auto ">
        <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6}}
        className='h2 text-center mt-[50px]'>Sangrador de Freio Pneumático
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6}}
        className='max-w-[800px] sm:w-full text-center mx-auto mb-2'>Um projeto que utiliza uma forma alternativa para realizar o processo de sangria do veículo, utilizando ar comprimido. A sangria do carro é a responsável pelo controle de ar dos freios.
        </motion.p>
        { /* car image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6}}
         className='flex justify-center mb-6 xl:mb-2'>
          <Image src={'/images/why/sangradorjuniorhd.png'} className='p-6' width={320} height={320} alt='' />
        </motion.div>
        {/* grid items */}
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6}}
         className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]'>
          {/* item 1 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdAccessTime className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>Agilidade</h3>
            <p className='hidden xl:flex'>Diminui o tempo do processo de sangria.</p>
          </div>
            {/* item 2 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdTrendingUp className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>Eficiência</h3>
            <p className='hidden xl:flex'>Testado e aprovado por professores e estudantes.</p>
          </div>
               {/* item 3 */}
               <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdSecurity className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>Segurança</h3>
            <p className='hidden xl:flex'>Torna o trabalho mais seguro para quem realizá-lo.</p>
          </div>
            
        </motion.div>
      </div>
    </section>
  )
}
