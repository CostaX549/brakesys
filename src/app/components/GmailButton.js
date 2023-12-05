//next image
import Image from 'next/image'



export default function GmailButton() {

    const handleEmailClick = () => {
 
        const destinatario = 'brakesys.contato@gmail.com';
      
    
        const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${destinatario}`;
    
      
      
        window.open(linkEmail, '_blank');
      };

 return (


  <button className='btn-cta' onClick={handleEmailClick}>
  <div className='flex items-center'>
    <Image src={'/icons/buttons/gmail.png'} width={36} height={36} alt='' />
    <span className='hidden md:block ml-2 text-white font-semibold'>Envie um email</span>
    </div>
  </button>

);

}