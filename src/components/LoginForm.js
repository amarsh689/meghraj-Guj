import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";

function LoginForm(props) {
  const [input, setInput] = useState({

    email: "",
    password: ""
  })
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const navigate = useNavigate();

  const anotherSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    console.log(props.RegistrationData.data.email);
    console.log(props.RegistrationData.data.password);
    console.log(input.email);
    if (props.RegistrationData.data.email === input.email && props.RegistrationData.data.password === input.password) {
      navigate('/dash')
      console.log("data true")
    }
    else{
      alert("Credentils not match");
    }
  }

  return (
    <>
      <h3> Login Form </h3>
      <Form >

        <label htmlFor="" >Email :</label><br />
        <input type="email" placeholder='Enter your email' name="email" onChange={onChangeHandler} value={input.email} /><br /><br />

        <label htmlFor="" >Password :</label><br />
        <input type="password" placeholder='Enter your password' name="password" onChange={onChangeHandler} value={input.password} /><br /><br />

        <Button variant="primary" type="submit" onClick={anotherSubmit} >
          Submit
        </Button>

        <Link to="/forgetPassword" className="btn btn-link">Forgot Password</Link>
        <Link to="/" className="btn btn-link">Registration</Link>
      </Form>


    </>
  )
}

const mapStateToProps = (state) => {
  return {
    RegistrationData: state.signup
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

