import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee } from '../Services/AddEmployeeService';
import { getEmployeeById } from '../Services/GetEmployeeByIdService';
import { updateEmployee } from '../Services/updateEmployee';

function AddEmployee() {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeLastname, setEmployeeLastname] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');

    const { id } = useParams();

    const [errors, setErrors] = useState({
        employeeName: '',
        employeeLastname: '',
        employeeEmail: ''
    })

    const navigator = useNavigate();

    // for updating
    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setEmployeeName(response.data.employeeName);
                setEmployeeLastname(response.data.employeeLastname)
                setEmployeeEmail(response.data.employeeEmail)
            }).catch(error => {
                console.error(error)
            })
        }
    }, [id])

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

        if (validateAddEmployeeForm()) {
            const employees = {
                employeeName: employeeName,
                employeeLastname: employeeLastname,
                employeeEmail: employeeEmail
            };

            if (id) {
                updateEmployee(id, employees).then((response) => {
                    console.log(response.data);
                    navigator('/')
                }).catch(error => {
                    console.log(error)
                })
            } else {
                addEmployee(employees).then((response) => {
                    console.log(response.data);
                    navigator('/')
                }).catch(err => console.error(err));
            }

        }

    }



    // function to validate form
    function validateAddEmployeeForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (employeeName.trim()) {
            errorsCopy.employeeName = '';
        } else {
            errorsCopy.employeeName = 'First name is recquired'
            valid = false;
        }

        if (employeeLastname.trim()) {
            errorsCopy.employeeLastname = '';
        } else {
            errorsCopy.employeeLastname = 'Last name is recquired'
            valid = false;
        }

        if (employeeEmail.trim()) {
            errorsCopy.employeeEmail = '';
        } else {
            errorsCopy.employeeEmail = 'Email is required';
            valid = false;
        }


        setErrors(errorsCopy);

        return valid;

    }
    // this function dynamically changes the add or update title component
    function changePageTitle() {
        if (id) {
            return <h2>Update employee </h2>
        }
        else {
            return <h2>Add employee</h2>
        }
    }


    return (
        <>

            <div className='text-center'>
                {
                    changePageTitle()
                }
            </div>


            <form className='border border-dark-subtle p-3'>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Employee Name:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.employeeName ? 'is-invalid' : ''}`}
                        id="firstName"
                        value={employeeName}
                        onChange={handleFirstName}
                    />
                    {errors.employeeName && <div className='invalid-feedback'> {errors.employeeName}</div>}
                </div>



                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Employee Last name:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.employeeLastname ? 'is-invalid' : ''}`}
                        id="lastName"
                        value={employeeLastname}
                        onChange={handleSecondName}
                    />
                    {errors.employeeLastname && <div className='invalid-feedback'> {errors.employeeLastname}</div>}

                </div>



                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${errors.employeeEmail ? 'is-invalid' : ''}`}
                        id="email"
                        value={employeeEmail}
                        onChange={handleEmail}
                    />
                    {errors.employeeEmail && <div className='invalid-feedback'> {errors.employeeEmail}</div>}

                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>



                <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Submit</button>


            </form>
        </>
    )
}

export default AddEmployee;
