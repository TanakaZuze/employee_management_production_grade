import React, { useEffect, useState } from 'react'
import { listOfAllDepartments } from '../Services/AllDepartmentsService';
import { useNavigate } from 'react-router-dom';
import { deleteDepartment } from '../Services/DeleteDepartmentService';

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

    function updateDepartment(id) {
        navigator(`/update-department/${id}`)
    }

    // delete department
    function deleteDpt(id) {
        deleteDepartment(id)
            .then((response) => {
                console.log(response.data)

                // remove department from UI and state
                setDepartments((prevDepartment) => prevDepartment.filter(dpt => dpt.id !== id));
            }).catch(err => console.error(err))
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
                                        <button type="button" className="btn btn-secondary me-3" onClick={() => updateDepartment(dpt.id)}>Update</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteDpt(dpt.id)}>Delete</button>

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