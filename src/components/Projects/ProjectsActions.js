import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./ProjectsTypes";

export const getProjects = () => dispatch => {
  axios
    .get("/api/v1/projects/")
    .then(response => {
      dispatch({
        type: GET_PROJECTS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addProject = project => dispatch => {
  axios
    .post("/api/v1/projects/", project)
    .then(response => {
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const deleteProject = id => dispatch => {
  axios
    .delete(`/api/v1/projects/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const updateProject = (id, project) => dispatch => {
  axios
    .patch(`/api/v1/projects/${id}/`, project)
    .then(response => {
      dispatch({
        type: UPDATE_PROJECT,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};
