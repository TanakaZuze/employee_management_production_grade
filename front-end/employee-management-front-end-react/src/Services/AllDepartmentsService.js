import axios from "axios";


const GET_ALL_DEPARTMENTS='http://localhost:8080/read-departments';

export const listOfAllDepartments = () => axios.get(GET_ALL_DEPARTMENTS);
