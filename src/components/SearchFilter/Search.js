import {useState} from 'react';
import {Form} from 'react-bootstrap'

const Search = () => {

    
  const names = ['Nikesh' ,'Nikki' , 'Harry' , 'Toxic'];


    const [filterList , setFilterList] = useState('');

    const getItem = (e) => {
            setFilterList(e.target.value)
    }

    const userInput = names.filter(  (e) =>  
         e.toLowerCase().includes(filterList.toLowerCase())
       )

  return (
    <div className='col-5'>
            <Form.Group className='my-5'>
                <Form.Label>Enter User Info</Form.Label>
                    <Form.Control
                        type='text'
                        value={filterList}
                        onChange={getItem}
                        placeholder="Enter Your Userid"
                    />
            </Form.Group>

            <ul>
                {userInput.map( (items , index) => {
                    return <li key={index}>{items}</li>
                })}

            {/* {filterList && filterList.map( (items))} */}
            </ul>
    </div>
  )
}

export default Search