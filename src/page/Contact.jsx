import React from 'react'
import img1 from '../image/icons-phone.png'
import img2 from '../image/icons-mail.png'
import Button from '@mui/material/Button';



const Contact = () => {
  return (
    <div className='mt-[120px]'>


  <div className='flex gap-[5px] mt-[60px] ml-[10%]'>
        <p className='text-gray-500'>Home /</p>
        <p>About</p>
      </div>





<div className="flex gap-6 ml-[10%] mt-[60px]">
  
  <div className="w-[28%] min-h-[450px] shadow-2xl pt-[50px] pl-[30px] bg-gray-50 rounded-lg">
    <div className="flex items-center gap-[15px]">
      <img src={img1} alt="" />
      <p className="font-bold text-[18px]">Call To Us</p>
    </div>
    <h1 className="mt-[15px] text-gray-700 text-[17px]">
      We are available 24/7, 7 days a week.
    </h1>
    <p className="mt-[5px] text-gray-700 text-[17px]">
      Phone: +8801611112222
    </p>

    <div className="w-[90%] h-[1px] bg-gray-300 mt-[45px]"></div>

    <div className="flex items-center gap-[15px] mt-[25px]">
      <img src={img2} alt="" />
      <p className="font-bold text-[18px]">Write To Us</p>
    </div>
    <h1 className="mt-[15px] text-gray-700 text-[17px] w-[80%]">
      Fill out our form and we will contact you within 24 hours.
    </h1>
    <p className="mt-[15px] text-gray-700 text-[17px]">
      Emails: customer@exclusive.com
    </p>
    <h1 className="mt-[5px] text-gray-700 text-[17px]">
      Emails: support@exclusive.com
    </h1>
  </div>


  <div className=" p-6 rounded-lg shadow-2xl border-[1px solid gray] bg-gray-50 w-[60%] pt-[50px]">
    <div className="flex gap-4 mb-4">
      <input type="text" placeholder="Name" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"/>
      <input type="email" placeholder="Email" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"/>
      <input type="tel" placeholder="Phone" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"/>
    </div>

    <textarea placeholder="Your Message" rows={4} className="w-full h-[200px] mt-[20px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"></textarea>

   <div className=' ml-[500px] mt-[30px]'>
    <Button sx={{backgroundColor:"#DB4444", height:"45px", width:"200px"}} variant="contained">View All Products</Button>
  </div>
  </div>
</div>







    </div>
  )
}

export default Contact