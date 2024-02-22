package com.nguyenquoctrong.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;



import com.nguyenquoctrong.backend.entity.Product;
import com.nguyenquoctrong.backend.service.ProductService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class ProductController {
    private ProductService productService;

    // Create product rest API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get product by id REST API
    // http://localhost:8080/api/products/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long productId) {
        Product product = productService.getProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Get all product REST API
    // http://localhost:8080/api/products
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) Long categoryId) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products;
        if (categoryId != null) {
            products = productService.getProductsByCategoryId(categoryId, pageable);

        } else {

            products = productService.getAllProducts(pageable);

        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range",
                "items " + pageable.getOffset() + "-" + (pageable.getOffset() + products.getSize()) +
                        "/" + products.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // Update product REST API
    //UPDATE PRODUCT BY PRODUCT ID
    // http://localhost:8080/api/products/1
    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long productId, @RequestBody Product product) {
        product.setId(productId);
        Product updateProduct = productService.updateProduct(product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    // Delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }
    //GET LATEST PRODUCT
    @GetMapping("/getlatest")
    public ResponseEntity<List<Product>> getProductsNew(
            @RequestParam(name = "categoryid", required = false) Long category,
            @RequestParam(name = "pagesize", required = false, defaultValue = "8") int pagesize) {
        List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
        return ResponseEntity.ok(products);
    }
    //GET NEW PRODUCT
    @GetMapping("/new-products")
    public ResponseEntity<List<Product>> getLatestProducts(
            @RequestParam(name = "pagesize", required = false, defaultValue = "10") int pageSize) {
        List<Product> products = productService.getLatestProducts(pageSize);
        return ResponseEntity.ok(products);
    }
    //GET LOWEST PRICE PRODUCT
    @GetMapping("/lowest-price")
    public ResponseEntity<List<Product>> getLowestPricedProducts(
            @RequestParam(name = "pagesize", required = false, defaultValue = "12") int pageSize) {
        List<Product> products = productService.getLowestPricedProducts(pageSize);
        return ResponseEntity.ok(products);  
    }

}
