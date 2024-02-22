package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.Order;

public interface OrderService {
    Order createOrder(Order order);

    Order getOrderById(Long orderId);

    List<Order> getAllOrders();

    Order updateOrder(Order order);

    void deleteOrder(Long orderId);
}
