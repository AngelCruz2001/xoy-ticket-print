import xoyApi from "../../api/xoyApi";
import { TicketResp } from "../../interfaces/ticket.resp";
import { Dispatch } from "redux";
import { setTickets } from "./ticketSlice";

export const startGetTickets = () => async (dispatch: Dispatch, getState: Function) => {
    const { token } = getState().auth;
    const { data } = await xoyApi.get<TicketResp>('transacciones');

    dispatch(setTickets(data.data));
}