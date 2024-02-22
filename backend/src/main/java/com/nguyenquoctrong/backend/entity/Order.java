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
@Table(name = "Orders")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String fullname;
    @Column(nullable = false)
    private String note;
    @Column
	@UpdateTimestamp
    private Date order_date;
    @Column(nullable = false)
    private String phone_number;
    @Column(nullable = false)
    private Integer status;
    @Column(nullable = false)
    private Integer total_money;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
