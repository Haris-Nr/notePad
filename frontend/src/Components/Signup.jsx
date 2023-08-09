import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [crud, setCrud] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })

  let navigate = useNavigate();

  const handleSubmit= async(e)=>{
    e.preventDefault();
   const {name,email,password} = crud;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/")
      props.showAlert("successfully","success")

    }else{
      props.showAlert("invalid","danger")
    }
  }

  const handleChange = (e) => {
    setCrud({ ...crud, [e.target.name]: e.target.value });
};



  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text"
           placeholder="Enter Name" 
           name='name'
           onChange={handleChange}
           />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          name='email'
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
           placeholder="Password" 
           name='password'
           onChange={handleChange}
           required
           minLength={5}
           />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
          type="password"
          name='cpassword'
           placeholder="Confirm Password"
           onChange={handleChange}
           required
           minLength={5}
           />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Signup