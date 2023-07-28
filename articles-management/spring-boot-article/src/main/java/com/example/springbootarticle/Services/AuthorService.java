package com.example.springbootarticle.Services;

import com.example.springbootarticle.Models.Author;
import com.example.springbootarticle.Repositories.AuthorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepo authorRepo;

    public AuthorService(AuthorRepo authorRepo) {
        this.authorRepo = authorRepo;
    }

    public List<Author> getAllAuthors(){
        return authorRepo.findAll();
    }

    public Author saveAuthor(Author author){
        return authorRepo.save(author);
    }


    public ResponseEntity<Author> getAuthor(int id) {
        Optional<Author> authorOptional = authorRepo.findById(id);
        if(authorOptional.isPresent()){
            Author author = authorOptional.get();
            return ResponseEntity.ok(author);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    public void deleteAuthor(int id) {
        authorRepo.deleteById(id);
    }
}
