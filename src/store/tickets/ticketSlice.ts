import { createSlice } from '@reduxjs/toolkit';
import { Datum, TicketResp } from '../../interfaces/ticket.resp';

interface TicketState {
    errorMessage: string | null;
    tickets: Datum[] | null;
}
const initialState: TicketState = {
    errorMessage: null,
    tickets: null,
};

export const ticketSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.tickets = action.payload;
        },
        clearTickets: (state) => {
            state = initialState;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setTickets } = ticketSlice.actions;