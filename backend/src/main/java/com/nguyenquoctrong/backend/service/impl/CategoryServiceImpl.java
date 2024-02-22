package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.Category;
import com.nguyenquoctrong.backend.service.CategoryService;
import com.nguyenquoctrong.backend.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class CategoryServiceImpl implements CategoryService {
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.get();
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(Category category) {
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setName(category.getName());
        existingCategory.setSlug(category.getSlug());
        existingCategory.setIsHome(category.getIsHome());
        existingCategory.setDescription(category.getDescription());
        existingCategory.setThumbnail(category.getThumbnail());
        existingCategory.setIsPopular(category.getIsPopular());
        Category updatedCategory = categoryRepository.save(existingCategory);
        return updatedCategory;
    }

    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
