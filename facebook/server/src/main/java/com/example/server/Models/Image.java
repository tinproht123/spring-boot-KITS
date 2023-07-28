package com.example.server.Models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "tb_image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "img_id")
    private int id;

    @Column(name = "img_path", columnDefinition = "VARCHAR(255) DEFAULT '/imgs/blank-profile-picture.png'")
    private String path;

    @OneToOne(mappedBy = "image")
    private User user;

    @OneToOne(mappedBy = "image")
    private Post post;

    public Image(String imagePath) {
        this.path = imagePath;
    }
}
