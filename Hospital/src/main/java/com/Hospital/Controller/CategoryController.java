package com.Hospital.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital.Entity.New.Category;
import com.Hospital.services.CategoryService;

import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")

public class CategoryController {


    @Autowired
    private CategoryService categoryService;

    // add category
    @PostMapping("/")
    @CrossOrigin("*")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        Category category1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }

    //get Category
    @GetMapping("/{categoryId}")
    @CrossOrigin("*")
    public Category getCategory(@PathVariable("categoryId") Long categoryId) {
        return this.categoryService.getCategory(categoryId);
    }


    // get All Category
    @GetMapping("/")
    @CrossOrigin("*")
    public ResponseEntity<?> getCategories() {
        return ResponseEntity.ok(this.categoryService.getCategory());
    }

    //update Category
    @PutMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public Category updateCategory(@RequestBody Category category) {
        return this.categoryService.updateCategory(category);
    }


    //delete category
    @DeleteMapping("/{categoryId}")
    @CrossOrigin("*")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId) {
        this.categoryService.deleteCategory(categoryId);
    }

}
