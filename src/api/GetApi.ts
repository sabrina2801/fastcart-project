import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetToken } from '../utils/token';



export const TodoApi = createApi({
  reducerPath: 'TodoApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://37.27.29.18:8002/" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => `Category/get-categories`,
      providesTags: ["Todo"]
    })
  }) 
})


const sid = '77b1d658-65fc-4fd3-97e3-fc2c3e2d54d2'

export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://37.27.29.18:8002/',
    prepareHeaders: (headers) => {
      const token = GetToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UserProfile'],
  endpoints: (build) => ({
    getUserProfileById: build.query({
      query: () => `UserProfile/get-user-profile-by-id?id=${sid}`,
      providesTags: ['UserProfile'],
    }),
  }),
});




export const Product = createApi({
  reducerPath: 'Product',
  baseQuery: fetchBaseQuery({ baseUrl: "http://37.27.29.18:8002/" }),
  tagTypes: ["Todo", "Byid"],
  endpoints: (build) => ({
    LazyGetTodo: build.query({
      query: () => `Product/get-products`,
      providesTags: ['Todo']
    }),
    GetByid: build.query({
      query: (id) => `Product/get-product-by-id?id=${id}`,
      providesTags: ["Byid"]
    })
  })
})

export const Color = createApi({
  reducerPath: 'Color',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://37.27.29.18:8002/' }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    GetColor: build.query({
      query: () => 'Color/get-colors',
      providesTags: ['Todo']
    })
  })
})




export const Cart = createApi({
  reducerPath: 'Cart',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://37.27.29.18:8002/',
    prepareHeaders: (headers, { getState }) => {
      const token = GetToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    GetCart: build.query({
      query: () => 'Cart/get-products-from-cart',
      providesTags: ['Todo'],
    }),
    AddToCart: build.mutation({
      query: (id) => ({
        url: `Cart/add-product-to-cart?id=${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Todo'], 
    }),
    DeleteFromCart: build.mutation({
      query: (id) => ({
        url: `Cart/delete-product-from-cart?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    ClearCart: build.mutation({
      query: () => ({
        url: 'Cart/clear-cart',
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});




export const { useGetTodoQuery } = TodoApi
export const { useLazyGetTodoQuery, useGetByidQuery } = Product
export const { useGetColorQuery } = Color
export const { useGetCartQuery, useAddToCartMutation , useDeleteFromCartMutation, useClearCartMutation} = Cart;
export const { useGetUserProfileByIdQuery } = userProfileApi;