
import './App.css';
import About from './pages/About';
import Home  from './pages/Home';
import { Route , Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Private/Dashboard';
import PrivateRoute from './pages/Private/PrivateRoute';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />

            {/* its a part of Private Route */}
            <Route path='/dashboard' element={<Dashboard />}>
               <Route path='private' element={<PrivateRoute />} />
            </Route>

            {/* its url not working */}
            {/* http://localhost:3000/#/dashboard/#/private */} 

        </Routes>
    </div>
  );
}

export default App;
