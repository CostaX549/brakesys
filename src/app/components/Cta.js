'use client';

// next image
import Image from 'next/image'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '/variants'


export default function Cta() {
  const phoneNumber = '+5512920005356'; // Substitua pelo seu número de telefone

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const handleEmailClick = () => {
 
    const destinatario = 'brakesys.contato@gmail.com';
  

    const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${destinatario}`;

  
  
    window.open(linkEmail, '_blank');
  };
  return (
    <section className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10" id="contact">
      <div className='container mx-auto'>
       <div className='flex flex-col md:flex-row xl:items-center'>
        {/* text */}
        <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
          <div className='max-w-[520px] mx-auto order-2  xl:order-none'>
            <motion.h2 
             variants={fadeIn('right', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.6 }}
            className='h2'>Entre em contato conosco</motion.h2>
            <motion.p
             variants={fadeIn('right', 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.6 }}
             className='mb-10'
            >
             Oferecemos um atendimento de qualidade e prestativo para você, sendo possível realizar a negociação da compra da nossa peça automativa.
            </motion.p>
            {/* btns */}
            <motion.div
             variants={fadeIn('right', 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.6 }}
            className='flex gap-x-3 justify-center md:justify-start'>
              {/* btn appstore */}
            <button className='btn-cta'  onClick={handleWhatsAppClick}>
            <div className='flex items-center'>
              <Image src={'/icons/buttons/WhatsApp.svg.png'} width={36} height={36} alt='' />
              <span className='hidden md:block ml-2 text-white font-semibold'>Entrar em Contato</span>
              </div>
              
            </button>
             {/* btn gmail */}
            <button className='btn-cta' onClick={handleEmailClick}>
            <div className='flex items-center'>
              <Image src={'/icons/buttons/gmail.png'} width={36} height={36} alt='' />
              <span className='hidden md:block ml-2 text-white font-semibold'>Envie um email</span>
              </div>
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
        className='flex-1 flex justify-center order-1 md:order-none rounded-lg'>
          <Image src={'/images/cta/brakesys.png'} width={1100} height={1100} alt='' />
        </motion.div>
       </div>
      </div>
    </section>
  )
}
