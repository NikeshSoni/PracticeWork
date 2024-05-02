import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Example from '../components/API/Example';
import TrayApi from '../components/API/TrayApi';

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1>i am Home</h1>
        {/* <Example /> */}
        <TrayApi />
    </div>
  )
}

export default Home