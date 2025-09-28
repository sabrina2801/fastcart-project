import React from 'react'
import { data, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGetUserProfileByIdQuery } from '../api/GetApi';


const Account = () => {

      const sid = "77b1d658-65fc-4fd3-97e3-fc2c3e2d54d2";

  const { data: userProfile } = useGetUserProfileByIdQuery(sid);
console.log(userProfile)

  return (
    <div className='dark:text-white mt-[120px]'>


     <div className='ml-[150px] mt-[60px] text-[18px]'>
        <span className='text-gray-600 '>Home /</span>
        <span>   My Account</span>
     </div>





     <div className='flex justify-around gap-[150px] ml-[7%] mt-[80px]'>

      <div className='w-[20%]'>
        <h1 className='text-[18px]'><b>Manage My Account</b></h1>
        <div className='ml-[20px] text-[#646464] flex flex-col items-start mt-[20px] leading-7'>
          <button className='hover:text-[#DB4444]'>My Profile</button>
          <button className='hover:text-[#DB4444]'>Address Book</button>
          <button className='hover:text-[#DB4444]'>Address Book</button>
        </div>

        <h1 className='text-[18px] mt-[20px]'><b>Address Book</b></h1>
        <div className='ml-[20px] text-[#646464] mt-[20px] flex flex-col items-start leading-7' >
          <button className='hover:text-[#DB4444]'>My Cancellations</button>
          <button className='hover:text-[#DB4444]'>My Returns</button>
        </div>
        <Link  to={'/wislist'}>
         <button  className='text-[18px] mt-[20px]'><b>My WishList</b></button>
        </Link>
      </div>





 <div className='w-[80%] mt-[-100px] '>

  <div className='w-[900px] h-[610px] shadow-2xl '>
  
  
    <div className='flex justify-around  gap-[40px] px-8 py-3'>
  <TextField
      defaultValue={userProfile?.data?.userName || ""}
      label="First name"
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#00000099",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#00000099",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#00000099",
          borderWidth: "2px",
        },
        "& .MuiInputLabel-root": {
          color: "#00000099",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#00000099",
        },
      }}
    />

     <TextField
  label="Last name"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>
     </div>



<div className='flex justify-around  gap-[40px] px-8 py-3'>
     <TextField
  label="Email address"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>



     <TextField
  label="Street address"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
 '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>
</div>

<h1 className='px-9 text-[20px] mt-[50px]'>Password Changes</h1>

<div className='px-8 mt-[20px]'>
  <TextField
  label="Email address"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>
</div>

<div className='flex justify-around  gap-[40px] px-8 py-3'>
     <TextField
  label="New passwod"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>



     <TextField
  label="Confirm new passwod"
  variant="outlined"
  fullWidth
  margin="normal"
  sx={{
 '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00000099',
      borderWidth: '2px',
    },
    
    '& .MuiInputLabel-root': {
      color: '#00000099',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00000099',
    },
  }}
/>
</div>

<div className='flex gap-[30px] ml-[460px] mt-[40px]'>
  <Button sx={{width:"150px", border:'1px solid #000000', color:'#000000',height:"40px"}} variant="outlined">See All</Button>
    <Button sx={{backgroundColor:"#DB4444", height:"40px", width:"200px"}} variant="contained">View All Products</Button>
  </div>






  </div>

      </div>







     </div>





    </div>
  )
}

export default Account