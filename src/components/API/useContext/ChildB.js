import React, { useContext } from 'react';
import { contextData, contextInfo } from './Index';



const ChildB = () => {

    const name = useContext(contextData);
    const age = useContext(contextInfo);
    
  return (
    <div>
        
        ChildB

        <h2>
            Hii i am {name} and i {age} Year old
        </h2>
    </div>
  )
}

export default ChildB