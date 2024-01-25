package com.Hospital.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hospital.Entity.New.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
