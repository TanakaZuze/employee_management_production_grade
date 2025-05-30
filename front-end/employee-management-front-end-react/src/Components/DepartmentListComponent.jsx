import React, { useEffect, useState } from 'react'
import { listOfAllDepartments } from '../Services/AllDepartmentsService';
import { useNavigate } from 'react-router-dom';

function DepartmentListComponent() {
    // consuming get all departments APIs
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();


    useEffect(() => {
        listOfAllDepartments().then((response) => {
            setDepartments(response.data);
        }).catch((err) => {
            console.error(err)
        });
    }, []);

    // function to add new department
    function addNewDepartment() {
        navigator('/add-department')
    }





    return (
        <>
            <div className='container'>

                <h1 className='text-center'>List of Departments</h1>
                <button type="button" className="btn btn-primary mb-3" onClick={addNewDepartment}>Add Department</button>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>

                            <th scope="col">Id</th>
                            <th scope="col">Department name</th>
                            <th scope="col">Department description</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            departments.map(dpt =>
                                <tr key={dpt.id}>
                                    <td>{dpt.id}</td>
                                    <td>{dpt.departmentName}</td>
                                    <td>{dpt.departmentDescription}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary me-3">Update</button>
                                        <button type="button" className="btn btn-danger">Delete</button>

                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DepartmentListComponent