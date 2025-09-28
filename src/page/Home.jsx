import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import img1 from "../image/1126a357e5011a6f245df4c38eae015c7c9ccbe7.png";
import img2 from "../image/dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg";
import img3 from "../image/Ellipse 23.png";
import img4 from "../image/Frame 694.png";
import img5 from "../image/ps5-slim-goedkope-playstation_large 1.png";
import img6 from "../image/attractive-woman-wearing-hat-posing-black-background 1.png";
import img7 from "../image/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import img8 from "../image/Frame 706.png";
import img9 from "../image/Services.png";
import img10 from "../image/Services (1).png";
import img11 from "../image/Services (2).png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {   useAddToCartMutation, useGetTodoQuery, useLazyGetTodoQuery } from "../api/GetApi";
import { Link } from "react-router-dom";
import useWish from "../hooks/useWish";
import img12 from '../image/Category-CellPhone.png'

const Home = () => {
  const { data } = useGetTodoQuery();
  const { data: produkt } = useLazyGetTodoQuery();
  const [addToCart] = useAddToCartMutation()
  const baseUrl = import.meta.env.VITE_API_URL;
  


  const [wish, setWish] = useWish();

    const handleHeartClick = (product) => {
    const exists = wish.some((w) => w.id === product.id);
    if (exists) {
      setWish(wish.filter((w) => w.id !== product.id));
    } else {
      setWish([...wish, product]);
    }
  };

  return (
    <div className="mt-[80px]">
      <div className="flex justify-between  px-20 py-10">
        <div className="w-[40%] flex flex-col gap-4 text-gray-700 dark:text-white font-medium leading-7 ml-[30px] mt-[5px]">
          <h1 className="cursor-pointer hover:text-black">Woman’s Fashion</h1>
          <h1 className="cursor-pointer hover:text-black">Men’s Fashion</h1>
          <h1 className="cursor-pointer hover:text-black">Electronics</h1>
          <h1 className="cursor-pointer hover:text-black">Home & Lifestyle</h1>
          <h1 className="cursor-pointer hover:text-black">Medicine</h1>
          <h1 className="cursor-pointer hover:text-black">Sports & Outdoor</h1>
          <h1 className="cursor-pointer hover:text-black">Baby’s & Toys</h1>
          <h1 className="cursor-pointer hover:text-black">Groceries & Pets</h1>
        </div>
        <div className="w-[1px] h-[380px] bg-[#e9e4e4] ml-[-300px]"></div>

        <div className="w-[65%]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-2xl overflow-hidden "
          >
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-between items-center w-[1000px] h-[370px] bg-black rounded-2xl px-10 py-10 pl-[80px]">
                  <div className="flex flex-col justify-center gap-4 mt-[-50px]">
                    <div className="flex items-center gap-3">
                      <img className="w-10 h-10" src={img1} alt="icon" />
                      <p className="text-gray-300">iPhone 14 Series</p>
                    </div>
                    <h1 className="text-white text-[40px] font-bold w-[80%]">
                      Up to 10% off Voucher{" "}
                    </h1>
                  </div>
                  <div className="w-[400px] h-[280px] flex justify-center items-center">
                    <img
                      className="max-h-full object-contain ml-[-150px] mt-[25px]"
                      src={img2}
                      alt="promo"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex gap-[10px] ml-[150px] mt-[50px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
          Today’s
        </h1>
      </div>

      <div className="flex gap-[100px] ml-[150px] mt-[40px]">
        <div>
          <h1 className="text-[30px] font-bold">Flash Sales</h1>
        </div>

        <div className="flex gap-7 mt-[-20px]">
          <div className="flex">
            <div>
              <h1>Days</h1>
              <h1 className="text-[30px] font-bold">03</h1>
            </div>
            <h1 className="text-[35px] mt-[15px] ml-[20px] text-[#DB4444] font-bold">
              :
            </h1>
          </div>
          <div className="flex">
            <div>
              <h1>Hours</h1>
              <h1 className="text-[30px] font-bold">23</h1>
            </div>
            <h1 className="text-[35px] mt-[15px] ml-[20px] text-[#DB4444] font-bold">
              :
            </h1>
          </div>
          <div className="flex">
            <div>
              <h1>Minutes</h1>
              <h1 className="text-[30px] font-bold">19</h1>
            </div>
            <h1 className="text-[35px] mt-[15px] ml-[20px] text-[#DB4444] font-bold">
              :
            </h1>
          </div>
          <div className="flex">
            <div>
              <h1>Seconds</h1>
              <h1 className="text-[30px] font-bold">56</h1>
            </div>
          </div>
        </div>
      </div>








      <div className="ml-[10px] mt-[70px]">
  <Swiper
    spaceBetween={300}
    slidesPerView={4.5}
    className="mySwiper mt-10 ml-[20%] w-[90%]"
  >
    {produkt?.data?.products?.slice(0, 6)?.map((t) => {
      const isInWish = wish.find((e) => e.id === t.id);
    

      const handleHeartClick = () => {
        if (!isInWish) {
          const updatedWish = [...wish, t];
          localStorage.setItem("wish", JSON.stringify(updatedWish));
          setWish(updatedWish);
        } else {
          const updatedWish = wish.filter((v) => v.id !== t.id);
          localStorage.setItem("wish", JSON.stringify(updatedWish));
          setWish(updatedWish);
        }
      };

  

      return (
        <SwiperSlide key={t.id}>
          <div className="relative w-[330px] bg-[#fdfbfb] rounded-[5px] p-4 h-[350px] shadow-2xl">
            <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">-40%
            </div>

            <Link to={`/ById/${t.id}`}>
              <VisibilityIcon sx={{ marginLeft: "260px" }} />
            </Link>

            <FavoriteBorderIcon
              onClick={handleHeartClick}
              sx={{
                fontSize: 28,
                marginLeft: "260px",
                marginTop: "10px",
                color: isInWish ? "red" : "gray",
                cursor: "pointer",
              }}
            />

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

           <div onClick={() => addToCart(t.id)} className="opacity-0 hover:opacity-100 w-[330px] ml-[-16px] mt-[8px] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center bg-black">
                Add to Cart
           </div>

          </div>

       <div className="w-[200%]">
           <h2 className="text-[20px] font-bold mt-4">{t.productName}</h2>

          <div className="flex items-center gap-3 mt-2">
            <p className="text-red-500 font-bold">${t.price}</p>
            <p className="text-gray-400 line-through">$160</p>
          </div>

          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
            ★★★★☆
            <span className="text-gray-500 text-sm ml-2">(88)</span>
          </div>

       </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>


      <Link to={"/ourProducts"}>
        <div className="text-center mt-[50px]">
          <Button
            sx={{ backgroundColor: "#DB4444", height: "45px", width: "200px" }}
            variant="contained"
          >
            View All Products
          </Button>
        </div>
      </Link>






      <div className="flex gap-[10px] ml-[160px] mt-[80px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
          Categories
        </h1>
      </div>

      <div className="flex justify-around mt-[50px]">
        {data?.data?.slice(0, 6).map((e) => (
          <div
            className="w-[180px] h-[160px] border bg-[white] text-black border-gray-300 rounded-2xl hover:bg-red-300"
            key={e.id}
          >
            <div className="flex justify-center mt-[20px]">
              <img src={img12} alt="" />
            </div>
           
            <h1 className="text-center font-bold  mt-[17px]">
              {e.categoryName}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex gap-[10px] ml-[160px] mt-[80px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
          This Month
        </h1>
      </div>

      <div className="flex justify-between items-center mt-[40px] w-[80%] ml-[10%]">
        <h1 className="text-[30px] font-bold">Best Selling Products</h1>
        <Button
          sx={{ backgroundColor: "#DB4444", height: "45px", width: "150px" }}
          variant="contained"
        >
          View All
        </Button>
      </div>





      

 <div className="ml-[7%] mt-[70px] flex flex-wrap justify-start gap-[50px]">
  {produkt?.data?.products?.slice(0, 4)?.map((t) => {
    const isInWish = wish.find((e) => e.id === t.id);

    const handleHeartClick = () => {
      if (!isInWish) {
        const updatedWish = [...wish, t];
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      } else {
        const updatedWish = wish.filter((v) => v.id !== t.id);
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      }
    };

    return (
      <div key={t.id} className="relative w-[300px] bg-[#fdfbfb] rounded-[5px] p-4 h-[360px] shadow-2xl">
        <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">
          -40%
        </div>

        <Link to={`/ById/${t.id}`}>
          <VisibilityIcon sx={{ marginLeft: "243px" }} />
        </Link>

        <FavoriteBorderIcon
          onClick={handleHeartClick}
          sx={{
            fontSize: 28,
            marginLeft: "240px",
            marginTop: "10px",
            color: isInWish ? "red" : "gray",
            cursor: "pointer",
          }}
        />

        <div className="flex justify-center">
          <img
            src={`http://37.27.29.18:8002/images/${t.image}`}
            alt={t.productName}
            className="w-[250px] h-[200px] mb-3 mt-[10px]"
            onError={(e) => { e.target.src = "/default-product.png"; }}
          />
        </div>

        <div   className="opacity-0 hover:opacity-100 w-[300px] ml-[-16px] mt-[17px] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center bg-black">
          Add to Wishlist
        </div>

        <h2 className="text-[20px] font-bold mt-8">{t.productName}</h2>

        <div className="flex items-center gap-3 mt-2">
          <p className="text-red-500 font-bold">${t.price}</p>
          <p className="text-gray-400 line-through">$160</p>
        </div>

        <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
          ★★★★☆
          <span className="text-gray-500 text-sm ml-2">(88)</span>
        </div>
      </div>
    );
  })}
</div>


      


      <div className="w-[86%] h-[460px] bg-[#000000] mt-[230px] ml-[7%] rounded-2xl flex justify-center">
        <div className="ml-[70px] text-black">
          <p className="text-[#00FF66] text-[40px] font-bold pt-[50px]">
            Categories{" "}
          </p>
          <p className="text-[white] text-[40px] font-bold mt-[10px]">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-[20px] mt-[30px]">
            <div className="w-[68px] bg-[white] text-center h-[68px] rounded-[50%] leading-[18px] py-3 px-1">
              <h1 className="font-bold">23</h1>
              <h1>Days</h1>
            </div>
            <div className="w-[68px] bg-[white] text-center h-[68px] rounded-[50%] leading-[18px] py-3 px-1">
              <h1 className="font-bold">05</h1>
              <h1>Days</h1>
            </div>
            <div className="w-[68px] bg-[white] text-center h-[68px] rounded-[50%] leading-[18px] py-3 px-1">
              <h1 className="font-bold">59</h1>
              <h1>Minutes</h1>
            </div>
            <div className="w-[68px] bg-[white] text-center h-[65px] rounded-[50%] leading-[18px] py-3 px-1">
              <h1 className="font-bold">35</h1>
              <h1>Seconds</h1>
            </div>
          </div>
          <Button
            sx={{
              backgroundColor: "#00FF66",
              color: "black",
              marginTop: "30px",
              width: "180px",
              height: "45px",
            }}
            variant="contained"
          >
            Contained
          </Button>
        </div>

        <div className="">
          <img className="mt-[18px] " src={img3} alt="" />
          <img
            className="absolute top-[2610px] left-[790px]"
            src={img4}
            alt=""
          />
        </div>
      </div>







      <div className="flex gap-[10px] ml-[160px] mt-[80px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
          Our Products
        </h1>
      </div>
      <h1 className="text-[30px] font-bold ml-[160px] mt-[20px]">
        Explore Our Products
      </h1>



   <div className="ml-[6%] mt-[70px] flex flex-wrap justify-start gap-[50px]">
  {produkt?.data?.products?.slice(0, 4)?.map((t) => {
    const isInWish = wish.find((e) => e.id === t.id);

    const handleHeartClick = () => {
      if (!isInWish) {
        const updatedWish = [...wish, t];
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      } else {
        const updatedWish = wish.filter((v) => v.id !== t.id);
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      }
    };

    return (
      <div key={t.id} className="relative w-[300px] bg-[#fdfbfb] rounded-[5px] p-4 h-[360px] shadow-2xl">
        <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">
          -40%
        </div>

        <Link to={`/ById/${t.id}`}>
          <VisibilityIcon sx={{ marginLeft: "243px" }} />
        </Link>

        <FavoriteBorderIcon
          onClick={handleHeartClick}
          sx={{
            fontSize: 28,
            marginLeft: "240px",
            marginTop: "10px",
            color: isInWish ? "red" : "gray",
            cursor: "pointer",
          }}
        />

        <div className="flex justify-center">
          <img
            src={`http://37.27.29.18:8002/images/${t.image}`}
            alt={t.productName}
            className="w-[250px] h-[200px] mb-3 mt-[10px]"
            onError={(e) => { e.target.src = "/default-product.png"; }}
          />
        </div>

        <div className="opacity-0 hover:opacity-100 w-[300px] ml-[-16px] mt-[17px] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center bg-black">
          Add to Wishlist
        </div>

        <h2 className="text-[20px] font-bold mt-8">{t.productName}</h2>

        <div className="flex items-center gap-3 mt-2">
          <p className="text-red-500 font-bold">${t.price}</p>
          <p className="text-gray-400 line-through">$160</p>
        </div>

        <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
          ★★★★☆
          <span className="text-gray-500 text-sm ml-2">(88)</span>
        </div>
      </div>
    );
  })}
</div>


  <div className="ml-[6%] mt-[200px] flex flex-wrap justify-start gap-[50px]">
  {produkt?.data?.products?.slice(0, 4)?.map((t) => {
    const isInWish = wish.find((e) => e.id === t.id);

    const handleHeartClick = () => {
      if (!isInWish) {
        const updatedWish = [...wish, t];
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      } else {
        const updatedWish = wish.filter((v) => v.id !== t.id);
        localStorage.setItem("wish", JSON.stringify(updatedWish));
        setWish(updatedWish);
      }
    };

    return (
      <div key={t.id} className="relative w-[300px] bg-[#fdfbfb] rounded-[5px] p-4 h-[360px] shadow-2xl">
        <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">
          -40%
        </div>

        <Link to={`/ById/${t.id}`}>
          <VisibilityIcon sx={{ marginLeft: "243px" }} />
        </Link>

        <FavoriteBorderIcon
          onClick={handleHeartClick}
          sx={{
            fontSize: 28,
            marginLeft: "240px",
            marginTop: "10px",
            color: isInWish ? "red" : "gray",
            cursor: "pointer",
          }}
        />

        <div className="flex justify-center">
          <img
            src={`http://37.27.29.18:8002/images/${t.image}`}
            alt={t.productName}
            className="w-[250px] h-[200px] mb-3 mt-[10px]"
            onError={(e) => { e.target.src = "/default-product.png"; }}
          />
        </div>

        <div className="opacity-0 hover:opacity-100 w-[300px] ml-[-16px] mt-[17px] text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center bg-black">
          Add to Wishlist
        </div>

        <h2 className="text-[20px] font-bold mt-8">{t.productName}</h2>

        <div className="flex items-center gap-3 mt-2">
          <p className="text-red-500 font-bold">${t.price}</p>
          <p className="text-gray-400 line-through">$160</p>
        </div>

        <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
          ★★★★☆
          <span className="text-gray-500 text-sm ml-2">(88)</span>
        </div>
      </div>
    );
  })}
</div>


       <Link to={"/ourProducts"}>
        <div className="text-center mt-[150px]">
          <Button
            sx={{ backgroundColor: "#DB4444", height: "45px", width: "200px" }}
            variant="contained"
          >
            View All Products
          </Button>
        </div>
      </Link>


      <div className="flex gap-[10px] ml-[160px] mt-[80px]">
        <div className="w-[20px] h-[40px] rounded-[5px] bg-[#DB4444]"></div>
        <h1 className=" flex items-center text-[20px] font-bold text-[#DB4444]">
          Featured
        </h1>
      </div>
      <h1 className="text-[30px] font-bold ml-[160px] mt-[20px]">
        Explore Our Products
      </h1>

      <div className="flex gap-[30px] ml-[7%] mt-[60px]">
        <div className="w-[38%] h-[530px] bg-[#0D0D0D] relative rounded-lg overflow-hidden">
          <img
            src={img5}
            alt="PlayStation 5"
            className="w-[500px] mt-[30px] ml-[20px]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-xl font-bold">PlayStation 5</h1>
            <p className="text-sm text-gray-300 mt-1">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-sm font-medium underline mt-2 hover:text-blue-400 transition-colors">
              {" "}
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[55%] flex flex-col gap-4">
          <div className="w-full h-[280px] bg-[#0D0D0D] rounded-lg flex items-center">
            <div className="w-1/2 p-10 mt-[80px] text-white">
              <h1 className="text-xl font-bold">Women's Collections</h1>
              <p className="text-gray-300 text-[15px] mt-1">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-sm font-medium underline mt-2 hover:text-blue-400 transition-colors">
                Shop Now
              </button>
            </div>
            <img
              src={img6}
              alt="Woman's Collection"
              className="w-1/2 h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-[233px] bg-[#0D0D0D] rounded-lg relative overflow-hidden">
              <img src={img7} alt="Speakers" className="ml-[160px] mt-[10px]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h1 className="font-bold">Speakers</h1>
                <p className="text-sm text-gray-300">
                  Amazon wireless speakers
                </p>
                <button className="text-sm font-medium underline mt-1 hover:text-blue-400 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="h-[233px] bg-[#0D0D0D] rounded-lg relative overflow-hidden">
              <img src={img8} alt="Perfume" className="ml-[150px] mt-[15px]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h1 className="font-bold">Perfume</h1>
                <p className="text-sm text-gray-300">GUCCI INTENSE OUD EDP</p>
                <button className="text-sm font-medium underline mt-1 hover:text-blue-400 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around text-center mt-[170px]">
        <div>
          <img className="ml-[90px] w-[70px]" src={img9} alt="" />
          <h1 className="mt-[15px] font-bold">FREE AND FAST DELIVERY</h1>
          <p className="text-gray-600 mt-[5px]">
            Free delivery for all orders over $140
          </p>
        </div>

        <div>
          <img className="ml-[75px] w-[70px]" src={img10} alt="" />
          <h1 className="mt-[15px] font-bold">24/7 CUSTOMER SERVICE</h1>
          <p className="text-gray-600 mt-[5px]">
            Friendly 24/7 customer support
          </p>
        </div>

        <div>
          <img className="ml-[80px] w-[70px]" src={img11} alt="" />
          <h1 className="mt-[15px] font-bold">MONEY BACK GUARANTEE</h1>
          <p className="text-gray-600 mt-[5px]">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
