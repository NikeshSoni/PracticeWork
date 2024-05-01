import {useState} from 'react';
import NavbarHeader from '../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = () => {

  const [changeItem , setChangeItem ] = useState("Show Password");
  const [loginItem , setLoginItem ] = useState(true);
  const [change , setChange ] = useState("password");

  const handlePassword = () => {
     if (change === 'password' && changeItem === "Show Password") {
            setChange('text');
            setChangeItem("Hide Password")
      } else {
            setChange('password');
            setChangeItem("Show Password")
      }
  }


  const handleLogin = () => {
         

         if (loginItem === false) {
            setLoginItem(true)
         } else(
          setLoginItem(false)

         )  
  }

  return (
    <div>
        <NavbarHeader />
        
       <div className='row'>

        <div className='text-center mt-2'>
            <h3>
              {loginItem ? "Login" : "Sigin"} Your Account
            </h3>
        </div>

            <Form className='container col-5 mt-2'>
              <div className={loginItem ? 'd-none' : 'd-block'}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control  type={change} placeholder="Password" />
              </Form.Group>
              <Form.Group  className="mb-2" onClick={handlePassword} controlId="formBasicCheckbox">
                  <Form.Check  type="checkbox" label={changeItem} />
              </Form.Group>
                

                <div>
                    <div className='gap-3 d-flex mt-2'>
                      <Button variant="primary" type="submit"> Submit </Button>
                      <Button onClick={handleLogin} variant="success">{loginItem  ? "Sigin" : "Login"}</Button>
                    </div>
                </div>
          </Form>
       </div>
    </div>
  )
}

export default Login