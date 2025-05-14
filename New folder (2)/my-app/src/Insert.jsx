import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";


const Insert = () => {
  const [input ,setInput]=useState({});
    const handleinput=(e)=> {
      const name = e.target.name;
      const value = e.target.value;
      setInput((values)=>({...values,[name]:value}))
      console.log(input)
    }

const handleSubmit =async (e) => {
    e.preventDefault();
    const api ="http://localhost:3001/Student";
    const res = await axios.post(api,input)
    setInput({
        name:"",
        empno:"",
        salary:"",
        city:""
    })
    console.log(res)
  };

  return (
    <div>
      <Form  >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
         type="text"
         name="name"
         value={input.name}
         onChange={handleinput}
         placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter empno</Form.Label>
          <Form.Control
          type="text"
         name="empno"
         value={input.empno}
         onChange={handleinput}
         placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter City</Form.Label>
          <Form.Control
           type="text"
         name="city"
         value={input.city}
         onChange={handleinput}
         placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Salary</Form.Label>
          <Form.Control
          type="text"
         name="salray"
         value={input.salary}
         onChange={handleinput}
         placeholder="Enter name"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Insert;
