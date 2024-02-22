package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.Category;

public interface CategoryService {
    Category createCategory(Category category);

    Category getCategoryById(Long categoryId);

    // From Get all category REST API
    List<Category> getAllCategories();

    // From Update category REST API
    Category updateCategory(Category category);

    // From Delete category REST API
    void deleteCategory(Long categoryId);
}
