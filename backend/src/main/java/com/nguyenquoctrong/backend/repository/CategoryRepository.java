package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Category;

public interface CategoryRepository extends JpaRepository <Category, Long>{
    
}
