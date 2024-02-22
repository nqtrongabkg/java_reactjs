package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenquoctrong.backend.entity.Category;
import com.nguyenquoctrong.backend.service.CategoryService;
import java.util.List;
import org.springframework.http.HttpHeaders;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class CategoryController {
    private CategoryService categoryService;

    // Create Category rest API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category savedCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // Get category by id REST API
    // http://localhost:8080/api/categories/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId) {
        Category category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    // Get all category REST API
    // http://localhost:8080/api/categories
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + categories.size()+ "/"+categories.size());
        return  ResponseEntity.ok().headers(headers).body(categories);
    }

    // Update category REST API
    // http://localhost:8080/api/categories/1
    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId,
            @RequestBody Category category) {
        category.setId(categoryId);
        Category updatedCategory = categoryService.updateCategory(category);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    // Delete category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long CategoryId) {
        categoryService.deleteCategory(CategoryId);
        return new ResponseEntity<>("Category successfully deleted!", HttpStatus.OK);
    }
}
