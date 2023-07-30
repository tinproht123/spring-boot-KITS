package com.example.springbootarticle.Models;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(name = "user_fname", length = 100, nullable = false)
    private String firstName;

    @Column(name = "user_lname", length = 100, nullable = false)
    private String lastName;

    @Column(name = "user_email", length = 100, nullable = false, unique = true)
    private String email;

    @Column(name = "user_password", length = 50, nullable = false)
    private String password;

}
