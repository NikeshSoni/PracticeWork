
import './App.css';
import About from './pages/About';
import Home  from './pages/Home';
import { Route , Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
