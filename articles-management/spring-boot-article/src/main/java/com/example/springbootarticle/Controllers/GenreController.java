package com.example.springbootarticle.Controllers;

import com.example.springbootarticle.Models.Genre;
import com.example.springbootarticle.Requests.GenreRequest;
import com.example.springbootarticle.Services.GenreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/genres")
@AllArgsConstructor
public class GenreController {

    @Autowired
    private GenreService genreService;

    @GetMapping
    public ResponseEntity<List<Genre>> getAllGenres(){
        return genreService.getAllGenres();
    }

    @PostMapping
    public ResponseEntity<?> createGenre(@RequestBody GenreRequest request){
        return genreService.createGenre(request);
    }
}
