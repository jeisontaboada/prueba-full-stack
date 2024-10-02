package com.api.res.reactiva.entidades;


import jakarta.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "pedidos")
public class Pedido {

        @Id
        private String id;
        private Cliente cliente;
        private List<Producto> productos;
        private Double total;

        // Constructor vacío
        public Pedido() {
        }

        // Constructor con parámetros
        public Pedido(Cliente cliente, List<Producto> productos, Double total) {
            this.cliente = cliente;
            this.productos = productos;
            this.total = total;
        }

        // Getters y Setters
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public Cliente getCliente() {
            return cliente;
        }

        public void setCliente(Cliente cliente) {
            this.cliente = cliente;
        }

        public List<Producto> getProductos() {
            return productos;
        }

        public void setProductos(List<Producto> productos) {
            this.productos = productos;
        }

        public Double getTotal() {
            return total;
        }

        public void setTotal(Double total) {
            this.total = total;
        }
}