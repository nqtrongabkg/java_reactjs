package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenquoctrong.backend.entity.Gallery;
import com.nguyenquoctrong.backend.service.GalleryService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/galleries")
@CrossOrigin(origins = "http://localhost:3000")
public class GalleryController {
    private GalleryService galleryService;

    //Create Gallery rest API
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery gallery){
        Gallery savedGallery = galleryService.createGallery(gallery);
        return new ResponseEntity<>(savedGallery, HttpStatus.CREATED);
    }

    //Get Gallery by id REST API
    //http://localhost:8080/api/galleries/1
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id") Long galleryId){
        Gallery gallery = galleryService.getGalleryById(galleryId);
        return new ResponseEntity<>(gallery, HttpStatus.OK);
    }

    //Get all Gallery REST API
    //http://localhost:8080/api/galleries
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGalleries(){
        List<Gallery> galleries = galleryService.getAllGalleries();
        return new ResponseEntity<>(galleries, HttpStatus.OK);
    }

    //Update Gallery REST API
    //http://localhost:8080/api/galleries/1
    @PutMapping("{id}")
    public ResponseEntity<Gallery> updateGallery(@PathVariable("id") Long galleryId, @RequestBody Gallery gallery){
        gallery.setId(galleryId);
        Gallery updatedGallery = galleryService.updateGallery(gallery);
        return new ResponseEntity<>(updatedGallery, HttpStatus.OK);
    }

    //Delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGallery(@PathVariable("id") Long GalleryId){
        galleryService.deleteGallery(GalleryId);
        return new ResponseEntity<>("Gallery successfully deleted!", HttpStatus.OK);
    }
}
