package com.api.res.reactiva.servicios;

import com.api.res.reactiva.entidades.Cliente;
import com.api.res.reactiva.entidades.Producto;
import com.api.res.reactiva.reposistorio.ClienteRepositorio;
import com.api.res.reactiva.reposistorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class ProductoServicio {
    @Autowired
    private ProductoRepositorio ProductoRepositorio;

    public List<Producto> findAll() {
        return ProductoRepositorio.findAll();
    }

    public Optional<Producto> findById(Long id) {
        return ProductoRepositorio.findById(id);
    }

    public Producto save(Producto producto) {
        return ProductoRepositorio.save(producto);
    }

    public void deleteById(Long id) {
        ProductoRepositorio.deleteById(id);
    }
}
