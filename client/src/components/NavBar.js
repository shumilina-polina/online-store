import { Context } from "index";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "utils/consts";

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
          BuyDevice
        </NavLink>
        <Nav className="ml-auto" style={{ color: "white" }}>
          {user.isAuth ? (
            <>
              <NavLink to={ADMIN_ROUTE}>
                <Button variant={"outline-light"}>Админ панель</Button>
              </NavLink>
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outline-light"} className="ms-2">
                  Выйти
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <Button
                variant={"outline-light"}
                onClick={() => {
                  user.setIsAuth(true);
                }}
              >
                Авторизация
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});
