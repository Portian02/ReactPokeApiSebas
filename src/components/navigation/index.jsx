import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
import Barsearch from "../search";
// Funcion de navigation

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container className="colorR">
        <Navbar.Brand href="#home">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Title"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <li className="text">
                <Link to="/">
                  {" "}
                  <p>Home</p>
                </Link>{" "}
              </li>

              <li className="text">
                <Link to="/Perfil">
                  {" "}
                  <p>Perfil</p>
                </Link>{" "}
              </li>
            </ul>
          </Nav>
          <Barsearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
