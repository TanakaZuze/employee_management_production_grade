import axios from "axios";

const GET_DEPARTMENT_URL = 'http://localhost:8080/get-department-by-id';

export const getDepartmentById = (departmentId) =>
  axios.get(`${GET_DEPARTMENT_URL}/${departmentId}`);
