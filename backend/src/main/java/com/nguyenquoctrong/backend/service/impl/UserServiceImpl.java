package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;


import org.springframework.stereotype.Service;


import com.nguyenquoctrong.backend.entity.User;
import com.nguyenquoctrong.backend.service.UserService;



import com.nguyenquoctrong.backend.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setAddress(user.getAddress());
        existingUser.setDeleted(user.getDeleted());
        existingUser.setEmail(user.getEmail());
        existingUser.setFullname(user.getFullname());
        existingUser.setPassword(user.getPassword());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setUpdated_at(user.getUpdated_at());
        User updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
