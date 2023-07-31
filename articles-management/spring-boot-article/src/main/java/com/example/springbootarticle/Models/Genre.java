package com.example.springbootarticle.Models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SecondaryRow;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "tb_genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gen_id")
    private Integer id;

    @Column(name = "gen_name", nullable = false, length = 50)
    private String name;

    @OneToMany(mappedBy = "genre")
    private Set<Post> posts = new HashSet<>();

    public Genre(String name) {
        this.name = name;
    }
}
