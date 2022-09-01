
import { Dispatch } from 'redux';


import Swal from 'sweetalert2'

import xoyApi from '../../api/xoyApi';
import { login, logout } from './authSlice';
import { Auth } from '../../interfaces/auth.resp';

type DataUserLogin = {
    correo: string;
    contrasena: string;
}

type DataUserSignUp = {
    nombre: string;
    folio: string;
    correo: string;
    contrasena: string;
}

export const startLogin = (dataUser: DataUserLogin) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await xoyApi.post<Auth>('auth/login', dataUser);
            localStorage.setItem('token', data.token);
            localStorage.setItem('data', JSON.stringify(data.data));
            dispatch(login({ token:data.token, user: data.data }));

        } catch (error: any) {
            
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            })
        }
    };
};

export const startSignUp = (dataUser: DataUserSignUp) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await xoyApi.post<Auth>('auth/register', dataUser);

            
            Swal.fire({
                title: 'Genial',
                text: 'Te has registrado con exito',
                icon: 'success'
            })

            const { data: dataLogin } = await xoyApi.post<Auth>('auth/login', {
                correo: dataUser.correo,
                contrasena: dataUser.contrasena
            });


            localStorage.setItem('token', dataLogin.token);
            localStorage.setItem('data', JSON.stringify(dataLogin.data));

            dispatch(login({ token: data.token, user: dataLogin.data }));

        } catch (error: any) {
            console.log(error.response.data.error);
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            })
        }
    };
};

export const startLogout = () => {
    return async (dispatch: Dispatch) => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('data');
            dispatch(logout());

        } catch (error: any) {
            
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            })
        }
    };
};




export const checkToken = () => {
    return async (dispatch: Dispatch) => {
        try {
            const token = localStorage.getItem('token');
            
            const data = JSON.parse(localStorage.getItem('data')!);
            if (token && data) {
             
                dispatch(login({ token, user: data }));
            }
            
            if (!token || !data) return dispatch(logout());


        } catch (error) {
            console.log(error);
        }
    }
}

