package com.example.server.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "tb_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    @Column(name = "user_fname", nullable = false, length = 50)
    private String firstName;

    @Column(name = "user_lname", nullable = false, length = 50)
    private String lastName;

    @Column(name = "user_email", unique = true, length = 100)
    private String email;

    @Column(name = "user_password", length = 20)
    private String password;

    @Column(name = "user_phone", unique = true, length = 20)
    private String phone;

    @CreationTimestamp
    @Column(name = "user_created_at", nullable = false, updatable = false)
    private Date createdAt;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "img_id", referencedColumnName = "img_id")
    private Image image;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private Set<Post> posts = new HashSet<>();

    public User(String firstName, String lastName, String email, String phone, String password, Image image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.image = image;
    }
}
