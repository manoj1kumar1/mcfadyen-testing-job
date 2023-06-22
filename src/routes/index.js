import { lazy } from 'react';
import { useRoutes } from "react-router";

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable'; 

// dashboard routing
const ProductDetail = Loadable(lazy(() => import('../pages/ProductDetail')));

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ProductDetail />
        }
    ]
};

// ==============================|| ROUTING RENDER ||============================== //

const ThemeRoutes = () => { 
    const MainRouts =  useRoutes([MainRoutes]);
    return MainRouts;
}

export default ThemeRoutes;




