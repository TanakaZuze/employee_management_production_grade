import { useEffect, useState } from "react"
import { addDepartment } from "../Services/AddDepartment";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentById } from "../Services/GetDepartmentByIdService";
import { updateDepartment } from "../Services/updateDepartment";

function AddDepartment() {
    const navigate = useNavigate();

    const { id } = useParams();


    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');

    const [errors, setErrors] = useState({
        departmentName: '',
        departmentDescription: '',
    })

    useEffect(() => {
        if (id) {
            getDepartmentById(id).then((response) => {
                setDepartmentName(response.data.departmentName);
                setDepartmentDescription(response.data.departmentDescription)
            }).catch(error => {
                console.error(error)
            })
        }
    }, [id])

    function handleDepartmentName(e) {
        setDepartmentName(e.target.value);
    }

    function handleDepartmentDescription(e) {
        setDepartmentDescription(e.target.value)
    }

    function saveDepartment(e) {
        e.preventDefault();

        if (validateAddDepartmentForm()) {
            const department = {
                departmentName,
                departmentDescription
            };
            if (id) {
                updateDepartment(id, department).then((response) => {
                    console.log(response.data);
                    navigate('/departments-list')
                }).catch(error => {
                    console.log(error)
                })
            } else {
                addDepartment(department)
                    .then((response) => {
                        console.log(response.data);
                        navigate('/departments-list')
                    }).catch(err => 
                        console.error(err))
            }
        }
    }

    // function to validate form
    function validateAddDepartmentForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (departmentName.trim()) {
            errorsCopy.departmentName = '';
        } else {
            errorsCopy.departmentName = 'Department name is required'
            valid = false;
        }

        if (departmentDescription.trim()) {
            errorsCopy.departmentDescription = '';
        } else {
            errorsCopy.departmentDescription = 'Department description is required'
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
  // this function dynamically changes the add or update title component
    function changePageTitle() {
        if (id) {
            return <h2>Update Department </h2>
        }
        else {
            return <h2>Add Department</h2>
        }
    }


    return (
        <>
            <div className="text-center mt-3 mb-3">
                {
                    changePageTitle()
                }
            </div>

            <form className="border border-dark-subtle p-3">

                <div class="form-group mb-3">
                    <label for="departmentName" className="mb-1">Department Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.departmentName ? 'is-invalid' : ''}`}
                        id="departmentName"
                        value={departmentName}
                        placeholder="Enter department name"
                        onChange={handleDepartmentName}
                    />
                    {errors.departmentName && <div className='invalid-feedback'> {errors.departmentName}
                    </div>}
                </div>


                <div class="form-group">
                    <label for="departmentDescription">Department Description</label>
                    <input
                        type="text"
                        className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`}
                        id="departmentDescription"
                        value={departmentDescription}
                        placeholder="Department description"
                        onChange={handleDepartmentDescription}
                    />
                    {errors.departmentDescription && <div className='invalid-feedback'> {errors.departmentDescription}</div>}

                </div>



                <button type="submit" class="btn btn-primary mt-3" onClick={saveDepartment}>Submit</button>

            </form>



        </>
    )
}

export default AddDepartment