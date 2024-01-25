package com.Hospital.Repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital.Entity.New.Appointment;
import com.Hospital.Entity.New.Doctor;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    Set<Appointment> findByDoctor(Doctor doctor);
}