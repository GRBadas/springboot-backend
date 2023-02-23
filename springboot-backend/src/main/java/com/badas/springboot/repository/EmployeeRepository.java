package com.badas.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badas.springboot.model.Employee;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}