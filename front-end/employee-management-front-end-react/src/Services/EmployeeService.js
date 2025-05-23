import axios from "axios";


const ADD_EMPLOYEE_API_URL='http://localhost:8080/read-employees';

export const listOfAllEmployees = () => axios.get(ADD_EMPLOYEE_API_URL);
