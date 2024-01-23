import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './appointmentsSlice';

const store = configureStore({
    reducer: {
        appointmentsStore: appointmentsReducer,
    }
})

export default store;