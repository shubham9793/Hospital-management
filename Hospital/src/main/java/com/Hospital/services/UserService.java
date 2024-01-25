package com.Hospital.services;

import java.util.Set;

import com.Hospital.Entity.User;
import com.Hospital.Entity.UserRole;

public interface UserService {

	  User createUser(User user, Set<UserRole> userRoles) throws Exception;

	    //get user by username
	    User GetUser(String username);

	    //get delete user by id
	    void deleteuser(Long userid);

	    //update the user
	    User updateusers(User user, Long userid);
}
