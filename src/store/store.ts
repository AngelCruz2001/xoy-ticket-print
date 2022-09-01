import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { seatsSlice } from './seats';
import { ticketSlice } from './tickets';
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        tickets: ticketSlice.reducer, 
        seats: seatsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;