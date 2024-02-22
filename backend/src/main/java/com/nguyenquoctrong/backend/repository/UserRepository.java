package com.nguyenquoctrong.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenquoctrong.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
