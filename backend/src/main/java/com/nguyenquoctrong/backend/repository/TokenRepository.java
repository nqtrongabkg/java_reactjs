package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Token;

public interface TokenRepository extends JpaRepository <Token, Long>{
    
}
