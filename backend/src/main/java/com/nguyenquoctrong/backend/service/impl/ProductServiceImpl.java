package com.nguyenquoctrong.backend.service.impl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.Product;
import com.nguyenquoctrong.backend.service.ProductService;
import com.nguyenquoctrong.backend.repository.ProductRepository;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Service
@AllArgsConstructor

public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public List<Product> getProductsByCondition(String title, Long category) {
        if (title != null && category != null) {
            return productRepository.findByTitleAndCategoryId(title, category);
        } else if (title != null) {
            return productRepository.findByTitle(title);
        } else if (category != null) {
            return productRepository.findByCategoryId(category);
        } else {
            return new ArrayList<>();// danh sách trống
        }
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable  ) {
        return productRepository.findAll(pageable);
    }

    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatestProductsInCategory(categoryId, pageRequest);
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setDeleted(product.getDeleted());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setThumbnail(product.getThumbnail());
        existingProduct.setTitle(product.getTitle());
        existingProduct.setUpdated_at(product.getUpdated_at());
        existingProduct.setCategory(product.getCategory());
        Product updatedProduct = productRepository.save(existingProduct);
        return updatedProduct;
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable) {
        return productRepository.findProductsByCategoryId(categoryId, pageable);
    }

    @Override
    public List<Product> getLatestProducts(int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findAll(pageRequest).getContent();
    }

    @Override
    public List<Product> getLowestPricedProducts(int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.ASC, "price"));
        return productRepository.findAll(pageRequest).getContent();
    }

}
