import {useCallback, useState} from 'react';
import Child from './Child';


const Learning = () => {

    const [callState , setCallState ] = useState(0);
    const [callStateData , setCallStateData ] = useState(0);

    // when we define one function here 

  //  const callData = () => {
        //   we will pass this function as a props
        //   and get in the child conponents 
        //   when we do this 
        //   are child component are re render 

   // }

   // right whay to solve this problum 

   const callData = useCallback( () => {
        
   },[callStateData])


  return (
    <div>
        <h1>Learning  CallBack </h1>

        <div>

            {/* when we Click on the  Addition
                 are Child Component are every time re Render
                in this Case to stop the re rendering 
                it will be use CallBack function

                1st way to solve this error
                export default memo(Child); // using use memo

                //  but its not proper soulution 

            */}

            <Child callData={callData}/> 


            <p>Count - {callState}</p>

            <button onClick={ () =>  setCallState( callState  + 1)}>
                    Addition
            </button>

            <button onClick={ () => { callState >= 1 ? setCallState( callState - 1) :alert('add ok')} }>
                    decriment
            </button>

            {/*  
                if we whant to one function are not re rendering and 

                other function are rerender 
                then we can use this 

                 const callData = useCallback( () => {
        
                        },[callStateData])
            */}

            <p>Count - {callStateData}</p>

            <button onClick={ () =>  setCallStateData( callStateData  + 2)}>
                    Addition
            </button>

        </div>
    </div>
  )
}

export default Learning