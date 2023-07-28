package com.example.server.Services;

import com.example.server.Models.User;
import com.example.server.Repositories.UserRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User registerUser(User user){
        return userRepo.save(user);
    }

    public User findUserById(int id){
        return userRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
    }
}
