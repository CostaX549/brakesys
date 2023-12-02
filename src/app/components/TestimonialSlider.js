"use client"

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

import { useState, useEffect } from 'react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules'

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '/variants'

// next image
import Image from 'next/image'

 // firebase
import { database } from '../../../services/firebase';

import { collection, addDoc, getDocs } from 'firebase/firestore';








export default function TestimonialSlider() {
  // data
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    job: '',
    message: '',
  });
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formError, setFormError] = useState('');

  const loadTestimonials = async () => {
    try {
      const testimonialsCollection = collection(database, 'testimonials');
      const testimonialsSnapshot = await getDocs(testimonialsCollection);
      const testimonialsList = [];

      testimonialsSnapshot.forEach((doc) => {
        testimonialsList.push({ id: doc.id, ...doc.data() });
      });

      setAllTestimonials(testimonialsList);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar depoimentos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Carrega os depoimentos ao montar o componente
    loadTestimonials();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!testimonialData.name || !testimonialData.job || !testimonialData.message) {
      setFormError('Por favor, preencha todos os campos.');
      return;
    }

    if (testimonialData.message.length > 150) {
      setFormError('O feedback deve ter no máximo 50 caracteres.');
      return;
    }

    try {

      setFormError('');

   
      await addDoc(collection(database, 'testimonials'), testimonialData);

      await loadTestimonials();

      setTestimonialData({ name: '', job: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar depoimento:', error);
    }
  };
  return (
    <motion.div
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.6 }}
    className='container mx-auto'
    >
      {allTestimonials.length === 0 ? (
        <div className="h2 text-center">
          Nenhum feedback disponível.
        </div>
      ) : (
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-[450px] xl:h-[400px]"
        > 
        {allTestimonials.map((person, index) => {
          const { message,name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col justify-center items-center text-center'>
                <FaQuoteLeft className='text-7xl text-accent mb-6' />
                <div className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium'>{message}</div>
             
                <div className='text-lg font-medium'>{name}</div>
                <div className='text-secondary'>{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      )}
      <form  onSubmit={handleFormSubmit} className='flex flex-col justify-center h-[350px] gap-2 h-14 mt-2'> 
      {formError && (
          <div className="text-red-500 mt-2">
            {formError}
          </div>
        )}
      <input
  type="text"
  name="name"
  placeholder="Seu nome"
  value={testimonialData.name}
  onChange={(e) => setTestimonialData({ ...testimonialData, name: e.target.value })}
  className='outline-none bg-white h-10 border rounded-lg pl-4 p-4 focus:border-accent'
/>

<input
  type="text"
  name="job"
  placeholder="Profissão"
  value={testimonialData.job}
  onChange={(e) => setTestimonialData({ ...testimonialData, job: e.target.value })}
  className='outline-none bg-white h-10 border rounded-lg pl-4 focus:border-accent'
/>

<textarea
  name="message"
  placeholder="Feedback"
  value={testimonialData.message}
  onChange={(e) => setTestimonialData({ ...testimonialData, message: e.target.value })}
  className='outline-none bg-white h-20 border rounded-lg pl-4 focus:border-accent resize-none'
></textarea>
        <button   type='submit' className='btn btn-sm w-full btn-accent w-24'>
          Enviar
        </button>
      </form>
    </motion.div>
  )
}
