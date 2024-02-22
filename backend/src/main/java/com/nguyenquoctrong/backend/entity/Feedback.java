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
@Table(name = "Feedbacks")

public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
	@UpdateTimestamp
    private Date created_at;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String firstname;
    @Column(nullable = false)
    private String lastname;
    @Column(nullable = false)
    private String note;
    @Column(nullable = false)
    private String phone_number;
    @Column(nullable = false)
    private Integer status;
    @Column(nullable = false)
    private String subject_name;
    @Column()
	@UpdateTimestamp
    private Date updated_at; 

}
