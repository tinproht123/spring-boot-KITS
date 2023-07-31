package com.example.springbootarticle.Repositories;

import com.example.springbootarticle.Models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepo extends JpaRepository<Genre, Integer> {
    Genre findByName(String name);
    Boolean existsByName(String name);
}
