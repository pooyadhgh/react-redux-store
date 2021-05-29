import { Container, Navbar, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" color="light" expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fa fa-shopping-cart text-dark"></i>
              <span className="px-3">React Shop</span>
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="mr-auto" navbar>
            <Nav.Item>
              <Nav.Link href="https://github.com/pooyadhgh/React-Redux-Store">
                GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
