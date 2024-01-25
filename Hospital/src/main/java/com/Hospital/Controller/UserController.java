package com.Hospital.Controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital.Entity.Role;
import com.Hospital.Entity.User;
import com.Hospital.Entity.UserRole;
import com.Hospital.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {


    @Autowired
    private UserService userService;

    //Create user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        Set<UserRole> roles = new HashSet<>();

        Role role = new Role();

        //System.out.println("Get Role "  );

//	        if(role.getRoleName() == "Doctor") {
//	        	role.setRoleid(45L);
//	        	role.setRoleName("Doctor");
//	        } else if(role.getRoleName() == "Admin") {
//	        	role.setRoleid(44L);
//	        	role.setRoleName("Admin");
//	        } else if(role.getRoleName() == "Receptionist") {
//	        	role.setRoleid(46L);
//	        	role.setRoleName("Receptionist");
//	        }

        role.setRoleid(47L);
        role.setRoleName("Patient");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);

        return this.userService.createUser(user, roles);
    }


    //Fetch The data
    @GetMapping("/{username}")
    public User GetUser(@PathVariable("username") String username) {

        return this.userService.GetUser(username);
    }


    // delete the user by its id
    @DeleteMapping("/{userid}")
    public void deleteUser(@PathVariable("userid") Long userid) {
        this.userService.deleteuser(userid);
    }

    // update user
    @PutMapping("/{userid}")
    public User updateuser(@RequestBody User user, @PathVariable("userid") Long userid) {
        this.userService.updateusers(user, userid);
        return user;
    }


}
