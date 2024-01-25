package com.Hospital.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hospital.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);

}
