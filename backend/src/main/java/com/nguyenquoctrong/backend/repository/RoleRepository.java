package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Role;

public interface RoleRepository extends JpaRepository <Role, Long>{
    
}
