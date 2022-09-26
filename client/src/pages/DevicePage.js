import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import i from "assets/img/iphone.jpg";
import star from "assets/img/star.png";

export const DevicePage = () => {
  const device = {
    id: 1,
    name: "IPhone 1",
    price: 2000,
    rating: 2,
    image: { i },
  };
  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 2,
      title: "Камера",
      description: "12 Мп",
    },
    {
      id: 3,
      title: "Процессор",
      description: "Пентиум 3",
    },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.image.i} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики:</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
