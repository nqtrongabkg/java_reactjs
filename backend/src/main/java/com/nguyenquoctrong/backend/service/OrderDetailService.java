package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.OrderDetail;

public interface OrderDetailService {
    OrderDetail createOrderDetail(OrderDetail orderDetail);

    OrderDetail getOrderDetailById(Long orderDetailId);

    List<OrderDetail> getAllOrderDetails();

    OrderDetail updateOrderDetail(OrderDetail orderDetail);

    void deleteOrderDetail(Long orderDetailId);
}
