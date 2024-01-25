package com.Hospital.Service.Impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Entity.New.Doctor;
import com.Hospital.Repository.DoctorRepository;
import com.Hospital.services.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {


    @Autowired
    DoctorRepository doctorRepository;


    // Add new Doctor
    @Override
    public Doctor addDoctor(Doctor doctor) {
        // TODO Auto-generated method stub
        return this.doctorRepository.save(doctor);
    }


    //Get All Doctor
    @Override
    public Set<Doctor> getAllDoctors() {
        // TODO Auto-generated method stub
        return new LinkedHashSet<>(this.doctorRepository.findAll());
    }

    // Update Doctor

    @Override
    public Doctor updateDoctor(Doctor doctor) {
        // TODO Auto-generated method stub
        return this.doctorRepository.save(doctor);
    }


    // delete Doctor
    @Override
    public void deleteDoctor(Long doctorId) {
        // TODO Auto-generated method stub

        Doctor doctor = new Doctor();
        doctor.setDoctorId(doctorId);
        this.doctorRepository.delete(doctor);

    }

    // Get Single Doctor

    @Override
    public Doctor getDoctor(Long doctorId) {
        // TODO Auto-generated method stub
        return this.doctorRepository.findById(doctorId).get();
    }


}
