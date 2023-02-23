import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import SignupActions from './redux/ResetPwdActions';
import { Link ,useNavigate} from 'react-router-dom';
const RegistrationForm = (props) => {

  const { SignupRequest } = props;

  const [add, setAdd] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    city:"",
    gender: ""
  })







  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {

      password: "",
      confirmPassword: "",
    };

    if ( !add.newpassword) {
      setAdd({
        ...inputError,
        
        password: "Password should not be empty",
      });
      return
    }

   

    if (add.confirmPassword !== add.password) {
      setAdd({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!add.password) {
      setAdd({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    setAdd(inputError);
  };


  const handler = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    setAdd({ ...add, [name]: value })
  }

  const navigate =useNavigate();
  const submit = (event) => {
    event.preventDefault();
    console.log(add);
    SignupRequest(add);
    
    navigate('/login')
  }
  return (
    <>
      <h3>Registration Form :</h3><br />
      <Form onSubmit={submit}>

        <input type="text" placeholder='Enter your Name' name="username" onChange={handler} value={add.username} /><br /><br />

        <input type="email" placeholder='Enter your Email' name="email" onChange={handler} value={add.email} /><br /><br />

        <input type="number" placeholder='Enrer your Number' name="contact" onChange={handler} value={add.contact} /><br /><br />

        <input type="password" placeholder='Enter your Password' name="password" onChange={handler} value={add.password} /><br /><br />

        <input type="password" placeholder='Confirm Password' name="confirmPassword" onChange={handler} value={add.confirmPassword} /><br /><br />

        <input type="text" placeholder='Enter your city' name="city" onChange={handler} value={add.city} /><br /><br />

        <input type="text" placeholder='Enter your gender' name="gender" onChange={handler} value={add.gender} /><br /><br />
        { !add.password &&
          <div className="help-block">Password is required</div>
      }


        <Button variant="dark" type="submit" onSubmit={validateFormInput}>
          Submit
        </Button>


        <Link to="/login" className="btn btn-link">Cancel</Link>
      
      
      
        </Form>

    </>
  )
}



const mapStateToProps = (state) => {
  return {
    // Emailaddress: state.signup.userData.Emailaddress,
    // Password: state.signup.userData.Password,
    // ShareLink: state.sbmReducer.ShareLink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SignupRequest(add) {
      return dispatch(SignupActions.SignupActionsRequest(add));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);