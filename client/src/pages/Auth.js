import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "utils/consts";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto"> {isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите ваш email..." className="mt-3" />
          <Form.Control placeholder="Введите ваш пароль..." className="mt-3" />
          <Row
            style={{ margin: 0 }}
            className="d-flex flex-row justify-content-between mt-3"
          >
            {isLogin ? (
              <div style={{ width: "70%", padding: 0 }}>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div style={{ width: "70%", padding: 0 }}>
                Есть аккаунт?{" "}
                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              style={{ width: "min-content" }}
              variant={"outline-success"}
              className="pl-3 pr-3"
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
