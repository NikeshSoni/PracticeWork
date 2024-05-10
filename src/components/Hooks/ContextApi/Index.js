import {createContext} from 'react'
import ChildB from './ChildB';

// props Driling => if we have ChildA.js and i whant to put data in childC.js 
// in this case we use props driling..

// send props in ChailA.js
//     -To Child ChildB.js 
//      and then we send in ChildC.js
     
//      its bad code 
//      lets learn contextApi 
     
//      how Work contextApi ?

        // ========learn 3 think==============

        // Create , Provide , Consumer 
     
//          if we what to send Data in directly send 
//          ChildA.js to ChildC.js 
//          when we use Context Api
     
//      its a Problematic 

        // every time we use ContextApi and get as a function
        // its so lengthy code 

//  context api

const store = createContext();
const storeLast = createContext();
const Index = () => {

    const name = "Nikesh";
    const lastName = "Rajbhar";

  return (
    <div>
        <store.Provider value={name}>
                <storeLast.Provider  value={lastName}>
                  <ChildB  />
                </storeLast.Provider>        
        </store.Provider>
    </div>
  )
}

export default Index;
export {store , storeLast}