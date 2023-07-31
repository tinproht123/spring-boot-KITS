package com.example.springbootarticle.Services;

import com.example.springbootarticle.Models.Genre;
import com.example.springbootarticle.Repositories.GenreRepo;
import com.example.springbootarticle.Requests.GenreRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GenreService {
    @Autowired
    private GenreRepo genreRepo;

    public ResponseEntity<List<Genre>> getAllGenres(){
        return ResponseEntity.ok().body(genreRepo.findAll());
    }

    public ResponseEntity<?> createGenre(GenreRequest request) {
        boolean isExists = genreRepo.existsByName(request.getName());
        if(isExists){
            return ResponseEntity.badRequest().body("Genre exists!");
        }

        Genre genre = new Genre(request.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(genre);
    }
}
