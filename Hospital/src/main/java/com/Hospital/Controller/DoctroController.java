package com.Hospital.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital.Entity.New.Doctor;
import com.Hospital.services.DoctorService;

@RequestMapping("/doctor")
@RestController
@CrossOrigin("*")
public class DoctroController {

    @Autowired
    private DoctorService doctorService;


    // Add Doctor
    @PostMapping("/")
    @CrossOrigin("*")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(this.doctorService.addDoctor(doctor));
    }


    // Get All Doctor
    @GetMapping("/")
    @CrossOrigin("*")
    public ResponseEntity<?> getALlDoctors() {
        return ResponseEntity.ok(this.doctorService.getAllDoctors());
    }


    //Get Single Doctor
    @GetMapping("/{doctorId}")
    @CrossOrigin("*")
    public ResponseEntity<?> getdoctor(@PathVariable("doctorId") Long doctorId) {
        return ResponseEntity.ok(this.doctorService.getDoctor(doctorId));
    }


    // Update Doctor
    @PutMapping("/")
    @CrossOrigin("*")
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(this.doctorService.addDoctor(doctor));
    }


    // delete Doctor
    @DeleteMapping("/{doctorId}")
    @CrossOrigin("*")
    public void deleteDoctor(@PathVariable Long doctorId) {
        this.doctorService.deleteDoctor(doctorId);
    }
}
