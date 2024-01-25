package com.Hospital.services;

import java.util.Set;

import com.Hospital.Entity.New.Doctor;

public interface DoctorService {
	
	// Add Doctor
	public Doctor addDoctor(Doctor doctor );
	
	//Get All Doctor
	public Set<Doctor> getAllDoctors();
	
	// Get Single Doctor
	public Doctor getDoctor(Long doctorId);
	
	
	// Update Doctor
	public Doctor updateDoctor(Doctor doctor);
	
	
	// Delete Doctor
	public void deleteDoctor(Long doctorId);
	
	

}
