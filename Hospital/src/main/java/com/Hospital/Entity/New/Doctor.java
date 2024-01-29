package com.Hospital.Entity.New;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long doctorId;
	
	private String doctorFirstName;
	private String doctorLastName;
	private String titel;
	private String fee;
	private String numberOfAppointment;
	private String specialist;
	
	
	 @ManyToOne(fetch = FetchType.EAGER)
	 private  Category category;
	
	
	 @OneToMany(mappedBy = "doctor",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	 @JsonIgnore
	 private Set<Appointment> appointment = new HashSet<>();


	
	
	
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Set<Appointment> getAppointment() {
		return appointment;
	}
	public void setAppointment(Set<Appointment> appointment) {
		this.appointment = appointment;
	}
	
	
	
	
	
	
	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Doctor(Long doctorId, String doctorFirstName, String doctorLastName, String titel, String fee,
			String numberOfAppointment, String specialist) {
		super();
		this.doctorId = doctorId;
		this.doctorFirstName = doctorFirstName;
		this.doctorLastName = doctorLastName;
		this.titel = titel;
		this.fee = fee;
		this.numberOfAppointment = numberOfAppointment;
		this.specialist = specialist;
	}
	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", doctorFirstName=" + doctorFirstName + ", doctorLastName="
				+ doctorLastName + ", titel=" + titel + ", fee=" + fee + ", numberOfAppointment=" + numberOfAppointment
				+ ", specialist=" + specialist + "]";
	}
	public Long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}
	public String getDoctorFirstName() {
		return doctorFirstName;
	}
	public void setDoctorFirstName(String doctorFirstName) {
		this.doctorFirstName = doctorFirstName;
	}
	public String getDoctorLastName() {
		return doctorLastName;
	}
	public void setDoctorLastName(String doctorLastName) {
		this.doctorLastName = doctorLastName;
	}
	public String getTitel() {
		return titel;
	}
	public void setTitel(String titel) {
		this.titel = titel;
	}
	public String getFee() {
		return fee;
	}
	public void setFee(String fee) {
		this.fee = fee;
	}
	public String getNumberOfAppointment() {
		return numberOfAppointment;
	}
	public void setNumberOfAppointment(String numberOfAppointment) {
		this.numberOfAppointment = numberOfAppointment;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}
	
	
	
	
}
