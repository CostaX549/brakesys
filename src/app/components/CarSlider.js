"use client"



//next image
import Image from 'next/image'

//icons
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

//framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '/variants'

//car data
const cars  = [
  {
    type: 'Mecânica',
    name: 'Sangrador de Freio',
    price: 275,
    stars: 3.5,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },

];




export default function CarSlider() {
  const car = cars[0];

  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className='flex justify-center items-center' // Flex para centralizar vertical e horizontalmente
    >
      <div className='max-w-[385px] mx-auto sm:mx-0'>
        <Image src={car.image} width={380} height={284} alt=''/>
        <div className='flex justify-between '>
          <div>
            <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
            <h3 className='text-lg uppercase font-bold'>{car.name}</h3>
            <div className='mb-10 text-accent font-semibold uppercase'>R${car.price}</div>
          </div>
          {/* stars */}
          <div className='flex gap-x-2 text-accent h-max'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        {/* car info */}
        <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
          {car.info.map((item, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2'>
                <Image src={item.icon} width={24} height={24} alt=''/>
              </div>
              <div className='text-[12px] uppercase'>{item.text}</div>
            </div>
          ))}
        </div>
        <button className='btn btn-accent btn-lg'>See details</button>
      </div>
    </motion.div>
  );
}