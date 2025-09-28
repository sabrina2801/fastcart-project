import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Cart, Color, Product, TodoApi, userProfileApi } from './api/GetApi'

export const store = configureStore({
    reducer: {
        [TodoApi.reducerPath]: TodoApi.reducer,
        [Product.reducerPath]: Product.reducer,
        [Color.reducerPath] : Color.reducer,
        [Cart.reducerPath] : Cart.reducer,
        [userProfileApi.reducerPath] : userProfileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TodoApi.middleware,Product.middleware,Color.middleware,Cart.middleware,userProfileApi.middleware),
})

setupListeners(store.dispatch)