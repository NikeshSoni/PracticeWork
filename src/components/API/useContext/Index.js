import {createContext} from 'react';
import ChildA from './ChildA';

// know about 3 think
// what is useCont

    const contextData = createContext()
    const contextInfo = createContext()

// create , provide , useContext
// how use it is 



const Index = () => {

    const name = "Nikesh";
    const lastName =22;

  return (
    <div>
        <h1>
            Learning usecontext 
        </h1>

        <contextData.Provider value={name}>
            <contextInfo.Provider value={lastName}>
                 <ChildA />
            </contextInfo.Provider> 
        </contextData.Provider>

        

    </div>
  )
}

export default Index;
export {contextData , contextInfo}