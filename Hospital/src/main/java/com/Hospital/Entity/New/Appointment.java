package com.Hospital.Entity.New;



import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.Hospital.Entity.User;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long appointmentId;


	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = ISO.DATE_TIME)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
	private LocalDateTime start;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = ISO.DATE_TIME)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
	private LocalDateTime end;
	private String patientProblem;


	 @ManyToOne(fetch = FetchType.EAGER)
	 private  Doctor doctor;

	 private Long userId;


	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}





	public Appointment(Long appointmentId, LocalDateTime start, LocalDateTime end, String patientProblem,
			Doctor doctor,Long userId) {
		super();
		this.appointmentId = appointmentId;
		this.start = start;
		this.end = end;
		this.patientProblem = patientProblem;
		this.doctor = doctor;
		this.userId = userId;
	}





	public Doctor getDoctor() {
		return doctor;
	}





	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}





	public Long getAppointmentId() {
		return appointmentId;
	}

	public Long getUserId() {
		return userId;
	}


	public void setAppointmentId(Long appointmentId) {
		this.appointmentId = appointmentId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}





	public LocalDateTime getStart() {
		return start;
	}


	public void setStart(LocalDateTime start) {
		this.start = start;
	}


	public LocalDateTime getEnd() {
		return end;
	}


	public void setEnd(LocalDateTime end) {
		this.end = end;
	}




	public String getPatientProblem() {
		return patientProblem;
	}


	public void setPatientProblem(String patientProblem) {
		this.patientProblem = patientProblem;
	}


	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", start=" + start + ", end=" + end + ", patientProblem=" + patientProblem + "]";
	}




}
