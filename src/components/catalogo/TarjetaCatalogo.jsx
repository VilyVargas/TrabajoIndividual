import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TarjetaCatalogo = () => {
  return (
    <Container className="mt-3">
      <Row className="align-items-center">
        <Col>
          <h2><i className="bi bi-house-fill me-2"></i> TarjetaCatalogo</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default TarjetaCatalogo;