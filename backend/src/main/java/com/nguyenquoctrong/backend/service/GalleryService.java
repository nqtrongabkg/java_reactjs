package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.Gallery;

public interface GalleryService {
    Gallery createGallery(Gallery gallery);

    Gallery getGalleryById(Long galleryId);

    List<Gallery> getAllGalleries();

    Gallery updateGallery(Gallery gallery);

    void deleteGallery(Long galleryId);
}
