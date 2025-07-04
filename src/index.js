import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Main from './pages/Main/Main';
import Founder from './pages/Founder/Founder';
import Managment from './pages/Managment/Managment';
import Geography from './pages/Geography/Geography';
import AreaOfActivity from './pages/AreaOfActivity/AreaOfActivity';
import Website from './pages/Website/Website';
import DirLukoil from './pages/DirLukoil/DirLukoil';
import ManRitec from './pages/ManRitec/ManRitec';
import FirstLvlCont from './pages/FirstLvlCont/FirstLvlCont';
import SecondLvlCont from './pages/SecondLvlCont/SecondLvlCont';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/founder',
        element: <Founder />,
    },
    {
        path: '/managment',
        element: <Managment />,
    },
    {
        path: '/geography',
        element: <Geography />,
    },
    {
        path: '/area-of-activity',
        element: <AreaOfActivity />,
    },
    {
        path: '/website',
        element: <Website />,
    },
    {
        path: '/dir-lukoil',
        element: <DirLukoil />,
    },
    {
        path: '/man-ritec',
        element: <ManRitec />,
    },
    {
        path: '/first-lvl-cont/:id',
        element: <FirstLvlCont />,
    },
    {
        path: '/second-lvl-cont',
        element: <SecondLvlCont />,
    },
]);
root.render(<RouterProvider router={router} />);


