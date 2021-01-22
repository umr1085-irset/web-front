/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { SET_CURRENT_USER } from "../../components/Login/LoginTypes";
import { toast } from "react-toastify";


export const updateUser = useData => dispatch => {
    axios
      .patch(`/api/v1/users/me/`, useData)
      .then(response => {
        const user = {
            username: response.data.username,
            email: response.data.email,
            name: response.data.name,
            last_login: response.data.last_login,
            is_active: response.data.is_active,
            phone_number: response.data.phone_number
          };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
            type: SET_CURRENT_USER,
            payload: user
        });
        toast.success(
            "User updated"
          );
      })
      .catch(error => {
        toastOnError(error);
      });
  };