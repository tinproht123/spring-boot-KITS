package com.example.springbootarticle.Services;

import com.example.springbootarticle.Models.User;
import com.example.springbootarticle.Repositories.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private HttpServletRequest request;

    public ResponseEntity<?> register(User user){
        User foundUser = userRepo.findByEmail(user.getEmail());
        if(foundUser == null){
            User newUser =  userRepo.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        }else{
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already existed!");
        }
    }

    public ResponseEntity<?> login(String email, String password){
        User user = userRepo.findByEmail(email);
        if(user == null || (password.equals(user.getPassword()))){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password!");
        }

        request.getSession().setAttribute("user", user);
        return ResponseEntity.ok().body(user);
    }

    public void logout(){
        request.getSession().invalidate();
    }
}
