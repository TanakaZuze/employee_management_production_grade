import { useState } from "react"
import { addDepartment } from "../Services/AddDepartment";
import { useNavigate } from "react-router-dom";

function AddDepartment() {
const navigate = useNavigate();


   const [departmentName, setDepartmentName] = useState('');
   const [departmentDescription,setDepartmentDescription]= useState('');

   const [errors, setErrors] = useState({
           departmentName: '',
           departmentDescription: '',
       })

   function handleDepartmentName(e){
    setDepartmentName(e.target.value);
   }

   function handleDepartmentDescription(e){
    setDepartmentDescription(e.target.value)
   }

   function saveDepartment(e){
    e.preventDefault();

    if(validateAddDepartmentForm()){
        const department = {
            departmentName,
            departmentDescription
        };

        addDepartment(department)
        .then(response => {
            console.log(response.data);
            navigate('/departments-list')
        }).catch(error => {
            console.log(error)
        })

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


    return (
        <>

                <h2 className="text-center mt-3 mb-3">Add department</h2>


                <form className="border border-dark-subtle p-3"> 

                    <div class="form-group mb-3">
                        <label for="departmentName" className="mb-1">Department Name</label>
                        <input
                         type="text"
                          className={`form-control ${errors.departmentName ? 'is-invalid' : ''}`}
                          id="departmentName" 
                          value={departmentName}
                          placeholder="Enter department name" 
                          onChange={handleDepartmentName}/>

                    </div>


                    <div class="form-group">
                        <label for="departmentDescription">Department Description</label>
                        <input
                         type="text"
                          className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`}
                           id="departmentDescription"
                           value={departmentDescription}
                            placeholder="Department description"
                            onChange={handleDepartmentDescription} />
                    </div>



                    <button type="submit" class="btn btn-primary mt-3" onClick={saveDepartment}>Submit</button>

                </form>
            


        </>
    )
}

export default AddDepartment