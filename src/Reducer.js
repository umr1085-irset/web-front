import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { signupReducer } from "./components/Signup/SignupReducer";
import { loginReducer } from "./components/Login/LoginReducer"; 
import { projectsReducer } from "./components/Projects/ProjectsReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer,
    projects: projectsReducer
  });

export default createRootReducer;
