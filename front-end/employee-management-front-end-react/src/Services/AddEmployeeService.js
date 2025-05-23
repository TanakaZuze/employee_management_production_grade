import axios from "axios";


const CREATE_EMPLOYEE_URL = 'http://localhost:8080/create-employee';

export const addEmployee = (employee) => {
  return axios.post(CREATE_EMPLOYEE_URL, employee);
};