/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"
import "./layout.css"

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "./remix.css"
import Container from 'react-bootstrap/Container';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

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
  `)

  const configData = {};
  for (let i of data.allStrapiConfigItem.edges) {
    configData[i.node.key] = i.node.value;
  }

  // console.log({configData});

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} configData={configData} />
      
      <Container fluid="true" style={{height: "100vh", overflow: "hidden"}}>
        <main className="h-100 d-flex flex-column bg-dark text-light">{children}</main>
      </Container>


    </>
  )
}

// <Footer configData={configData} />

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
