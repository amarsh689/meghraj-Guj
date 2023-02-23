
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function ForgetPass() {
  const [formInput, setFormInput] = useState({
    newpassword: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    newpassword: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {

      newpassword: "",
      confirmPassword: "",
    };

    if ( !formInput.newpassword) {
      setFormError({
        ...inputError,
        
        newpassword: "Password should not be empty",
      });
      return
    }

   

    if (formInput.confirmPassword !== formInput.newpassword) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.newpassword) {
      setFormError({
        ...inputError,
        newpassword: "Password should not be empty",
      });
      return
      
    }
    else{alert("Please Enter valid password")}

    setFormError(inputError);
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Reset Password</h4>
        </div>

        <div className="card-body">
          <form onSubmit={validateFormInput}>
         
            <p className="label">New Password :</p>
            <input
              value={formInput.newpassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="newpassword"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="error-message">{formError.newpassword}</p>

            <p className="label">Confirm Password : </p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>

           
           
            <Button type="submit" className="btn" value="Submit" >submit</Button>
          
            <Link to="/" className="btn btn-link">Sign up</Link>
     
            </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;