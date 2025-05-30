package com.production_grade.employee_management.service;

import com.production_grade.employee_management.entity.Department;
import com.production_grade.employee_management.exception.ResourceNotFoundException;
import com.production_grade.employee_management.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartmentService implements DepartmentServiceInterface{
    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
//create
    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }
//read all employees
    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }
//read by id
    @Override
    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
    }
//update department
    @Override
    public Department updateDepartment(Long id, Department updatedDepartment) {
//        check if department exists
        Department existingDepartment=departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
//        if it exists update the department
        existingDepartment.setDepartmentName(updatedDepartment.getDepartmentName());
        existingDepartment.setDepartmentDescription(updatedDepartment.getDepartmentDescription());


        return departmentRepository.save(existingDepartment);
    }
//delete department
    @Override
    public void deleteDepartment(Long id) {
//        check if department exists
        if(!departmentRepository.existsById(id)){
            throw new ResourceNotFoundException("Employee with id " + id + " not found");
        }else {
            departmentRepository.deleteById(id);
        }


    }
}
