import xoyApi from "../../api/xoyApi";
import { Dispatch } from "redux";
import { RootState } from "../../store/store";
import { setSeats } from "./seatsSlice";

export const startGetSeats = (idTransaction: string) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        const { token } = getState().auth;
        try {
            const { data } = await xoyApi.get(`transaccion/${idTransaction}`);
            dispatch(setSeats(data.data));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
}