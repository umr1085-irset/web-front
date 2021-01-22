import axios from "axios";
import { toast } from "react-toastify";
import { push } from "connected-react-router";


export const resetPassword = (userData, redirectTo) => dispatch => {
    console.log(userData)
    axios
        .post("/api/v1/users/reset_password_confirm/", userData)
        .then(response => {
            toast.success(
                "Password successfully changed. Please login."
            );
            if (redirectTo !== "") {
                dispatch(push(redirectTo));
            }
        })
        .catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            toast.error(JSON.stringify(error.response.data.token));
        } else if (error.message) {
            // the error message is available,
            // let's display it on error toast
            toast.error(JSON.stringify(error.message));
        } else {
            // strange error, just show it
            toast.error(JSON.stringify(error));
        }
    });
};