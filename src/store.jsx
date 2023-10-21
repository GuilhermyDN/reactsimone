import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductsSlice';
import filterReducer from './FilterSlice'
import AddressReducer from './AddressSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
        address: AddressReducer
    },
})