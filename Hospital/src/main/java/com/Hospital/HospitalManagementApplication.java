package com.Hospital;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Hospital.Entity.Role;
import com.Hospital.Entity.User;
import com.Hospital.Entity.UserRole;
import com.Hospital.services.UserService;

@SpringBootApplication
public class HospitalManagementApplication implements CommandLineRunner {

    @Autowired
    UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(HospitalManagementApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        // TODO Auto-generated method stub
        System.out.println("Starting code....");


//		User user = new User();
//
//		user.setEmail("doctor@gmail.com");
//		user.setUsername("Doctor");
//		user.setPassword("Sahu9876@");
//
//		user.setFirstname("Doctor Varsha");
//		user.setLastname("Singh");
//
//		user.setPhone("12345678");
//
//		Role role1 = new Role();
//		role1.setRoleid(45L);
//		role1.setRoleName("Doctor");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());


    }

}
