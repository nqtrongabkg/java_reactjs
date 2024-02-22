package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Feedback;

public interface FeedbackRepository extends JpaRepository <Feedback, Long>{
    
}
