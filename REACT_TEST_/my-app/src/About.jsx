import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [input, setData] = useState({});
  const handleInp = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:3000/Form";
    const res = await axios.post(api, input);
 
    console.log(res);
    setData(res.data);
    alert("Data submitted successfully");
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder=""
            value={input.name}
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desigantion</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            placeholder=""
            value={input.designation}
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="department"
            value={input.department}
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="salary"
            value={input.salary}
            onChange={handleInp}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handelSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default About;
