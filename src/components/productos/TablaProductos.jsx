import React, { useState, useEffect } from "react";
import { Table, Spinner, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const TablaProductos = ({ productos, categorias, abrirModalEdicion, abrirModalEliminacion, generarQRImagen }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!(productos && productos.length > 0));
  }, [productos]);

  const obtenerNombreCategoria = (categoriaId) => {
    return categorias.find((cat) => cat.id_categoria === categoriaId)?.nombre_categoria || "Sin categoría";
  };

  return loading ? (
    <div className="text-center my-5">
      <h4>Cargando productos ...</h4>
      <Spinner animation="border" variant="success" role="status" />
    </div>
  ) : (
    <Table striped borderless hover responsive size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th className="d-none d-md-table-cell">Descripción</th>
          <th>Precio</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id_producto}>
            <td>{producto.id_producto}</td>
            <td>{producto.nombre_producto}</td>
            <td>{obtenerNombreCategoria(producto.categoria_producto)}</td>
            <td className="d-none d-md-table-cell">{producto.descripcion_producto || "-"}</td>
            <td>S/ {producto.precio_venta?.toFixed(2)}</td>
            <td className="text-center">
              <Button
                variant="outline-warning"
                size="sm"
                className="m-1"
                onClick={() => abrirModalEdicion(producto)}
              >
                <i className="bi bi-pencil"></i>
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => abrirModalEliminacion(producto)}
              >
                <i className="bi bi-trash"></i>
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="m-1"
                onClick={() => generarQRImagen(producto)}
                title="Generar código QR de la imagen"
              >
                <i className="bi bi-qr-code"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaProductos;