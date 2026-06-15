function registroproducto(producto) {
  const { id_categoria, nombre_producto, descripcion, precio_venta, stock } =
    producto;

  // campos obligatorios
  if (
    !id_categoria ||
    !nombre_producto ||
    !precio_venta ||
    stock === undefined ||
    stock === null
  ) {
    return { valido: false, mensaje: "Campos requeridos" };
  }

  // validar que el nombre solo tenga letras y espacios
  const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
  if (!regexNombre.test(nombre_producto)) {
    return {
      valido: false,
      mensaje: "El nombre del producto solo puede contener letras y espacios",
    };
  }

  // precio positivo
  if (isNaN(precio_venta) || Number(precio_venta) <= 0) {
    return {
      valido: false,
      mensaje: "El precio de venta debe ser un número positivo",
    };
  }

  // stock positivo
  if (isNaN(stock) || Number(stock) < 0) {
    return {
      valido: false,
      mensaje: "El stock debe ser un número positivo o cero",
    };
  }

  // descripción opcional: longitud máxima
  if (descripcion && descripcion.length > 255) {
    return {
      valido: false,
      mensaje: "La descripción no puede exceder 255 caracteres",
    };
  }

  // descripción opcional (solo valida si existe)
  if (descripcion && !regexNombre.test(descripcion)) {
    return {
      valido: false,
      mensaje: "La descripción solo puede contener letras y espacios",
    };
  }

  return { valido: true };
}

module.exports = registroproducto;
