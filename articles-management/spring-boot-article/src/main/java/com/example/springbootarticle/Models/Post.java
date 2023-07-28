package com.example.springbootarticle.Models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "tb_post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Integer id;

    @Column(name = "post_title", nullable = false, length = 200)
    private String title;

    @Column(name = "post_song_name", nullable = true, length = 100)
    private String songName;

    @Column(name = "post_summary", nullable = false, columnDefinition = "TEXT")
    private String summary;

    @Column(name = "post_content", columnDefinition = "TEXT")
    private String content;

    @CreationTimestamp
    @Column(name = "post_created_at", nullable = false, updatable = false)
    private Date createdAt;

    @Column(name = "post_image", length = 200)
    private String imagePath;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "aut_id", referencedColumnName = "aut_id")
    private Author author;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "gen_id", referencedColumnName = "gen_id")
    private Genre genre;
}

