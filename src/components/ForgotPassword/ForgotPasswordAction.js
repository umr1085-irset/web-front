import axios from "axios";
import { toast } from "react-toastify";
import { toastOnError } from "../../utils/Utils";
import { unsetCurrentUser } from "../Login/LoginActions"

export const resetpassword = (userData) => dispatch => {
    axios
      .post("/api/v1/users/reset_password/", userData)
      .then(response => {
        toast.success(
          "A password reset link will be sent to your email address."
        );
      })
      .catch(error => {
        dispatch(unsetCurrentUser());
        toastOnError(error);
      });
  };