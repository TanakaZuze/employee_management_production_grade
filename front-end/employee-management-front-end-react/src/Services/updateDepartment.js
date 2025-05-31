import axios from "axios";

const UPDATE_DEPARTMENT_URL='http://localhost:8080/update-department';


export const updateDepartment = (departmentId, department) => {
  return axios.put(`${UPDATE_DEPARTMENT_URL}/${departmentId}`, department);
};