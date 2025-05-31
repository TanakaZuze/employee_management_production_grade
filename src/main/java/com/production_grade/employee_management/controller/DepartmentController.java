package com.production_grade.employee_management.controller;

import com.production_grade.employee_management.entity.Department;
import com.production_grade.employee_management.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class DepartmentController {
    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

//    create department
    @PostMapping("/create-department")
    @ResponseStatus(HttpStatus.CREATED)
    public Department createDepartment(@RequestBody Department department) {
        return departmentService.createDepartment(department);
    }

//    read all employees
    @GetMapping("/read-departments")
    @ResponseStatus(HttpStatus.OK)
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

//    read by id
    @GetMapping("get-department-by-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Department getDepartmentById(@PathVariable Long id){
        return departmentService.getDepartmentById(id);
    }

//    update department
    @PutMapping("/update-department/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Department updateDepartment(@PathVariable Long id,@RequestBody Department department){
        return departmentService.updateDepartment(id,department);
    }

//    delete department
    @DeleteMapping("/delete-department/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public  String  deleteDepartment(@PathVariable Long id){
        departmentService.deleteDepartment(id);
        return "Department with"+id+" deleted";
    }
}
