import { createSlice } from '@reduxjs/toolkit';
import { Seat } from '../../interfaces/seats.resp';

interface SeatState {
    seats: Seat[] | null;
}
const initialState: SeatState = {
    seats: null,
};

export const seatsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSeats: (state, action) => {
            state.seats = action.payload;
        },
        clearSeats: (state) => {
            state = initialState;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setSeats } = seatsSlice.actions;