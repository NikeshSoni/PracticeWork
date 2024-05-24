import axios from 'axios';
import Axios from 'axios';
import React ,{useState , useEffect} from 'react'

const AxiosApi = () => {

   const [axiosApiStore , setAxiosApiStore ] = useState([])
  

   useEffect( () => {

      axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (items) =>  setAxiosApiStore(items.data));
   },[])

   console.log(axiosApiStore);

   const [inputData , setInputData ] = useState('')

   const  handleName = (event) =>  {
       setInputData(event.target.value);
   }

   const [inputValue, setInputValue] = useState('');
   const handleChange = (event) => {
     const data =  setInputValue(event.target.value);
     console.log(data);     
    };
     return (
        <>

        <div>
            <input onChange={handleName} value={inputData} className='p-2' type='text' />
            <p>Current Input Value hii: {inputData}</p>
        </div>


<div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Current Input Value: {inputValue}</p>
    </div>


        
            {axiosApiStore.map((items , index) => {
                return (
                  <div key={index}>
                     <p> Hello i  - {items.name}</p>
                  </div>
                )
            })}
        </>
     )
}


export default AxiosApi;