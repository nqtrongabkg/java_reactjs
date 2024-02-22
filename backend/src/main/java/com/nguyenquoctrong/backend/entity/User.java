package com.nguyenquoctrong.backend.entity;

import java.util.Date;
import java.util.List;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "Users")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
	@UpdateTimestamp
    private Date created_at;
    @Column(nullable = true)
    private Integer deleted;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String fullname;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String phone_number;
    @Column()
    @UpdateTimestamp
    private Date updated_at;
    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}