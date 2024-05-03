import React from 'react';
import { Outlet , Navigate } from 'react-router-dom';


const Dashboard = () => {

    const outComeData = false;

    if (outComeData) {
        return  <Outlet />
    } else {
        return <Navigate to={'/Login'} />
    }

//   return (
//     <div>Dashboard

//         <Outlet />
//     </div>
//   )
}

export default Dashboard