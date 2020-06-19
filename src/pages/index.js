import React from "react"
import { Link } from "gatsby"

// import remixConfig from "../"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />
				React Bootstrap
			</Navbar.Brand>
		</Navbar>

		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>

		<Button variant="success">Success</Button>

		<Link to="/page-2/">Go to page 2</Link> <br />
	</Layout>
)

export default IndexPage
