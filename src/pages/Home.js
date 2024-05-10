import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Example from '../components/API/Example';
import TrayApi from '../components/API/TrayApi';
import Dashboard from './Private/Dashboard';
import Learning from '../components/Hooks/CallBack/Learning';
import Mount from '../components/lifeCycle/Mount';
import VideoPlay from '../components/Hooks/useRef/VideoPlay';
import ContextApiData from '../components/Hooks/ContextApi/Index';
import UseContextData from '../components/API/useContext/Index';
const Home = () => {
  return (
    <div>
        <Navbar />

        {/* <h1>i am Home</h1> */}
        {/* <Example /> */}
        {/* <TrayApi /> */}
        {/* <Dashboard /> */}
        {/* <Learning /> */}
        {/* <Mount /> */}
        {/* <VideoPlay /> */}

        {/* Context Api */}

        {/* <ContextApiData />  */}

        <UseContextData />


    </div>
  )
}

export default Home