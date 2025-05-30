package com.production_grade.employee_management.service;

import com.production_grade.employee_management.entity.Department;

import java.util.List;

//this interface class contains abstract CRUD methods
public interface DepartmentServiceInterface {
//    create department
    Department createDepartment(Department department);
//    read department
    List<Department> getAllDepartments();
//    read department by id
    Department getDepartmentById(Long id);
//    update department
    Department updateDepartment(Long id,Department department);
//    delete department
    void deleteDepartment(Long id);
}
