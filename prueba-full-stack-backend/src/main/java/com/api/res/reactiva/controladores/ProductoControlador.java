package com.api.res.reactiva.controladores;

import com.api.res.reactiva.entidades.Cliente;
import com.api.res.reactiva.entidades.Producto;
import com.api.res.reactiva.servicios.ClienteServicio;
import com.api.res.reactiva.servicios.ProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/productos") // Mapeo base agregado
public class ProductoControlador {


    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping
    public List<Producto> getAllProductos() {
        return productoServicio.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
        Optional<Producto> cliente = productoServicio.findById(id);
        return cliente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoServicio.save(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoProducto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        productoServicio.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
