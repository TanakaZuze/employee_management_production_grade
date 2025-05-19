package com.production_grade.employee_management.service;

import com.production_grade.employee_management.entity.Employees;

import java.util.List;

//employee interface for service.This is best practice to increase modularity,scalabilty and reduce dependencety
public interface EmployeeServiceI {
//    crud methods to be implemented in EmployeeService
    Employees createEmployee(Employees employee);
    List<Employees> getAllEmployees();
    Employees getEmployeeById(Long id);
    void deleteEmployee(Long id);
    Employees updateEmployee(Long id,Employees employee);

}
