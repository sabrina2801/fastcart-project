import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useGetCartQuery } from '../api/GetApi';
import img1 from '../image/Frame 834.png';
import Button from '@mui/material/Button';

const CheckOut = () => {
  const { data: cart } = useGetCartQuery();

  return (
    <div className="mt-[110px] px-5 md:px-20">
      {/* Навигация */}
      <div className="flex gap-2 text-[#292929b9] text-sm">
        <span>Product /</span>
        <span>View Cart /</span>
        <span className="text-black">CheckOut</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold mt-10 mb-8">Billing Details</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Левый блок: Форма */}
        <div className="w-full md:w-[500px] shadow-2xl h-[680px] rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
          <div className="flex flex-col gap-4">
            {["First name", "Last name", "Street address", "Apartment, floor, etc. (optional)", "Town/City", "Phone number", "Email address"].map((label) => (
              <TextField key={label} label={label} variant="outlined" fullWidth sx={{ height: 55 }} />
            ))}

            <FormControlLabel
              control={<Checkbox sx={{ color: '#BDBDBD', '&.Mui-checked': { color: '#1C1C1C' } }} />}
              label="I agree to the terms and conditions"
              sx={{ color: '#1C1C1C', mt: 2 }}
            />
          </div>
        </div>

        <div className="flex-1 w-full h-[700px] shadow-2xl rounded-lg p-6 bg-white">
          {cart?.data?.some(item => item.productsInCart.length > 0) ? (
            <div className="flex flex-col gap-4">
              {cart.data.flatMap(cartItem =>
                cartItem.productsInCart.map(e => (
                  <div key={e.id} className="flex items-center justify-between gap-4 p-4  rounded shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-4">
                      <img
                        src={`http://37.27.29.18:8002/images/${e.product.image}`}
                        alt={e.product.productName}
                        className="w-12 h-12 object-cover rounded"
                        onError={ev => (ev.target.src = "/default-product.png")}
                      />
                      <h3 className="font-semibold">{e.product.productName}</h3>
                    </div>
                    <div className="w-[20%] text-center font-semibold">${e.product.discountPrice}</div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-center text-2xl text-gray-500">You have no orders</p>
            </div>
          )}

          <hr className="w-full border-t mt-6 mb-4 text-gray-400" />
          <h1 className="text-lg font-semibold mb-4"><b>Total:</b> {/* Здесь можно вставить сумму */}</h1>

          {/* Способы оплаты */}
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center gap-2">
              <input type="radio" className="w-5 h-5" name="payment" />
              <span className="font-semibold">Bank</span>
              <img src={img1} alt="bank" className="ml-auto" />
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" className="w-5 h-5" name="payment" />
              <span className="font-semibold">Cash on delivery</span>
            </div>
          </div>

          {/* Купон */}
          <div className="flex gap-4 mt-[50px]">
            <TextField
              label="Coupon Code"
              variant="outlined"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  color: 'black',
                  '& fieldset': { borderColor: 'black' },
                  '&:hover fieldset': { borderColor: 'black' },
                  '&.Mui-focused fieldset': { borderColor: 'black' },
                },
                '& .MuiInputLabel-root': { color: 'black', '&.Mui-focused': { color: 'black' } },
              }}
            />
            <Button variant="outlined" sx={{ border: '1px solid red', color: 'red', width: 150 }}>Apply</Button>
          </div>
              <Button sx={{width:'220px', height:'43px', marginTop:'80px', backgroundColor:'#DB4444', marginLeft:"74%"}} variant="contained">Procees to checkout</Button>
          
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
