const App = () => { return (
  <Router>
    <Encabezado />
    <main className="margen-superior-main">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RutaProtegida><Inicio /></RutaProtegida>} />
        <Route path="/categorias" element={<RutaProtegida><Categorias /></RutaProtegida>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/productos" element={<RutaProtegida><Productos /></RutaProtegida>} />
        <Route path="**" element={<Pagina484 />} />
      </Routes>
    </main>
  </Router>
);
}

export default App;
