import {useEffect , useState , useRef} from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const CardProject = () => {

    const [dataGithub , setDataGithub] = useState();

    const [inputVal , setInputVal ] = useState()

    const refData = useRef();


    function GithubVal() {
        const dataInput = refData.current.value;
        console.log(dataInput);
        setInputVal(refData.current.value)
    }
   
        useEffect( () => {
            
            const gitData = async (storeApi) => {
               try {
                    const url = await fetch(`https://api.github.com/users/${inputVal}`);
                    const changeJson = await url.json();
                    const dataStore = storeApi(changeJson);

               } catch (error) {
                    console.log(error);
               }
            }

              gitData(setDataGithub)
        },[])

  return (
    <div>
        <div className='col-5'>
            <Form.Group className='my-5'>
                <Form.Label>Enter User Info</Form.Label>
                <Form.Control
                    type='text'
                    ref={refData} 
                    value={inputVal}
                    placeholder="Enter Your Userid"
                />
            </Form.Group>
          <div>
                  <Button onClick={GithubVal} variant="primary"> Submit </Button>
          </div>


            <h1>
                {inputVal}
            </h1>
        </div>
    </div>
  )
}

export default CardProject