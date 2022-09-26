import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "utils/consts";

export const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className="mb-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.image.i} />
        <div className="text-black-50">
          <span>Apple</span>
          <div>Рейтинг: {device.rating}</div>
        </div>
        <span>{device.name}</span>
      </Card>
    </Col>
  );
};
