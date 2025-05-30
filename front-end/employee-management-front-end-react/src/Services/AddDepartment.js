import axios from "axios";


const CREATE_DEPARTMENT_URL = 'http://localhost:8080/create-department';

export const addDepartment = (department) => {
  return axios.post(CREATE_DEPARTMENT_URL, department);
};