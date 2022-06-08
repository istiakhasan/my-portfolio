import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2  '>
             <div className='text-white ml-7'>
               <div className=' mt-52   mx-auto'>
                 <h1 className='text-[#F75023] text-2xl font-semibold'>Hello,I'm</h1>
                 <h1 className='flex  items-center text-5xl'><span className='text-8xl'>𝓘</span >stiak <span className='ml-4 text-8xl'>ℌ</span>asan</h1>
                  <h1 className=' text-2xl my-3'>A <span className='text-green-500'>Creative Web Developer </span>From <span className='text-orange-400'>Bangladesh</span></h1> 
                  <p className='text-lg text-gray-300'>I'm a creative web developer based in Bangladesh,and I'm very passionate and dedicated to my work.</p> 
               </div>
             </div>
             <div className=' flex justify-center items-center h-[80vh]'>
                 <img src="https://image.shutterstock.com/image-vector/continuous-line-drawing-young-man-260nw-1088767025.jpg" alt="" />
             </div>
        </div>
    );
};

export default Banner;