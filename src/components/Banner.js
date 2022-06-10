import React from 'react';
import MyPDF from '../Data/Md._Istiak_Hasan_Resume.pdf'
import IstiakHasan from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2   h-auto'>
             <div className='text-slate-800 ml-7 flex justify-center items-center order-5 lg:order-1'>
               <div className='    mx-auto'>
                 
                 <h1 className='text-[#F75023] text-2xl font-semibold'>Hello,I'm</h1>
                  <h1 className='flex  items-center lg:text-5xl text-2xl '><span className='lg:text-8xl text-5xl'>𝓘</span >stiak <span className='ml-4 text-5xl lg:text-8xl'>ℌ</span>asan</h1>
                  <h1 className=' text-2xl my-3'>A <span className='text-green-500'>Creative Web Developer </span>From <span className='text-orange-400'>Bangladesh</span></h1> 
                  <p className='text-lg mb-5 text-gray-600'>I'm a creative web developer based in Bangladesh,and I'm very passionate and dedicated to my work.</p> 
                  <a href={MyPDF} className="btn bg-primary border-none text-white animate__animated animate__fadeInUp" download="My_File.pdf"> Download CV </a>
               </div>
             </div>
             <div className=' flex justify-center items-center lg:h-[50vh] order-2'>
                 <img src={IstiakHasan} alt="" />
             </div>
        </div>
    );
};

export default Banner;