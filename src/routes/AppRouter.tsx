import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { useAppDispatch } from '../hooks/hooks';
import { checkToken } from "../store/auth";
import { useEffect } from 'react';

import { Login, Pdf, Ticket, } from '../pages';
import { SeatList } from '../pages';

export const AppRouter = () => {


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(checkToken())
    }, [dispatch])

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/*" element={
                    <PrivateRoute>
                        <Route path="/" element={<Ticket />} />
                        <Route path="/seats/:idTransaction" element={<SeatList />} />
                        <Route path="/pdf" element={<Pdf />} />
                    </PrivateRoute>
                }
                />

                <Route path="/login/*" element={
                    <PublicRoute>

                        <Route path="/" element={<Login />} />


                    </PublicRoute>
                }
                />

            </Routes>


        </BrowserRouter>

    )

}