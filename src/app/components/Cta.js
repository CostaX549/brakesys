'use client';

// next image
import Image from 'next/image'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '/variants'


export default function Cta() {
  return (
    <section className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10" id="contact">
      <div className='container mx-auto'>
       <div className='flex flex-col md:flex-row xl:items-center'>
        {/* text */}
        <div>
          <div>
            <h2>Download our App now and hit the road with ease</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate ducimus beatae qui nam vero illum accusamus, ipsam officiis magni.
            </p>
            {/* btns */}
            <motion.div
             variants={fadeIn('up', 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.6 }}
            className='flex gap-x-3 justify-center md:justify-start'>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/google-play.svg'}  width={132} height={36} alt=''/>
              </button>
              <button className='btn-cta' >
              <Image src={'/icons/buttons/app-store.svg'}  width={132} height={36} alt=''/>
              </button>
            </motion.div>
          </div>
        </div>
        {/* image */}
        <motion.div 
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
        className='flex-1 flex justify-center order-1 md:order-none'>
          <Image src={'/images/cta/phone.svg'} width={320} height={640} alt='' />
        </motion.div>
       </div>
      </div>
    </section>
  )
}
