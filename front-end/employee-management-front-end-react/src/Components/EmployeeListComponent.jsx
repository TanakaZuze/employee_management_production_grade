import React, { useEffect, useState } from 'react'
import { listOfAllEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../Services/deleteEmployee';

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

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

 function deleteEmployees(id) {
  deleteEmployee(id)
    .then((response) => {
      console.log(response.data);

      // Remove the deleted employee from state
      setEmployees((prevEmployees) => prevEmployees.filter(emp => emp.id !== id));
    })
    .catch(err => console.error(err));
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
                        <th scope="col">Actions</th>


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
                                <td>
                                    <button className='btn btn-info' onClick={()=> updateEmployee(emp.id)}> Update employee</button>
                                    <button  className="btn btn-danger mx-2" onClick={()=> deleteEmployees(emp.id)}> Delete</button>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeListComponent;
