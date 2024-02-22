package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.OrderDetail;
import com.nguyenquoctrong.backend.service.OrderDetailService;
import com.nguyenquoctrong.backend.repository.OrderDetailRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class OrderDetailServiceImpl implements OrderDetailService {
    private OrderDetailRepository orderDetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderDetailId) {
        Optional<OrderDetail> optionalOrderDetail = orderDetailRepository.findById(orderDetailId);
        return optionalOrderDetail.get();
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderDetail) {
        OrderDetail existingOrderDetail = orderDetailRepository.findById(orderDetail.getId()).get();
        existingOrderDetail.setNum(orderDetail.getNum());
        existingOrderDetail.setPrice(orderDetail.getPrice());
        existingOrderDetail.setTotal_money(orderDetail.getTotal_money());
        existingOrderDetail.setOrder(orderDetail.getOrder());
        existingOrderDetail.setProduct(orderDetail.getProduct());
        OrderDetail updatedOrderDetail = orderDetailRepository.save(existingOrderDetail);
        return updatedOrderDetail;
    }

    @Override
    
    public void deleteOrderDetail(Long orderDetailId) {
        orderDetailRepository.deleteById(orderDetailId);
    }
}
