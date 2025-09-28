import TextField from '@mui/material/TextField'
import { Link, useNavigate } from 'react-router-dom'
import { AxiosS } from '../utils/token'

const SignUp = () => {
 const navigate = useNavigate()

 async function registerUser(newUser) {
  console.log(newUser)
  try {
   const { data } = await AxiosS.post('/Account/register', newUser)
   return data.data
  } catch (error) {
   console.error(error)
  }
 }

 const handleSubmit = e => {
  e.preventDefault()

  const newUser = {
   userName: e.target[0].value,
   phoneNumber: e.target['phoneNumber'].value,
   email: e.target[2].value,
   password: e.target['password'].value,
   confirmPassword: e.target['confirmPassword'].value,
  }
  registerUser(newUser)
  navigate('/login')
 }

 return (
  <div className='w-[90%] lg:w-[30%] m-auto pt-[10px] pb-[60px] lg:py-[80px]'>
   <h2 className='text-[37px] lg:text-[47px]'>Create an account</h2>
   <p>Enter your details below</p>
   <div className='mt-[40px]'>
    <form
     onSubmit={handleSubmit}
     className='w-[100%] grid grid-cols-1 gap-[20px]'
    >
     <TextField
      id='outlined-basic'
      label='Name'
      variant='outlined'
      className='dark:invert'
      name='userName'
     />
     <TextField
      id='outlined-basic'
      label='Phone number'
      variant='outlined'
      className='dark:invert'
      name='phoneNumber'
      type='number'
     />
     <TextField
      id='outlined-basic'
      label='Email'
      variant='outlined'
      className='dark:invert'
      name='email'
      type='email'
     />

     <TextField
      id='outlined-password-input'
      label='Password'
      type='password'
      autoComplete='current-password'
      className='dark:invert'
      name='password'
     />
     <TextField
      id='outlined-password-input'
      label='Confirm password'
      type='password'
      autoComplete='current-password'
      className='dark:invert'
      name='confirmPassword'
     />

     <button className=' rounded-[5px] p-[14px] bg-[#DB4444] text-white'>
      Create Account
     </button>
     
     <button
      type='submit'
      className='flex items-center justify-center gap-3 w-full border rounded-[5px] p-[14px] font-medium border-gray-300'
     >
      <img
       src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
       alt='Google'
       className='w-5 h-5'
      />
      Sign up with Google
     </button>
     <div className='flex items-center justify-center gap-1 text-sm text-gray-600 mt-4'>
      <span className='dark:text-gray-400'>Already have account?</span>
      <Link
       to='/login'
       className='font-medium text-black underline  dark:invert'
      >
       Log in
      </Link>
     </div>
    </form>
   </div>
  </div>
 )
}

export default SignUp