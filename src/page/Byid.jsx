import React, { useState } from "react";
import { useGetByidQuery, useLazyGetTodoQuery } from "../api/GetApi";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";

const Byid = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetByidQuery(id);
  const [trigger, { data: produkt }] = useLazyGetTodoQuery();

  // ✅ безопасно получаем baseUrl
  const baseUrl = (import.meta.env.VITE_API_URL || "https://store-api.softclub.tj/").replace(/\/?$/, "/");

  const [value, setValue] = useState(1);
  const [wish, setWish] = useState(JSON.parse(localStorage.getItem("wish")) || []);
  const product = data?.data;

  const toggleWish = (item) => {
    const isInWish = wish.find((e) => e.id === item.id);
    const updatedWish = isInWish ? wish.filter((e) => e.id !== item.id) : [...wish, item];
    localStorage.setItem("wish", JSON.stringify(updatedWish));
    setWish(updatedWish);
  };

  if (isLoading) {
    return (
      <h1 className="text-center mt-[200px] text-[50px]">
        <b>Loading...</b>
      </h1>
    );
  }

  return (
    <div className="dark:text-white mt-[70px]">
      <div className="max-w-7xl mt-10 p-4 ml-[10%]">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Слайдер мини-изображений */}
          <Swiper direction="vertical" className="w-[170px] h-[500px] mt-[20px]" slidesPerView={3.5}>
            {product?.images?.map((img, index) => {
              const isInWish = wish.find((e) => e.id === product.id);
              return (
                <SwiperSlide key={index} className="relative">
                  <img
                    src={`${baseUrl}images/${img.images}`}
                    className="w-full object-cover rounded-lg shadow-xl"
                    onError={(e) => { e.currentTarget.src = "/default-product.png"; }}
                  />
                  <FavoriteBorderIcon
                    onClick={() => toggleWish(product)}
                    sx={{
                      fontSize: 28,
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: isInWish ? "red" : "gray",
                      cursor: "pointer",
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Главное изображение */}
          <div className="flex justify-center">
            <img
              src={`${baseUrl}images/${product?.images[0]?.images}`}
              alt={product?.productName}
              className="w-[500px] h-[450px] mt-[50px] mb-3"
              onError={(e) => { e.currentTarget.src = "/default-product.png"; }}
            />
          </div>

          {/* Информация о продукте */}
          <div className="w-full ml-[20px] md:w-1/2 space-y-4 mt-[50px]">
            <h1 className="text-3xl font-bold">{product?.productName}</h1>

            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
              ★★★★☆ <span className="text-gray-500 text-sm ml-2">(88)</span>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <p className="text-[#DB4444] font-bold text-2xl">${product?.price}</p>
              <p className="text-gray-400 line-through">$160</p>
            </div>

            <p className="text-gray-600">{product?.description}</p>

            <h1><b>Colours:</b></h1>
            <h1><b>Size:</b></h1>
            <div className="flex gap-[10px]">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="w-[45px] h-[25px] border border-[#00000080] dark:text-white flex items-center justify-center rounded hover:bg-[#f68a8a]"
                >
                  <b>{size}</b>
                </button>
              ))}
            </div>

            <div className="flex gap-[10px] mt-[30px] items-center">
              <div className="flex">
                <Button onClick={() => setValue((v) => (v > 0 ? v - 1 : 0))} sx={{ border: "1px solid #00000080", color: "#00000080", width: "80px", height: "35px" }}>-</Button>
                <h1 className="border border-[#00000080] w-[70px] h-[35px] rounded flex items-center justify-center"><b>{value}</b></h1>
                <Button onClick={() => setValue(value + 1)} sx={{ border: "1px solid #00000080", color: "#00000080", width: "80px", height: "35px" }}>+</Button>
              </div>

              <Button sx={{ width: "110px", backgroundColor: "#DB4444", height: "35px" }} variant="contained">
                Buy Now
              </Button>

              <FavoriteBorderIcon
                onClick={() => toggleWish(product)}
                sx={{
                  fontSize: 28,
                  color: wish.find((e) => e.id === product.id) ? "red" : "gray",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="mt-[30px] flex flex-col gap-2">
              <button className="w-[320px] h-[45px] border rounded border-[#00000051] flex items-center justify-center gap-2">
                <LocalShippingOutlinedIcon /> <span>Free Delivery</span>
              </button>
              <button className="w-[320px] h-[45px] border rounded border-[#00000051] flex items-center justify-center gap-2">
                <LoopOutlinedIcon /> <span>Return Delivery</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="flex gap-[10px] ml-[130px] mt-[50px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className="flex items-center text-[20px] font-bold text-[#DB4444]">Related Item</h1>
      </div>

      <div className="ml-[10px] mt-[50px]">
        <Swiper spaceBetween={20} slidesPerView={4.5} className="mySwiper mt-10 ml-[20%] w-[90%]">
          {produkt?.data?.products?.slice(0, 6)?.map((t) => {
            return (
              <SwiperSlide key={t.id}>
                <div className="relative w-[250px] bg-gray-50 rounded-[5px] p-4 h-[240px] shadow-2xl">
                  <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">-40%</div>
                  <Link to={`/ById/${t.id}`}>
                    <VisibilityIcon sx={{ marginLeft: "190px" }} />
                  </Link>

                  <div className="flex justify-center">
                    <img
                      src={`${baseUrl}images/${t.image}`}
                      alt={t.productName}
                      className="w-[150px] h-[100px] mb-3"
                      onError={(e) => { e.currentTarget.src = "/default-product.png"; }}
                    />
                  </div>

                  <div className="opacity-0 hover:opacity-100 w-[248px] ml-[-15px] mt-[12px] hover:bg-[black] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center">
                    Add To Cart
                  </div>
                </div>

                <h2 className="text-[20px] font-bold mt-4">{t.productName}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-red-500 font-bold">${t.price}</p>
                  <p className="text-gray-400 line-through">$160</p>
                </div>

                <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
                  ★★★★☆ <span className="text-gray-500 text-sm ml-2">(88)</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Byid;
