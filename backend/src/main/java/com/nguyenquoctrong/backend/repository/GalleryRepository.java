package com.nguyenquoctrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenquoctrong.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository <Gallery, Long>{
    
}
