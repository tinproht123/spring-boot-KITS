package com.example.springbootarticle.Controllers;

import com.example.springbootarticle.Models.User;
import com.example.springbootarticle.Requests.LoginRequest;
import com.example.springbootarticle.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthController {
    @Autowired
    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        return userService.login(request.getEmail(), request.getPassword());
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user ){
        return userService.register(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(){
        userService.logout();
        return ResponseEntity.ok().build();
    }
}
