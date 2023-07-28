package com.example.springbootarticle.Controllers;

import com.example.springbootarticle.Models.Author;
import com.example.springbootarticle.Requests.AuthorRequest;
import com.example.springbootarticle.Services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/authors")
public class AuthorController {
    @Autowired
    private AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public List<Author> getAllAuthors(){
        return authorService.getAllAuthors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthor(@PathVariable int id){
        return authorService.getAuthor(id);
    }

    @PostMapping
    public Author saveAuthor(@RequestBody AuthorRequest authorRequest){
        Author author = new Author(
                authorRequest.getName(),
                authorRequest.getImagePath()
        );
        return authorService.saveAuthor(author);
    }


    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable int id){
        authorService.deleteAuthor(id);
    }
}
