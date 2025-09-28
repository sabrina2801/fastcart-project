import React, { useEffect, useState } from "react";
import {  useAddToCartMutation, useLazyGetTodoQuery } from "../api/GetApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useWish  from '../hooks/useWish'
import { motion } from "framer-motion";


const Wishlist = () => {
  const { data: produkt } = useLazyGetTodoQuery();
  const [wish, setWish] = useWish();
    const [addToCart] = useAddToCartMutation()
  const baseUrl = import.meta.env.VITE_API_URL;
  const handleDelete = (id) => {
    const updatedWish = wish.filter((e) => e.id !== id);
    setWish(updatedWish);
  };

  





  return (
    <div className="mt-[140px]">
      <div className="flex justify-between w-[80%] ml-[10%] mt-[20px]">
        <h1>
          <b>Wishlist ({wish.length})</b>
        </h1>
      
        <Button onClick={() => addToCart()} sx={{width: "180px", height: "38px", border: "1px solid #000000",color: "#000000",}}variant="outlined">Move All To Bag</Button>
      </div>

   <div className="flex flex-wrap gap-[30px]  justify-around mt-[60px]">
  {wish.length > 0 ? (
    wish.map((el, index) => (
      <motion.div
        key={el.id}
        className="w-[350px] h-[320px]  rounded shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.1 }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="flex justify-between w-[90%] ml-[5%] pt-[15px]">
          <div className="w-[55px] h-[32px] flex items-center justify-center rounded bg-[#DB4444] text-white">- 40%</div>
          <DeleteOutlineIcon onClick={() => handleDelete(el.id)} />
        </div>

    


                 <div className="flex justify-center">
  <img
    src={`${baseUrl}images/${t.image}`}
    alt={t.productName}
     className="w-[250px] h-[200px] mt-[10px] mb-3"
    onError={(e) => {
      e.currentTarget.src = "/default-product.png";
    }}
  />
</div>

        <div onClick={() => addToCart(el.id)} className="opacity-0 hover:opacity-100 w-[350px]  mt-[8px] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center bg-black">
          <ShoppingCartOutlinedIcon /> <span> Add To Cart</span>
              
           </div>
      </motion.div>
    ))
  ) : (
    <h2 className="text-gray-500 text-[40px] ">Your wishlist is empty</h2>
  )}
</div>


      <div className="flex justify-between w-[80%] ml-[10%] mt-[100px]">
        <div className="flex gap-[10px] ">
          <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
          <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
            Just For You
          </h1>
        </div>
        <Link to={'/ourProducts'}>
        <Button sx={{ width: "150px", border: "1px solid #000000", color: "#000000" }} variant="outlined">
          See All
        </Button>
        </Link>
      </div>



      

      <div className="ml-[10px] mt-[70px]">
        <Swiper
          spaceBetween={200}
          slidesPerView={4.5}
          className="mySwiper mt-10 ml-[20%] w-[90%]"
        >
          {produkt?.data?.products?.slice(0, 6)?.map((t) => (
            <SwiperSlide key={t.id}>
              <div className=" w-[300px] bg-gray-50 rounded-[5px] p-4 h-[350px] shadow-2xl">
                <Link to={`/ById/${t.id}`}>
                  <VisibilityIcon sx={{ marginLeft: "230px" }} />
                </Link>

                

                         <div className="flex justify-center">
  <img
    src={`${baseUrl}images/${t.image}`}
    alt={t.productName}
  className="w-[250px] h-[230px] mt-[10px] shadow"
    onError={(e) => {
      e.currentTarget.src = "/default-product.png";
    }}
  />
</div>

                <div className="opacity-0 hover:opacity-100 w-[299px] ml-[-15px] mt-[25px] hover:bg-[black] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center">
                  <ShoppingCartOutlinedIcon /> <span> Add To Cart</span>
                </div>
              </div>

              <h2 className="text-[20px] font-bold mt-4">{t.productName}</h2>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-bold">${t.price}</p>
                <p className="text-gray-400 line-through">$160</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
                ★★★★☆
                <span className="text-gray-500 text-sm ml-2">(88)</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Wishlist;
