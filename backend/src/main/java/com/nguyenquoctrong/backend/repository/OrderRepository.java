package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Order;

public interface OrderRepository extends JpaRepository <Order, Long>{
    
}
