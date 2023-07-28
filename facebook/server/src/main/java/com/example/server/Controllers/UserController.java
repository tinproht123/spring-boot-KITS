package com.example.server.Controllers;

import com.example.server.Models.Image;
import com.example.server.Models.User;
import com.example.server.RequestObjects.RegisterRequest;
import com.example.server.Services.ImageService;
import com.example.server.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ImageService imageService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody RegisterRequest registerUser){
        Image image = new Image(registerUser.getImagePath());
        User newUser = new User(
                registerUser.getFirstName(),
                registerUser.getLastName(),
                registerUser.getEmail(),
                registerUser.getPhone(),
                registerUser.getPassword(),
                image
        );
        imageService.saveImage(image);
        return userService.registerUser(newUser);
    }
}
