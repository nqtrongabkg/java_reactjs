package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository <OrderDetail, Long>{
    
}
