import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./ProjectsTypes";

const initialState = {
    projects: []
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((item, index) => item.id !== action.payload)
      };
    case UPDATE_PROJECT:
      const updatedProject = state.projects.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        projects: updatedProject
      };
    default:
      return state;
  }
};