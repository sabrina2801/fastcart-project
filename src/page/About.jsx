import React from 'react'
import img1 from '../image/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import img2 from '../image/Services (3).png'
import img3 from '../image/Services (4).png'
import img4 from '../image/Services (5).png'
import img5 from '../image/Services (6).png'
import img6 from '../image/Frame 874.png'
import img7 from '../image/Frame 875.png'
import img8 from '../image/Frame 876.png'
import img9 from '../image/Services.png'
import img10 from '../image/Services (1).png'
import img11 from '../image/Services (2).png'

import icon from '../image/Frame 877.png'




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';






const About = () => {
  return (
    <div className='mt-[100px]'>



      <div className='flex gap-[5px] mt-[60px] ml-[10%]'>
        <p className='text-gray-500'>Home /</p>
        <p>About</p>
      </div>




<div className='flex justify-around '>
  <div className='w-[30%]'>
  <h1 className='text-[40px] font-bold mt-[40px] '>Our Story</h1>
  <p className='text-gray-800 dark:text-white leading-[27px] mt-[30px] text-[17.5px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
  <p className='text-gray-800 dark:text-white leading-[27px] mt-[30px] text-[17.5px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
</div>

<div>
  <img src={img1} alt="" />
</div>


</div>


<div className='flex justify-around mt-[120px]'>

  <div className='w-[18%] h-[220px] border pt-[20px] rounded shadow-2xl bg-white text-black border-gray-200  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105'>
    <img className='mx-auto  w-[70px]' src={img2} alt="" />
    <p className='text-[30px] font-bold text-center mt-[10px]'>10.5k </p>
    <h1 className='text-center text-gray-600 text-[17px] mt-[7px]'>Sallers active our site</h1>
  </div>

<div className='w-[18%] h-[220px] border pt-[20px] rounded shadow-2xl  border-gray-200 bg-[#DB4444] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105'>
    <img className='mx-auto  w-[70px]' src={img3} alt="" />
    <p className='text-[30px] font-bold text-center mt-[10px] text-white'>33k</p>
    <h1 className='text-center text-gray-200 text-[17px] mt-[7px]'>Mopnthly Produduct Sale</h1>
  </div>

 <div className='w-[18%] h-[220px] border pt-[20px] rounded shadow-2xl bg-white text-black   border-gray-200  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105'>
    <img className='mx-auto w-[70px]' src={img4} alt="" />
    <p className='text-[30px] font-bold text-center mt-[10px]'>45.5k</p>
    <h1 className='text-center text-gray-600 text-[17px] mt-[7px]'>Customer active in our site</h1>
  </div>

  <div className='w-[18%] h-[220px] border pt-[20px] rounded shadow-2xl bg-white text-black border-gray-200  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105'>
    <img className='mx-auto w-[70px]' src={img5} alt="" />
    <p className='text-[30px] font-bold text-center mt-[10px]'>25k</p>
    <h1 className='text-center text-gray-600 text-[17px] mt-[7px]'>Anual gross sale in our site</h1>
  </div>

</div>




<div className='flex gap-[10px] ml-[160px] mt-[100px]'>
  <div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]'></div>
  <h1 className=' flex items-center text-[20px] font-bold text-[#DB4444]'>Categories</h1>
</div>
<h1 className='text-[30px] font-bold ml-[160px] mt-[20px]'>Explore Our Products</h1>


 <div className='mt-[100px]'>
       <Swiper slidesPerView={4.5} spaceBetween={40} keyboard={{ enabled: true,}}  modules={[Keyboard, Pagination, Navigation]} className="mySwiper w-[90%]" >
           <SwiperSlide>
          <img src={img6} alt="" />
          <p className='text-[23px] font-bold mt-[15px] ml-[5px]'>Tom Cruise</p>
          <p className='text-gray-600 ml-[5px]'>Founder & Chairman</p>
          <img className='mt-[15px] ml-[5px] dark:invert' src={icon} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img7} alt="" />
          <p className='text-[23px] font-bold mt-[15px] ml-[5px]'>Emma Watson</p>
          <p className='text-gray-600 ml-[5px]'>Managing Director</p>
          <img className='mt-[15px] ml-[5px] dark:invert' src={icon} alt="" />
        </SwiperSlide>

          <SwiperSlide>
          <img src={img8} alt="" />
          <p className='text-[23px] font-bold mt-[15px] ml-[5px]'>Will Smith</p>
          <p className='text-gray-600 ml-[5px]'>Product Designer</p>
          <img className='mt-[15px] ml-[5px] dark:invert' src={icon} alt="" />
        </SwiperSlide>

          <SwiperSlide>
          <img src={img6} alt="" />
          <p className='text-[23px] font-bold mt-[15px] ml-[5px]'> Cruise Tom</p>
          <p className='text-gray-600 ml-[5px]'> Chairman</p>
          <img className='mt-[15px] ml-[5px] dark:invert' src={icon} alt="" />
        </SwiperSlide>

         <SwiperSlide>
          <img src={img7} alt="" />
          <p className='text-[23px] font-bold mt-[15px] ml-[5px]'>Tom Cruise</p>
          <p className='text-gray-600 ml-[5px]'>Founder & Chairman</p>
          <img className='mt-[15px] ml-[5px] dark:invert' src={icon} alt="" />
        </SwiperSlide>
     
      </Swiper>
 </div>







<div className='flex justify-around text-center mt-[120px]'>
  <div >
  <img className='ml-[90px] w-[70px] dark:invert' src={img9} alt="" />
  <h1 className='mt-[15px] font-bold'>FREE AND FAST DELIVERY</h1>
  <p className='text-gray-600 mt-[5px]'>Free delivery for all orders over $140</p>
</div>


  <div >
  <img className='ml-[75px] w-[70px] dark:invert' src={img10} alt="" />
  <h1 className='mt-[15px] font-bold'>24/7 CUSTOMER SERVICE</h1>
  <p className='text-gray-600 mt-[5px]'>Friendly 24/7 customer support</p>
</div>

  <div >
  <img className='ml-[80px] w-[70px] dark:invert' src={img11} alt="" />
  <h1 className='mt-[15px] font-bold'>MONEY BACK GUARANTEE</h1>
  <p className='text-gray-600 mt-[5px]'>We reurn money within 30 days</p>
</div>
</div>





    </div>
  )
}

export default About