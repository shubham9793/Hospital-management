package com.Hospital.services;

import java.util.List;
import java.util.Set;

import com.Hospital.Entity.New.Category;
import com.Hospital.Entity.New.Doctor;
import org.springframework.http.ResponseEntity;

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


	public List<Doctor> getDoctorsOfCategory(Category category);
}
