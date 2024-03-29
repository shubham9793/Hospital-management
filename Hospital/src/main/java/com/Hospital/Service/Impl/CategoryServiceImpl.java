package com.Hospital.Service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Entity.New.Category;
import com.Hospital.Repository.CategoryRepository;
import com.Hospital.services.CategoryService;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepository.save(category);

    }

    @Override
    public Set<Category> getCategory() {
        return new LinkedHashSet<>(this.categoryRepository.findAll());
    }

    @Override
    public Category getCategory(Long categoryId) {
        return this.categoryRepository.findById(categoryId).get();
    }


    @Override
    public void deleteCategory(Long categoryId) {

        Category category = new Category();
        category.setCid(categoryId);
        this.categoryRepository.delete(category);

    }
}
