import {useEffect , useState} from 'react';


const Example = () => {

    const [eProduct , setEProduct ] = useState()

    useEffect( () => {
         const apiData = "https://fakestoreapi.com/products";

         fetch(apiData)
            .then((data) => data.json())
            .then( (data) => setEProduct(data))
    },[])

    console.log(eProduct);

  return (
    <div className='row'>
        { eProduct && eProduct.map((items , index) => {
             return (
                    <div key={index}>
                        <div>{items.title}</div>
                    </div>
             )
        })}
    </div>
  )
}

export default Example