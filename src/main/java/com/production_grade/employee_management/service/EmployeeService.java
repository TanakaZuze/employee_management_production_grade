package com.production_grade.employee_management.service;

import com.production_grade.employee_management.entity.Employees;
import com.production_grade.employee_management.exception.ResourceNotFoundException;
import com.production_grade.employee_management.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
//thyis class implements the EmployeeServiceInterface with crud methods
@Service
public class EmployeeService implements EmployeeServiceI {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

//    CRUD operations code below

// create employee
    public Employees createEmployee(Employees employee) {
        return employeeRepository.save(employee);
    }

//    read all employee
    public List<Employees> getAllEmployees() {
        return employeeRepository.findAll();
    }

//    read employee by id
    public Employees getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
    }

//    update employee

//    delete employee
    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)) {
            throw new ResourceNotFoundException("Employee with id " + id + " not found");
        }

        employeeRepository.deleteById(id);

    }

//    update
    public Employees updateEmployee(Long id,Employees updatedEmployee) {
        Employees existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));

//        existing employee
        existingEmployee.setEmployeeName(updatedEmployee.getEmployeeName());
        existingEmployee.setEmployeeLastname(updatedEmployee.getEmployeeLastname());
        existingEmployee.setEmployeeEmail(updatedEmployee.getEmployeeEmail());

        return employeeRepository.save(existingEmployee);

    }
}
