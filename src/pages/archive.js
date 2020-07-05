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
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


// edit
// download
// delete (+ prompt)

const EditButtons = ({id}) => {
	return (
		<ButtonToolbar aria-label="Toolbar with button groups">
			<ButtonGroup className="mr-2" aria-label="First group" size="sm">
				<Button variant="secondary"><Icon.CloudDownload />Open</Button>
			</ButtonGroup>

			<ButtonGroup className="mr-2" aria-label="Third group" size="sm">
				<DropdownButton variant="secondary" as={ButtonGroup} title="Download" size="sm">
					<Dropdown.Item>Everything (ZIP)</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>SDD: PDF</Dropdown.Item>
					<Dropdown.Item>SDD: HTML</Dropdown.Item>
					<Dropdown.Item>Certification</Dropdown.Item>
					<Dropdown.Item>Presentation</Dropdown.Item>
					<Dropdown.Item>One Pager</Dropdown.Item>
					<Dropdown.Item>Mockup Deck</Dropdown.Item>
					<Dropdown.Item>Postman Collections</Dropdown.Item>
				</DropdownButton>
			</ButtonGroup>

			<ButtonGroup className="mr-2" aria-label="Second group" size="sm">
				<Button variant="danger"><Icon.FileTimes />Delete</Button>
			</ButtonGroup>

		</ButtonToolbar>
	);
}




const IndexPage = ({data}) => (
	<Layout>
		<SEO title="Archive" />

		<Container className="h-100" style={{paddingTop: 100}}>

			<Table striped="true" hover="true" borderless="true" variant="dark" responsive="true">
				<thead>
					<tr>
						<th style={{width: "19%"}}>Name</th>
						<th style={{width: "12%"}}>Status</th>
						<th style={{width: "16%"}}>Author</th>
						<th style={{width: "17%"}}>Created at</th>
						<th></th>
					</tr>
					<tr>
						<th>
							<InputGroup>
								<FormControl placeholder="Filter" aria-label="Filter by Name" aria-describedby="basic-addon2" />
								<InputGroup.Append><Button variant="outline-secondary"><Icon.TimesCircle mr="0"/></Button></InputGroup.Append>
							</InputGroup>
						</th>
						<th>
							<DropdownButton variant="outline-secondary" as={ButtonGroup} title="Filter by Status" size="md">
								<Dropdown.Item>All</Dropdown.Item>
								<Dropdown.Header>Filter</Dropdown.Header>
								<Dropdown.Item>Release</Dropdown.Item>
								<Dropdown.Item>WIP</Dropdown.Item>
								<Dropdown.Item>Draft</Dropdown.Item>
							</DropdownButton>
						</th>
						<th>
							<InputGroup>
								<FormControl placeholder="Filter" aria-label="Filter by Author" aria-describedby="basic-addon2" />
								<InputGroup.Append><Button variant="outline-secondary"><Icon.TimesCircle mr="0"/></Button></InputGroup.Append>
							</InputGroup>
						</th>
						<th>
							<InputGroup>
								<FormControl placeholder="Filter" aria-label="Filter by Date" aria-describedby="basic-addon2" />
								<InputGroup.Append><Button variant="outline-secondary"><Icon.TimesCircle mr="0"/></Button></InputGroup.Append>
							</InputGroup>
						</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>shopware shop v1.4</td>
						<td>Release</td>
						<td>agrafe</td>
						<td>2020-06-25</td>
						<td><EditButtons id="9"/></td>
					</tr>
					<tr>
						<td>shopware shop v1.3</td>
						<td>WIP</td>
						<td>agrafe</td>
						<td>2020-06-24</td>
						<td><EditButtons id="9"/></td>
					</tr>
					<tr>
						<td>shopware shop v1.2</td>
						<td>Draft</td>
						<td>agrafe</td>
						<td>2020-06-23</td>
						<td><EditButtons id="9"/></td>
					</tr>
					<tr>
						<td>shopware shop v1.1</td>
						<td>Draft</td>
						<td>agrafe</td>
						<td>2020-06-22</td>
						<td><EditButtons id="9"/></td>
					</tr>
					<tr>
						<td>shopware shop v1.0</td>
						<td>Draft</td>
						<td>agrafe</td>
						<td>2020-06-21</td>
						<td><EditButtons id="9"/></td>
					</tr>
					
				</tbody>
			</Table>

		</Container>
	</Layout>
)

/*

<ul>
	{data.allStrapiConfigItem.edges.map(document => (
		<li key={document.node.id}>{document.node.key}: {document.node.value}</li>
	))}
</ul>


<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
*/

export default IndexPage




export const pageQuery = graphql`  
  query ArchiveQuery {
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