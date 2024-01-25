package com.Hospital.Service.Impl;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Hospital.Entity.User;
import com.Hospital.Entity.UserRole;
import com.Hospital.Repository.RoleRepository;
import com.Hospital.Repository.UserRepository;
import com.Hospital.services.UserService;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {

        User local = this.userRepository.findByUsername(user.getUsername());
        if (local != null) {
            System.out.println("User is Already there");
            throw new Exception("User is Already present");
        } else {
            for (UserRole ur : userRoles) {
                roleRepository.save(ur.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);
        }
        return local;
    }


    @Override
    public User GetUser(String username) {
        return this.userRepository.findByUsername(username);

    }

    @Override
    public void deleteuser(Long userid) {
        this.userRepository.deleteById(userid);

    }

    @Override
    public User updateusers(User user, Long userid) {
        Optional<User> userOptional = userRepository.findById(userid);
        if (userOptional.isPresent()) {
            System.out.println("User is not present !");
        }
        user.setId(userid);
        userRepository.save(user);
        return user;
    }

}
