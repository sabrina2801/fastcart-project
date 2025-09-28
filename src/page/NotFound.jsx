import React from 'react'
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <div className='mt-[230px]'>
        <h1 className='text-[85px] text-center font-bold mt-[50px]'>404 Not Found</h1>
        <h1 className='text-[20px] text-center text-gray-700 mt-[20px]'>Your visited page not found. You may go home page.</h1>

         <div className='text-center mt-[50px]'>
            <Button sx={{backgroundColor:"#DB4444", height:"50px", width:"220px"}} variant="contained">Back to home page</Button>
          </div>
    </div>
  )
}

export default NotFound