import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [data, setData] = useState({});

  const handleInp = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
console.group(data)  
};
  const handleSubmit = async (e) => {
    e.preventDefault()
    const api = "http://localhost:3000/Form";
    const res = await axios.post(api, data);
    setData({
        name:"name",
        empno:"",
        age:"",
        salary:""
    })
}

  return (
    <>
      <h1>Insert Page</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Empno</Form.Label>
          <Form.Control
            type="text"
            value={data.name}
            name="name"
            onChange={handleInp}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={data.age}
            name="age"
            onChange={handleInp}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            value={data.salary}
            name="salary"
            onChange={handleInp}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            value={data.empno}
            name="empno"
            onChange={handleInp}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Insert;
