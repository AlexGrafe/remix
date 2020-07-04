import { Link } from "gatsby"
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

const Header = ({ siteTitle, configData }) => (
  <header>

      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={process.env.REMIX_STRAPI_URL + configData.header_logo_url} height="30" className="d-inline-block align-top mr-3 mb-0" />
            {configData.header_title}
          </Navbar.Brand>

          <Nav className="ml-5 mr-auto">
            <Link to="/" className="nav-link mr-4" activeClassName="remix-nav-link-active">New Document</Link>
            <Link to="/archive" className="nav-link mr-4" activeClassName="remix-nav-link-active">Saved Documents</Link>
            <Link to="/content-editor" className="nav-link mr-4" activeClassName="remix-nav-link-active">Content Editor</Link>
          </Nav>
        </Container>
      </Navbar>

  </header>
)


/*

<Nav.Link as="span">Generator - <Link to="/">Generator</Link></Nav.Link>
            <Nav.Link as="span"><Link to="/document-archive">Document Archive</Link></Nav.Link>
            <Nav.Link>Test</Nav.Link>

*/


/*
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/*
export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiConfigItem {
      edges {
        node {
          id
          key
          value
        }
      }
    }
  }
`
*/


/*
const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

*/