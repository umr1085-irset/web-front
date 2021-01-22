// import needed actions
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS
} from "./SignupTypes";

// define the initial state of the signup store
const initialState = {
  usernameError: "",
  passwordError: "",
  isSubimtted: false
};

// define how action will change the state of the store
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      return {
        usernameError: "",
        passwordError: "",
        emailError: "",
        isSubimtted: true
      };
    case CREATE_USER_ERROR:
      const errorState = {
        usernameError: "",
        passwordError: "",
        emailError: "",
        isSubimtted: false
      };
      if (action.errorData.hasOwnProperty("username")) {
        errorState.usernameError = action.errorData["username"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.passwordError = action.errorData["password"];
      }
      if (action.errorData.hasOwnProperty("email")) {
        errorState.emailError = action.errorData["email"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      return {
        usernameError: "",
        passwordError: "",
        emailError: "",
        isSubimtted: false
      };
    default:
      return state;
  }
}