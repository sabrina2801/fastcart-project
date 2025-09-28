import React, { useMemo } from 'react';
import {
  useClearCartMutation,
  useDeleteFromCartMutation,
  useGetCartQuery,
} from '../api/GetApi';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Cart = () => {
  const { data: cart, isLoading, isError } = useGetCartQuery();
  const [clearCart] = useClearCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const baseUrl = import.meta.env.VITE_API_URL;
  const handleDelete = async (id) => {
    try {
      await deleteFromCart(id);
    } catch (error) {
      console.error( error);
    }
  };

  const allProducts = useMemo(() => {
    if (!cart?.data) return [];
    return cart.data.flatMap((cartItem) =>
      cartItem.productsInCart ? cartItem.productsInCart : []
    );
  }, [cart]);


  const subtotal = useMemo(() => {
    return allProducts.reduce((sum, item) => {
      const price = item.product.discountPrice || item.product.price || 0;
      return sum + price;
    }, 0);
  }, [allProducts]);

  const shipping = 10; 
  const total = subtotal + shipping;

  if (isLoading) return <div className="mt-[140px] text-center">Загрузка корзины...</div>;
  if (isError) return <div className="mt-[140px] text-center text-red-500">Ошибка загрузки корзины</div>;

  return (
    <div className="mt-[140px]">
      <div className="flex justify-between w-[80%] ml-[11%] mt-[70px]">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>

      <div className="mt-[50px]">
        {allProducts.length > 0 ? (
          allProducts.map((e) => (
            <div
              key={e.id}
              className="flex px-10 py-2 rounded shadow justify-around items-center ml-[5%] bg-gray-50 mt-[20px] w-[90%] gap-4"
            >
          




       <div className="flex items-center gap-[10px] w-[20%]">
  <img
    src={`${baseUrl}images/${t.image}`}
    alt={t.productName}
     className="w-[50px] h-[50px] object-cover"
    onError={(e) => {
      e.currentTarget.src = "/default-product.png";
    }}
  />








                <h1 className="text-[16px] font-semibold">{e.product.productName}</h1>
              </div>

              <h1 className="w-[20%]">
                <b>$</b> {e.product.price}
              </h1>

     
              <div className="w-[58px] h-[40px] flex items-center justify-center">1</div>

              <h1>
                <b>$</b> {e.product.discountPrice || e.product.price}
              </h1>

              <button
                onClick={() => handleDelete(e.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none cursor-pointer"
                aria-label="Удалить товар"
              >
                <HighlightOffIcon />
              </button>
            </div>
          ))
        ) : (
          <div className="h-[200px]">
            <p className="text-center text-[45px] mt-20 text-gray-500">Ваша корзина пуста</p>
          </div>
        )}
      </div>

      <div className="flex justify-between w-[88%] ml-[6%] mt-[100px]">
        <Link to={'/ourProducts'}>
          <Button
            sx={{ border: '1px solid black', color: 'black', padding: '10px' }}
            variant="outlined"
          >
            Return To Shop
          </Button>
        </Link>
        <div className="flex gap-[20px]">
    
          <Button sx={{ border: '1px solid black', color: 'black' }} variant="outlined">
            Update Cart
          </Button>
          <Button
            onClick={() => clearCart()}
            sx={{ border: '1px solid red', color: 'red' }}
            variant="outlined"
          >
            Remove all
          </Button>
        </div>
      </div>

      <div className="flex justify-around mt-[100px]">
        <div className="flex gap-[20px]">
          <TextField
            label="Coupon Code"
            variant="outlined"
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                height: '50px',
                color: 'black',
                '& fieldset': { borderColor: 'black' },
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black' },
              },
              '& .MuiInputLabel-root': {
                color: 'black',
                '&.Mui-focused': { color: 'black' },
              },
            }}
          />
          <Button
            sx={{ border: '1px solid red', color: 'red', height: '55px', width: '150px' }}
            variant="outlined"
          >
            Apply
          </Button>
        </div>


        <div className="w-[35%] px-4 py-4 h-[350px] rounded-2xl border">
          <h1 className="text-[25px] pt-[10px] ml-[20px]">
            <b>Cart Total</b>
          </h1>
          <h1 className="text-[18px] mt-[25px] ml-[20px]">
            Subtotal: <b>${subtotal.toFixed(2)}</b>
          </h1>
          <h1 className="text-[18px] mt-[20px] ml-[20px]">
            Shipping: <b>${shipping.toFixed(2)}</b>
          </h1>
          <hr className="w-[90%] ml-[5%] mt-[25px]" />
          <h1 className="text-[25px] mt-[25px] ml-[20px]">
            <b>Total: ${total.toFixed(2)}</b>
          </h1>
          <div className="text-center">
            <Link to={'/CheckOut'}>
              <Button
                sx={{
                  width: '220px',
                  height: '43px',
                  marginTop: '30px',
                  backgroundColor: '#DB4444',
                }}
                variant="contained"
                disabled={allProducts.length === 0}
              >
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;