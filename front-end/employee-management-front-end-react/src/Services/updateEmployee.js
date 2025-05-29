import axios from "axios";


const UPDATE_EMPLOYEE_API_URL='http://localhost:8080/update-employee';

export const updateEmployee = (employeeId,employees) => 
    axios.put(UPDATE_EMPLOYEE_API_URL + '/' + employeeId,employees);
