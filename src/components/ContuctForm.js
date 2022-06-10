import React, { useRef } from 'react';
import { BeakerIcon, GlobeAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';



const ContuctForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_1t9lrxq', 'template_yku1xc2', form.current, 'hGaf0CeFC05tVDKRO')
        .then((result) => {
             
            
            toast.success("Message send successfully..")
            e.target.reset()
        }, (error) => {
            toast.error("Faield to send")

        });
    };
    return (
        <div id='contact' className=''>
            <h1 className='text-4xl text-primary my-20 font-bold text-center uppercase '>Contact</h1>
            <div className='lg:grid grid-cols-2 gap-5 w-[80%] mx-auto '>
                <div className='bg-gradient-to-r from-primary to-[#852f17] lg:px-10 py-16 '>
                    <form className='w-[90%] mx-auto outline-none' ref={form} onSubmit={sendEmail}>
                    <h1 className='text-white text-xl font-semibold'>Send Me a Message</h1>
                    <input style={{background:"none",borderBottom:"1px solid white",borderRadius:"0px",outline:"none",color:"white"}} type="text" name='from_name' placeholder="Name" className="input outline-none  mb-4  w-full " />
                    <input style={{background:"none",outline:"none",borderBottom:"1px solid white",borderRadius:"0px",color:"white"}} type="email" name='email_id' placeholder="Email" className="input outline-none  mb-4  w-full " />
                    <input style={{background:"none",outline:"none",borderBottom:"1px solid white",borderRadius:"0px",color:"white"}} type="text" name='from_subject' placeholder="Subject" className="input outline-none  mb-4  w-full " />
                    <textarea rows="4" style={{background:"none",borderBottom:"1px solid white",outline:"none",borderRadius:"0px",color:"white"}} type="text" name='message' placeholder="message" className="textarea  mb-4  w-full " />
                   <button type='submit' className='btn bg-white border-none text-primary font-bold hover:text-white hover:bg-[#082044] btn-sm'>Send</button>
                    </form>
                </div>
                <div className='text-white flex flex-col justify-center px-5 mt-10 lg:mt-0'>
                    <h1 className='underline text-slate-500 font-semibold text-2xl decoration-red-500 '>Contact Me</h1>
                    <p className='text-slate-600 mb-9 font-semibold '>I always open for any suggestion or just to have a chat</p>
                    <div className='text-slate-500'>
                         <div className='flex items-center mb-12'>
                            <LocationMarkerIcon  className='h-6 w-6 mr-5' />
                            <p className='text-sm'><span className='font-bold'>Address:</span>Muktagacha Mymensing Road,Jamalpur 2000</p>
                         </div>
                         <div className='flex items-center mb-12'>
                            <PhoneIcon  className='h-6 w-6 mr-5' />
                            <p className='text-sm'><span className='font-bold'>Phone:</span>+8801306910346</p>
                         </div>
                         <div className='flex items-center mb-12'>
                            <MailIcon  className='h-6 w-6 mr-5' />
                            <p className='text-sm'><span className='font-bold'>Email:</span>istiakhasan.info@gmail.com</p>
                         </div>
                         <div className='flex items-center mb-12'>
                            <GlobeAltIcon  className='h-6 w-6 mr-5' />
                            <p className='text-sm'><span className='font-bold'>Website:</span>Muktagacha Mymensing Road,Jamalpur 2000</p>
                         </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContuctForm;