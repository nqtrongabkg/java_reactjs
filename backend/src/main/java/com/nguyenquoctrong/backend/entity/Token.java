package com.nguyenquoctrong.backend.entity;

import java.util.Date;


import org.hibernate.annotations.UpdateTimestamp;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tokens")

public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
	@UpdateTimestamp
    private Date created_at;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}