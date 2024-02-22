package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenquoctrong.backend.entity.Feedback;
import com.nguyenquoctrong.backend.service.FeedbackService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/feedbacks")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {
    private FeedbackService feedbackService;

    //Create Feedback rest API
    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
        Feedback savedFeedback = feedbackService.createFeedback(feedback);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    //Get Feedback by id REST API
    //http://localhost:8080/api/feedbacks/1
    @GetMapping("{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") Long feedbackId){
        Feedback feedback = feedbackService.getFeedbackById(feedbackId);
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }

    //Get all Feedback REST API
    //http://localhost:8080/api/feedbacks
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks(){
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    //Update Feedback REST API
    //http://localhost:8080/api/feedbacks/1
    @PutMapping("{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable("id") Long feedbackId, @RequestBody Feedback feedback){
        feedback.setId(feedbackId);
        Feedback updateFeedback = feedbackService.updateFeedback(feedback);
        return new ResponseEntity<>(updateFeedback, HttpStatus.OK);
    }

    //Delete Feedback REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable("id") Long feedbackId){
        feedbackService.deleteFeedback(feedbackId);
        return new ResponseEntity<>("Feedback successfully deleted!", HttpStatus.OK);
    }
}
