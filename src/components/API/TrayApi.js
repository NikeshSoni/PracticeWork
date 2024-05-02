import {useEffect , useState , useFetch} from 'react';


const TrayApi = () => {

    const [trayApi , settrayApi ] = useState();

    useEffect( () => {

        const responceApi = async (apiProduct) => {
            try {
                    const apiInfo = await fetch('https://fakestoreapi.com/products');
                    const changeFormat = await apiInfo.json();
                    const mainData =  apiProduct(changeFormat);

                    console.log(mainData);
                   
               } catch (error) {
                   console.log(error);
               }
        }

        responceApi(settrayApi)
    },[])

    console.log(trayApi);

  return (
    <div>   
            {trayApi && trayApi.map( (items , index) => {
                 return(
                    <div key={index}>
                        <p>
                            {items.title}
                        </p>
                    </div>
                 )
            })}
    </div>
  )
}

export default TrayApi