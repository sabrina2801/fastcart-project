import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import img1 from "../image/Group 1116606595.png";
import iconFacebook from "../image/Icon-Facebook.png";
import iconTwitter from "../image/Icon-Twitter.png";
import iconInstagram from "../image/icon-instagram.png";
import iconLinkedin from "../image/Icon-Linkedin.png";
import logoWhite from "../image/Logo (5).png";
import useDarkMode from "../page/useDarkMode";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from '@mui/icons-material/Login';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ScrollToTop from "../page/ScrollToTop";
import useWish  from '../hooks/useWish'

const Layout = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const [wish] = useWish(); 





  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
  
      <div className="fixed top-0 left-0 w-full bg-white pb-[14px] dark:bg-gray-900 shadow-md z-50 flex justify-around items-center pt-[20px] px-4">
        <img className="w-[140px] h-[50px] dark:invert" src={img1} alt="Logo" />
        <ul className="flex gap-20 items-center">
          <li>
            <Link className="hover:text-[#5d5c5c] font-serif " to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-[#5d5c5c] font-serif " to="contact">Contact</Link>
          </li>
          <li>
            <Link className="hover:text-[#5d5c5c] font-serif " to="aboutUs">About Us</Link>
          </li>

          <input
            className="w-[240px] h-[40px] bg-[#f9f9f9] shadow-[0px_0px_2px_gray] rounded-[5px] px-2"
            type="text"
            placeholder="What are you looking for?"
          />

          <div className="flex gap-[50px] items-center">
            <div className="bg-red-500 rounded-full ml-[20px] text-white mt-[-22px] w-[18px] h-[18px] text-[12px] flex items-center justify-center absolute ">
              <b>{wish.length}</b>
            </div>


            <Link to={"/wislist"}>
              <FavoriteBorderIcon sx={{ fontSize: 31 }} />
            </Link>



            <Link to="/cart">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 31 }} />
            </Link>

            <PermIdentityIcon
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ fontSize: 31 }}
            />

            <IconButton
              className="dark:invert"
              onClick={toggleTheme}
              sx={{
                width: "45px",
                height: "45px",
                bgcolor: "transparent",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              {theme === "dark" ? (
                <LightModeIcon sx={{ fontSize: 24 }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: 24 }} />
              )}
            </IconButton>
          </div>
        </ul>
      </div>

      <div className="w-[90%] h-[1px] bg-[#e9e4e4] ml-[5%] mt-[15px]"></div>

      <ScrollToTop />
      <Outlet />

      {/* Footer */}
      <footer>
        <div className="p-[60px] grid grid-cols-1 lg:grid-cols-4 gap-[30px] lg:gap-[50px] bg-black text-white mt-[180px] h-[380px]">
          <div>
            <img src={logoWhite} alt="logoWhite" />
            <p className="text-[20px] pt-[15px] pb-[10px]">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="relative w-64 mt-[20px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 pr-10 py-2 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none mt-[30px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer mt-[15px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-[24px]">Support</h4>
            <p className="pt-[15px]">
              {" "}
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.{" "}
            </p>
            <p className="py-[10px]">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="grid grid-cols-2 gap-[40px]">
            <div>
              <h4 className="text-[24px]">Account</h4>
              <p className="pt-[15px]">My Account</p>
              <p className="py-[10px]">Cart</p>
              <p>Wishlist</p>
              <p className="pt-[10px]">Shop</p>
            </div>
            <div>
              <h4 className="text-[24px]">Quick Link</h4>
              <p className="pt-[15px]">Privacy Policy</p>
              <p className="py-[10px]">Terms Of Use</p>
              <p>FAQ</p>
              <p className="pt-[10px]">Contact</p>
            </div>
          </div>
          <div>
            <h4 className="text-[24px]">Social</h4>
            <div className="pt-[15px] grid grid-cols-4 gap-4">
              <img src={iconFacebook} alt="Facebook" />
              <img src={iconTwitter} alt="Twitter" />
              <img src={iconInstagram} alt="Instagram" />
              <img src={iconLinkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[1px] bg-gray-400 ml-[5%] mt-[-50px]"></div>
      </footer>

      {/* User Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <Link to={"/account"}>
          <MenuItem onClick={handleClose}>
            <PermIdentityIcon />
            <span className="ml-[10px]">Account</span>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ShoppingBagOutlinedIcon />
          <span className="ml-[10px]">My Order</span>
        </MenuItem>
        <Link to={"/wislist"}>
          <MenuItem onClick={handleClose}>
            <FavoriteBorderIcon />
            <span className="ml-[10px]">Wishlist</span>
          </MenuItem>
        </Link>
        <Link to={"/login"}>
          <MenuItem onClick={handleClose}>
            <LoginIcon />
            <span className="ml-[10px]">Login</span>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Layout;
