package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.Order;
import com.nguyenquoctrong.backend.service.OrderService;
import com.nguyenquoctrong.backend.repository.OrderRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Long orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.get();
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order updateOrder(Order order) {
        Order existingOrder = orderRepository.findById(order.getId()).get();
        existingOrder.setAddress(order.getAddress());
        existingOrder.setEmail(order.getEmail());
        existingOrder.setFullname(order.getFullname());
        existingOrder.setNote(order.getNote());
        existingOrder.setPhone_number(order.getPhone_number());
        existingOrder.setStatus(order.getStatus());
        existingOrder.setTotal_money(order.getTotal_money());
        Order updatedOrder = orderRepository.save(existingOrder);
        return updatedOrder;
    }

    @Override
    
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
