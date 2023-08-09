import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [crud, setCrud] = useState({
    email:"",
    password:""
  })

  let navigate = useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:crud.email,password:crud.password})
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert("Login successfully","success")
      navigate("/")

    }else{
      props.showAlert("invalid Details","danger")
    }
  }

  const handleChange = (e) => {
    setCrud({ ...crud, [e.target.name]: e.target.value });
};

  return (
    
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        name='email'
        value={crud.email}
        onChange={handleChange}
         />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password"
         placeholder="Password" 
         name='password'
         value={crud.password}
         onChange={handleChange}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    
  )
}

export default Login