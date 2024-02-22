package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.Feedback;

public interface FeedbackService {
    Feedback createFeedback(Feedback feedback);

    Feedback getFeedbackById(Long feedbackId);

    List<Feedback> getAllFeedbacks();

    Feedback updateFeedback(Feedback feedback);

    void deleteFeedback(Long feedbackId);
}
