package com.production_grade.employee_management.controller;

import com.production_grade.employee_management.entity.Employees;
import com.production_grade.employee_management.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

//    CRUD operations from service

//    create
    @PostMapping("create-employee")
    @ResponseStatus(HttpStatus.CREATED)
    public Employees createEmployee(@RequestBody Employees employee) {
        return employeeService.createEmployee(employee);
    }

//    read
    @GetMapping("read-employees")
    @ResponseStatus(HttpStatus.OK)
    public List<Employees> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

//    read by employee by id
    @GetMapping("get-by-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Employees getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

//    update
    @PutMapping("update-employee/{id}")
    public Employees updateEmployee(@PathVariable Long id,@RequestBody Employees employees){
        return employeeService.updateEmployee(id,employees);
    }

//    delete
    @DeleteMapping("delete-employee/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteEmployee(@PathVariable Long id){
         employeeService.deleteEmployee(id);
    }
}
