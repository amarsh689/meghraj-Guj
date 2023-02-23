import Signup_REQUESTActionTypes from "./SignupActiontype";

const initialState = {
  loading: false,
  data: "",
  error: "",
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case Signup_REQUESTActionTypes.Signup_REQUEST: {
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default SignupReducer;
