//next image
import Image from 'next/image'

export default function WppButton() {

    const phoneNumber = '+5512920005356';
    
    const handleWhatsAppClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
      };

      return (

      <button className='btn-cta'  onClick={handleWhatsAppClick}>
      <div className='flex items-center'>
        <Image src={'/icons/buttons/WhatsApp.svg.png'} width={36} height={36} alt='' />
        <span className='hidden md:block ml-2 text-white font-semibold'>Entrar em Contato</span>
        </div>
        
      </button>
     );
}