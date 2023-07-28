package com.example.server.Services;

import com.example.server.Models.Image;
import com.example.server.Repositories.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    private ImageRepo imageRepo;

    public ImageService(ImageRepo imageRepo) {
        this.imageRepo = imageRepo;
    }

    public void saveImage(Image image) {
        imageRepo.save(image);
    }
}
