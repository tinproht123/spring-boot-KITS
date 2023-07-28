package com.example.server.Controllers;

import com.example.server.Models.Image;
import com.example.server.Models.Post;
import com.example.server.Models.User;
import com.example.server.RequestObjects.PostRequest;
import com.example.server.Services.PostService;
import com.example.server.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts")
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private UserService userService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/")

    @PostMapping
    public Post createPost(@RequestBody PostRequest postRequest){
        Image image = new Image(postRequest.getImagePath());
        User user = userService.findUserById(postRequest.getUserId());
        Post newPost = new Post(
                user,
                image,
                postRequest.getBody()
        );

        return postService.createPost(newPost);
    }
}
