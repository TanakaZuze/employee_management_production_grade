import axios from "axios";


const DELETE_EMPLOYEE_API_URL='http://localhost:8080/delete-employee';

export const deleteEmployee = (employeeId) => 
    axios.delete(DELETE_EMPLOYEE_API_URL + '/' + employeeId);
