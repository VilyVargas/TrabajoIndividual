import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalEdicionCategoria = ({ mostrarModalEdicion, setMostrarModalEdicion, categoriaEditar, manejoCanbloInputEdicion, actualizarCategoria }) => {
  const [deshabilitado, setDeshabilitado] = useState(false);
  const handleActualizar = async () => {
    if (deshabilitado) return;
    setDeshabilitado(true);
    await actualizarCategoria();
    setDeshabilitado(false);
  };
  return (
    // código del componente ModalEdictonCategoria
    <Modal show={mostrarModalEdicion} onHide={() => setMostrarModalEdicion(false)} backdrop="static" keyboard={false} centered>
  <Modal.Header closeButton>
    <Modal.Title>Editar Categoria</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group className="mb-3">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" name="nombre_categoria" value={categoriaEditar.nombre_categoria} onChange={manejoCanbloInputEdicion} placeholder="Ingresa el nombre" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Descripción</Form.Label>
      <Form.Control as="textarea" rows={3} name="descripcion_categoria" value={categoriaEditar.descripcion_categoria} onChange={manejoCanbloInputEdicion} placeholder="Ingresa la descripción" />
    </Form.Group>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setMostrarModalEdicion(false)}>
      Cancelar
    </Button>
    <Button variant="primary" disabled={categoriaEditar.nombre_categoria.trim() === "" || deshabilitado}>
      Actualizar
    </Button>
  </Modal.Footer>
</Modal>

  );
}

export default ModalEdicionCategoria;