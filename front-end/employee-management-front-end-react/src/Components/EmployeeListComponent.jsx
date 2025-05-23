import React, { useEffect, useState } from 'react'
import { listOfAllEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function EmployeeListComponent() {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listOfAllEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    function addNewEmployee() {
        navigator('add-employee');
    }

    return (
        <div className='container'>
            <h1 className='text-center py-2'>List of Employees</h1>
            <button type="button" className="btn btn-primary mb-3" onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.employeeName}</td>
                                <td>{emp.employeeLastname}</td>
                                <td>{emp.employeeEmail}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeListComponent;
