package com.Hospital.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hospital.Entity.New.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
