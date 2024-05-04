import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Example from '../components/API/Example';
import TrayApi from '../components/API/TrayApi';
import Dashboard from './Private/Dashboard';
import Learning from '../components/Hooks/CallBack/Learning';

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1>i am Home</h1>
        {/* <Example /> */}
        {/* <TrayApi /> */}
        {/* <Dashboard /> */}
        <Learning />
    </div>
  )
}

export default Home