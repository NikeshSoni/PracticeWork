import {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Example from '../components/API/Example';
import TrayApi from '../components/API/TrayApi';
import Dashboard from './Private/Dashboard';
import Learning from '../components/Hooks/CallBack/Learning';
import Mount from '../components/lifeCycle/Mount';
import VideoPlay from '../components/Hooks/useRef/VideoPlay';
import ContextApiData from '../components/Hooks/ContextApi/Index';
import UseContextData from '../components/API/useContext/Index';
import CardProject from '../components/API/CardProject';

import Search from '../components/SearchFilter/Search';

import AxiosApi from '../components/API/Axios/AxiosApi';
import AxiosPost from '../components/API/Axios/AxiosPost'
const Home = () => {

  return (
    <div>
        <Navbar />

        {/* <h1>i am Home</h1> */}
        {/* <Example /> */}
        {/* <TrayApi /> */}
        <Dashboard />
        {/* <Learning /> */}
        {/* <Mount /> */}
        {/* <VideoPlay /> */}

        {/* Context Api */}

        {/* <ContextApiData />  */}

          {/* <UseContextData /> */}

        {/* <CardProject /> */}

        {/* <Search /> */}


        <AxiosApi />
        {/* <AxiosPost /> */}


       
  
    </div>
  )
}

export default Home