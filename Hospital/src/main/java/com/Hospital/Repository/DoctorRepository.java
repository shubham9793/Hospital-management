package com.Hospital.Repository;

import com.Hospital.Entity.New.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Hospital.Entity.New.Doctor;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    public List<Doctor> findBycategory(Category category);

}
