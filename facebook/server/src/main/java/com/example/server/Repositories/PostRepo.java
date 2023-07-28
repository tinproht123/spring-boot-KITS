package com.example.server.Repositories;

import com.example.server.Models.Post;
import com.example.server.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer> {
    List<Post> findAllByUser(User user);
}
