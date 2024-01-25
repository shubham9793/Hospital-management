package com.Hospital.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hospital.Entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
