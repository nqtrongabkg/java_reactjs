package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.Feedback;
import com.nguyenquoctrong.backend.service.FeedbackService;
import com.nguyenquoctrong.backend.repository.FeedbackRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class FeedbackServiceImpl implements FeedbackService {
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Feedback getFeedbackById(Long feedbackId) {
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(feedbackId);
        return optionalFeedback.get();
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback updateFeedback(Feedback feedback) {
        Feedback existingFeedback = feedbackRepository.findById(feedback.getId()).get();
        existingFeedback.setEmail(feedback.getEmail());
        existingFeedback.setFirstname(feedback.getFirstname());
        existingFeedback.setLastname(feedback.getLastname());
        existingFeedback.setNote(feedback.getNote());
        existingFeedback.setPhone_number(feedback.getPhone_number());
        existingFeedback.setStatus(feedback.getStatus());
        existingFeedback.setSubject_name(feedback.getSubject_name());
        existingFeedback.setUpdated_at(feedback.getUpdated_at());
        Feedback updatedFeedback = feedbackRepository.save(existingFeedback);
        return updatedFeedback;
    }

    @Override
    
    public void deleteFeedback(Long feedbackId) {
        feedbackRepository.deleteById(feedbackId);
    }
}