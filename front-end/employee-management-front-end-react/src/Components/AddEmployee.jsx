import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../Services/AddEmployeeService';

function AddEmployee() {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeLastname, setEmployeeLastname] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');

    const navigator = useNavigate();

    function handleFirstName(e) {
        setEmployeeName(e.target.value);
    }

    function handleSecondName(e) {
        setEmployeeLastname(e.target.value)
    }

    function handleEmail(e) {
        setEmployeeEmail(e.target.value)
    }

    function saveEmployee(e) {
        e.preventDefault();
        const employees = {
            employeeName: employeeName,
            employeeLastname: employeeLastname,
            employeeEmail: employeeEmail
        };

        addEmployee(employees).then((response) => {
            console.log(response.data);
            navigator('/')
        }).catch(err => console.error(err));
    }

    return (
        <>
            <h1 className='text-center'>Add Employee</h1>
            <form className='border border-dark-subtle p-3'>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Employee Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={employeeName}
                        onChange={handleFirstName}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Employee Lastname:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={employeeLastname}
                        onChange={handleSecondName}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={employeeEmail}
                        onChange={handleEmail}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Submit</button>
            </form>
        </>
    )
}

export default AddEmployee;
