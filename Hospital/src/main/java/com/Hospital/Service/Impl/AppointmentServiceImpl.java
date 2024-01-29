package com.Hospital.Service.Impl;


import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Entity.New.Appointment;
import com.Hospital.Entity.New.Doctor;
import com.Hospital.Repository.AppointmentRepository;
import com.Hospital.services.AppointmentService;


@Service
public class AppointmentServiceImpl implements AppointmentService {


    @Autowired
    private AppointmentRepository appointmentRepository;


    // Book new Appointment
    @Override
    public Appointment bookAppintment(Appointment appointment) {
        // TODO Auto-generated method stub
        System.out.println("Received Appointment: " + appointment);
        return this.appointmentRepository.save(appointment);


    }

    // Get Single Appointment

    @Override
    public Appointment getSingleAppointment(Long appointmentId) {
        // TODO Auto-generated method stub
        return this.appointmentRepository.findById(appointmentId).get();
    }


    // Get All Appointment
    @Override
    public Set<Appointment> getAllAppointment() {
        // TODO Auto-generated method stub
        return new LinkedHashSet<>(this.appointmentRepository.findAll());
    }


    // update Appointment

    @Override
    public Appointment updateAppointment(Appointment appointment) {
        // TODO Auto-generated method stub
        return this.appointmentRepository.save(appointment);
    }


    // Delete Appointment

    @Override
    public void deleteAppointment(Long appointmentId) {
        // TODO Auto-generated method stub
        Appointment appointment = new Appointment();
        appointment.setAppointmentId(appointmentId);
        this.appointmentRepository.delete(appointment);
    }


    // Get Appointment of any doctor

    @Override
    public Set<Appointment> getAppointmentOfDoctor(Doctor doctor) {
        // TODO Auto-generated method stub

        return this.appointmentRepository.findByDoctor(doctor);
    }

    @Override
    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }


}

