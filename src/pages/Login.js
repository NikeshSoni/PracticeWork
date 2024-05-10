import { useState } from 'react';
import NavbarHeader from '../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [changeItem, setChangeItem] = useState("Show Password");
    const [loginItem, setLoginItem] = useState(true);
    const [change, setChange] = useState("password");

    const [formData, setFormData] = useState({
      password: '',
      email: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
    };

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

      
    {loginItem === false ?  setLoginItem(true) : setLoginItem(false)}
    // if (loginItem === false) {
    //   setLoginItem(true)
    // } else (
    //   setLoginItem(false)
    // ) 
  }

  return (
    <>
      <NavbarHeader />
      <div className='row'>
        <form onSubmit={handleSubmit} className='container col-9 col-md-6 col-lg-5 mt-2'>

          <div className='text-center mt-2'>
            <h3>
              {loginItem ? "Login" : "Sigin"} Your Account
            </h3>
          </div>

          <div className={loginItem ? 'd-none' : 'd-block'}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Name</Form.Label>
                      <Form.Control 
                            // value='' 
                            type="email" 
                            placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="email" placeholder="Enter Your Number" />
                  </Form.Group>
              </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name='email'
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your email" />
          </Form.Group>

          <Form.Group>
          <Form.Label>Password</Form.Label>
              <Form.Control
                type={change}
                name="password"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your password"
              />
          </Form.Group>

          <Form.Group className="my-2" onClick={handlePassword} controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={changeItem} />
          </Form.Group>

          <div className='d-flex gap-3'>
            <Button onClick={handleLogin} variant="success">{loginItem ? "Sigin" : "Login"}</Button>
            <Button variant="primary" type="submit"> Submit </Button>
          </div>
        </form> 
      </div>
    </>
  )
}

export default Login