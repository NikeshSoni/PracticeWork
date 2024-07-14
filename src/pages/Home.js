import { useState, useEffect } from 'react';
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
import AxiosPost from '../components/API/Axios/AxiosPost';
// import Todu from '../components/Todo/Todu';
import Index from '../components/checkBox/Index';

const Home = () => {

  const [count, setCount] = useState(0);
  const [apiHandle, setApiHandle] = useState([])

  //   const handle = () => {
  //        setCount(count + 1)
  //   }

  //  const handleDecrese = () => {
  //     if (count === 0) {
  //         setCount(0)
  //     } else {
  //       setCount(count - 1) 
  //     }
  //  }

  //  useEffect( () => {
  //    const apiStore = async () => {
  //     const mainStore = await  fetch('https://jsonplaceholder.typicode.com/users');
  //     const allStore = await mainStore.json()
  //        setApiHandle(allStore)
  //    }
  //    apiStore()
  //  },[])

  const main = ["nikki", "Harry", "Motion"]

  const [filterMain, setFilterMain] = useState("");


  const handleFilter = (e) => {
    setFilterMain(e.target.value)
  }

  console.log(filterMain);

  const store = main.filter((e) => {
    e.toLowerCase().includes(filterMain.toLowerCase())
  })

  console.log(store);

  return (
    <div>
      <Navbar />

      <input
        type='text'
        value={filterMain}
        onChange={handleFilter} className='p-4' />

      <ul>
        {store.map((items, index) => {
          return (
            <li key={index} > {items}</li>
          )
        })}
      </ul>

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
      {/* <AxiosApi /> */}
      {/* <AxiosPost /> */}
      {/* <Todu /> */}

      <Index />

      {/* 
        <p>You clicked {count} times</p>
        <button onClick={handle }>
          Click me
        </button>

        <button onClick={handleDecrese}>
          Click me
        </button> */}



      {/* { apiHandle && apiHandle.map( (items , index) => { 
        // console.log(apiHandle.name);
        return (
          <div key={index}>
               <p> {items.name}</p>
          </div>
        )
      })} */}







    </div>
  )
}

export default Home