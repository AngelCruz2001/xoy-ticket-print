import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';



export const PrivateRoute = ({ children }: any) => {
    const { status } = useAppSelector(state => state.auth);

    return status === 'authenticated' ? 
    <Routes>
        {children}
    </Routes> : <Navigate to="/login" />; 
   
       
}