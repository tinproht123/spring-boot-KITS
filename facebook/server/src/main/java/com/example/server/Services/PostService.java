package com.example.server.Services;

import com.example.server.Models.Post;
import com.example.server.Models.User;
import com.example.server.Repositories.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepo postRepo;

    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public List<Post> getUserPost(User user){
        return postRepo.findAllByUser(user);
    }

    public Post createPost(Post post){
        return postRepo.save(post);
    }
}
