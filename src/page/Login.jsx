import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AxiosS, BaseApi, SaveToken } from '../utils/token';

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleLogin(user) {
    try {
      const { data } = await axios.post(`${BaseApi}/Account/login`, user);
      SaveToken(data.data);
      navigate(-1);
    } catch (error) {
      setErrorMsg('Invalid username or password');
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ userName, password });
  };

  return (
    <div className='mt-[160px]'>
      <h1 className='text-[40px] ml-[35.5%] font-medium mt-[100px]'>Log in to Exclusive</h1>
      <h1 className='text-gray-500 text-[20px] ml-[35.5%] mt-[7px]'>Enter your details below</h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto mt-[50px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder="Name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          />

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

          <Button 
            type='submit' 
            sx={{backgroundColor:"#DB4444", height:"50px", width:"450px"}} 
            variant="contained"
          >
            Log In
          </Button>
        </form>
      </div>

      <div className="flex items-center gap-2 text-[17px] text-gray-600 justify-center mt-[30px]">
        <span>Don't have an account?</span>
        <Link to={'/signUp'} className="text-gray-600 hover:text-gray-800 underline font-medium transition-colors">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
