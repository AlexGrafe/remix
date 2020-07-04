import React from "react"
// import { Link } from "gatsby"

// import remixConfig from "../"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';



const RemixDocumentPreview = () => {
	return (
		<embed src="http://localhost:1337/uploads/Pay_Pal_SDD_Pay_One_Subscriptions_v1_0_2020_04_21_f6fc26bffd.pdf" width="100%" height="100%" type="application/pdf" />
	);
}



const IndexPage = ({data}) => (
	<Layout>
		<SEO title="Archive" />

		<Container fluid className="h-100" style={{paddingTop: 100}}>
			<Row>
				<Col id="col-editor" style={{flex: 2}}>
				</Col>



				<Col id="col-preview" style={{flex: 1}}>
					<Row style={{height: "70px"}}>
						<Col style={{flex: 1}}><h3 className="mb-5" style={{borderBottom: "1px solid black", paddingBottom: 7}}>Preview</h3></Col>
						<Col style={{flex: 2}}>
							<DropdownButton variant="outline-secondary" as={ButtonGroup} title="Document Type" size="md">
								<Dropdown.Item>SDD: PDF</Dropdown.Item>
								<Dropdown.Item>SDD: HTML</Dropdown.Item>
								<Dropdown.Item>Certification</Dropdown.Item>
								<Dropdown.Item>Presentation</Dropdown.Item>
								<Dropdown.Item>One Pager</Dropdown.Item>
								<Dropdown.Item>Mockup Deck</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item disabled="true">Postman Collections (No Preview)</Dropdown.Item>
							</DropdownButton>
						</Col>
					</Row>

					<Row style={{height: "70vh"}}>
						<Col>
							<RemixDocumentPreview />
						</Col>
					</Row>
				</Col>
			</Row>			
		</Container>
	</Layout>
)



export default IndexPage



export const pageQuery = graphql`  
  query EditorQuery {
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