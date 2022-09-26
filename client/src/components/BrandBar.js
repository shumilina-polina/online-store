import { Context } from "index";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";

export const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ width: "min-content", cursor: "pointer" }}
          onClick={() => {
            device.setSelectedBrand(brand);
          }}
          border={device.selectedBrand.id === brand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
