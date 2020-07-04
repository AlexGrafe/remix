// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// {data.allStrapiConfigItem.edges[0].node.value}

const Footer = ({ siteTitle, configData }) => (
  <footer>
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={process.env.REMIX_STRAPI_URL + configData.header_logo_url} height="10" className="d-inline-block align-top mr-2 mb-0" />
            {configData.header_title}
        </Navbar.Brand>

        <Nav className="ml-5 mr-auto">
          <Nav.Link href="#home">Generator</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </footer>
)




Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer