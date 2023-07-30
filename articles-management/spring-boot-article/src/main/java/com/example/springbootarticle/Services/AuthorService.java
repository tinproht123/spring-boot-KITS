package com.example.springbootarticle.Services;

import com.example.springbootarticle.Models.Author;
import com.example.springbootarticle.Repositories.AuthorRepo;
import com.example.springbootarticle.Requests.AuthorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

    public ResponseEntity<List<Author>> getAllAuthors(){
        List<Author> authors = authorRepo.findAll();

        if (!authors.isEmpty()) {
            return ResponseEntity.ok(authors);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    public ResponseEntity<Author> saveAuthor(Author author){
        Author authorCreated = authorRepo.save(author);
        return ResponseEntity.status(HttpStatus.CREATED).body(authorCreated);
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

    public ResponseEntity<Author> updateAuthor(int id, AuthorRequest updateRequest) {
        Optional<Author> authorOptional = authorRepo.findById(id);
        if(authorOptional.isPresent()){
            Author author = authorOptional.get();
            if(updateRequest.getName() != null){
                author.setName(updateRequest.getName());
            }if(updateRequest.getImagePath() != null){
                author.setImagePath(updateRequest.getImagePath());
            }
            authorRepo.save(author);
            return ResponseEntity.ok(author);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Void> deleteAuthor(int id) {
        Optional<Author> optionalUser = authorRepo.findById(id);

        if (optionalUser.isPresent()) {
            authorRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
