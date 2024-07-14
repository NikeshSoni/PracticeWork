import {useEffect , useState } from 'react';


const TrayApi = () => {

    const [trayApi , setTrayApi ] = useState([]);
    const [filter , setFilter ] = useState('');
    const [filterData , setFilterData ] = useState([]);

    useEffect( () => {

        const responceApi = async (apiProduct) => {
            try {
                    const apiInfo = await fetch('https://jsonplaceholder.typicode.com/users');
                    const changeFormat = await apiInfo.json();
                     apiProduct(changeFormat);
               } catch (error) {
                   console.log(error);
               }
        }
        
        responceApi(setTrayApi)
    },[])


    useEffect( () => {
        setFilterData(
            trayApi.filter( (data) => 
                data.name.toLowerCase().includes(filter.toLowerCase())
            )
        )

       
    },[filter, trayApi])
   


    // console.log(trayApi);

  return (
    <div>   

        <div>
            <input type='text' value={filter} onChange={(e) => setFilter(e.target.value)} className='p-3 my-3' />
        </div>
            {filterData && filterData.map( (items , index) => {
                 return(
                    <div key={index.id}>
                        <p>
                            {items.name}
                        </p>
                    </div>
                 )
            })}
    </div>
  )
}

export default TrayApi