package com.Hospital.services;


import java.util.Set;

import com.Hospital.Entity.New.Appointment;
import com.Hospital.Entity.New.Doctor;



public interface AppointmentService {
	
	
	// Book New Appointment 
	public Appointment bookAppintment(Appointment appointment); 
	
	
	// Get Single Appointment
	public Appointment getSingleAppointment(Long appointmentId);
	
	// Get All Appointment
	public Set<Appointment> getAllAppointment();
	
	
	// Update Appointment 
	public Appointment updateAppointment (Appointment appointment);
	
	
	// Delete Appointment
	public void deleteAppointment (Long appointmentId);
	
	
	// Get Appointment of any Doctor
	public Set<Appointment> getAppointmentOfDoctor(Doctor doctor);
	

}
