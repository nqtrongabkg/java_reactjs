package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenquoctrong.backend.entity.Order;
import com.nguyenquoctrong.backend.service.OrderService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    private OrderService orderService;

    // Create Order rest API
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.createOrder(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // Get Order by id REST API
    // http://localhost:8080/api/Orders/1
    @GetMapping("{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long orderId) {
        Order order = orderService.getOrderById(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    // Get all Order REST API
    // http://localhost:8080/api/Orders
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    // Update Order REST API
    // http://localhost:8080/api/Orders/1
    @PutMapping("{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Long orderId, @RequestBody Order order) {
        order.setId(orderId);
        Order updateOrder = orderService.updateOrder(order);
        return new ResponseEntity<>(updateOrder, HttpStatus.OK);
    }

    // Delete Order REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long orderId) {
        orderService.deleteOrder(orderId);
        return new ResponseEntity<>("Order successfully deleted!", HttpStatus.OK);
    }
}
