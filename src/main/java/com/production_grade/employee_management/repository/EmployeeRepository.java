package com.production_grade.employee_management.repository;

import com.production_grade.employee_management.entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees,Long> {
}
