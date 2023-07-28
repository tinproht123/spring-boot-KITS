package com.example.springbootarticle.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "tb_author")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "aut_id")
    private Integer id;

    @Column(name = "aut_name", nullable = false, length = 100)
    private String name;

    @Column(name = "aut_image_path", nullable = false, columnDefinition = "VARCHAR(100) DEFAULT '/imgs/blank-profile-picture.png'")
    private String imagePath;

    @OneToMany(mappedBy = "author")
    private Set<Post> posts = new HashSet<>();

    public Author(String name, String imagePath) {
        this.name = name;
        this.imagePath = imagePath;
    }
}
