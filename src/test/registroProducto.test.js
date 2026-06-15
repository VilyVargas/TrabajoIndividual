const registroproducto = require("./registroProducto");

describe("validación de producto", () => {
  it("no permite guardar un producto con campos vacíos", () => {
    const producto = {
      nombre_producto: "",
      id_categoria: "",
      precio_venta: "",
      stock: "",
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("Campos requeridos");
  });

  it("debe rechazar precio negativo", () => {
    const producto = {
      nombre_producto: "Martillo",
      id_categoria: "1",
      precio_venta: -10,
      stock: 5,
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("precio");
  });

  it("no permite stock menor que cero", () => {
    const producto = {
      nombre_producto: "Martillo",
      id_categoria: "1",
      precio_venta: 10,
      stock: -5,
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("stock");
  });

  it("no permite descripción muy larga", () => {
    const producto = {
      nombre_producto: "Martillo",
      id_categoria: "1",
      precio_venta: 10,
      stock: 5,
      descripcion: "a".repeat(300),
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("descripción");
  });

  it("agrega el producto correctamente", () => {
    const producto = {
      nombre_producto: "Martillo",
      id_categoria: "1",
      precio_venta: 10,
      stock: 5,
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(true);
  });
});
