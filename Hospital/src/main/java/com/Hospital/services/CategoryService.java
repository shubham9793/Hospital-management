package com.Hospital.services;



import java.util.Set;

import com.Hospital.Entity.New.Category;

public interface CategoryService {
	
    public Category addCategory(Category  category);
    
    public Category updateCategory(Category category);
    
    public Set<Category>  getCategory();
    
    public Category getCategory(Long categoryId);
    
    public void deleteCategory(Long categoryId);
}
