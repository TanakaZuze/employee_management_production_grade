package com.production_grade.employee_management.service;

import com.production_grade.employee_management.entity.Employees;
import com.production_grade.employee_management.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

//    CRUD operations code below

// create student
    public Employees createEmployee(Employees employee) {
        return employeeRepository.save(employee);
    }

//    read all students
    public List<Employees> getAllEmployees() {
        return employeeRepository.findAll();
    }

//    update employee

//    delete employee
    public String deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return "Employee with id " + id + " deleted";
    }
}
