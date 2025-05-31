import axios from "axios";


const DELETE_DEPARTMENT_API_URL='http://localhost:8080/delete-department';

export const deleteDepartment = (employeeId) => 
    axios.delete(DELETE_DEPARTMENT_API_URL + '/' + employeeId);
