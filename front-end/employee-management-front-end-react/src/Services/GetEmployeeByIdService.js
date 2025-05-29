import axios from "axios";

const GET_EMPLOYEE_URL = 'http://localhost:8080/get-by-id';

export const getEmployeeById = (employeeId) =>
  axios.get(`${GET_EMPLOYEE_URL}/${employeeId}`);
