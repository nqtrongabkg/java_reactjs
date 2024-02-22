package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenquoctrong.backend.entity.OrderDetail;
import com.nguyenquoctrong.backend.service.OrderDetailService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderDetails")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailController {
    private OrderDetailService orderDetailService;

    // Create OrderDetail rest API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderDetail) {
        OrderDetail savedOrderDetail = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>(savedOrderDetail, HttpStatus.CREATED);
    }

    // Get OrderDetail by id REST API
    // http://localhost:8080/api/OrderDetails/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long orderDetailId) {
        OrderDetail orderDetail = orderDetailService.getOrderDetailById(orderDetailId);
        return new ResponseEntity<>(orderDetail, HttpStatus.OK);
    }

    // Get all OrderDetail REST API
    // http://localhost:8080/api/OrderDetails
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails() {
        List<OrderDetail> orderDetails = orderDetailService.getAllOrderDetails();
        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }

    // Update OrderDetail REST API
    // http://localhost:8080/api/OrderDetails/1
    @PutMapping("{id}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long orderDetailId, @RequestBody OrderDetail orderDetail) {
        orderDetail.setId(orderDetailId);
        OrderDetail updateOrderDetail = orderDetailService.updateOrderDetail(orderDetail);
        return new ResponseEntity<>(updateOrderDetail, HttpStatus.OK);
    }

    // Delete OrderDetail REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long orderDetailId) {
        orderDetailService.deleteOrderDetail(orderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted!", HttpStatus.OK);
    }
}
