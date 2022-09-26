import { BrandBar } from "components/BrandBar";
import { DeviceList } from "components/DeviceList";
import { TypeBar } from "components/TypeBar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={4} xs={4}>
          <TypeBar/>
        </Col>
        <Col md={8} xs={8}>
          <BrandBar />
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
};
