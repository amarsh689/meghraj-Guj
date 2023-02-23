import Signup_REQUESTActionTypes from "./SignupActiontype";

const SignupActions = {
    SignupActionsRequest(data) {
    return {
      type: Signup_REQUESTActionTypes.Signup_REQUEST,
      payload: data,
    };
  },
};

export default SignupActions;