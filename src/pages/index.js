import React, { useState } from "react"
// import { Link } from "gatsby"

// import remixConfig from "../"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

// Bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';


function currentDate() {
	return ((new Date()).toISOString().substr(0, 10));
}



const RemixFormItem = ({remixType, formData, onChange}) => {

	let formElement = {};
	const formId = "form-" + remixType + "-" + formData.id;

	if (remixType === "parameter") {
		switch (formData.type) {
			case "text":
				formElement = (
					<Form.Group controlId={formId}>
						<Form.Label size={formData.size}>{formData.label}</Form.Label>
						<Form.Control type="text" size={formData.size} placeholder={formData.placeholder} autoComplete={formData.autoComplete} name={formId} data-remix-type={remixType} data-value-type="string" onChange={onChange} />
					</Form.Group>
				);
				break;

			case "textarea":
				formElement = (
					<Form.Group controlId={formId}>
						<Form.Label size={formData.size}>{formData.label}</Form.Label>
						<Form.Control as="textarea" size={formData.size} rows={formData.rows} placeholder={formData.placeholder} name={formId} data-remix-type={remixType} style={{resize: formData.resize || "none"}} data-value-type="string" onChange={onChange} />
					</Form.Group>
				);
				break;

			case "checkboxes-inline":
				formElement = (
					<Form.Group controlId={formId}>
						<Form.Label size={formData.size}>{formData.label}</Form.Label>
						<div className="ml-2">
							{ formData.values.map( ({label, value}) => ( <Form.Check inline label={label} name={formId} value={formId + "-" + value} data-remix-type={remixType} type="checkbox" id={formId + "-" + value} key={formId + "-" + value} data-value-type="array" onChange={onChange} /> )) }
						</div>
					</Form.Group>
				);
				break;

			default:
				formElement = (<div>Todo</div>);
		}
	}


	return formElement;
}



const IndexPage = ({data}) => {

	let f = {
		config: {
			formNewDocumentInitialState: {
			},
			paypalFormData: {}
		},
		formState: {
			parameters: { state: null, setState: null},
			sections:	{ state: null, setState: null},
			options:	{ state: null, setState: null}
		},
		onFormChange: function (e) {
			const target = e.target;

			let f = {
				name: "onFormChange()",
				input: {
					id: target.id,
					name: target.name,
					value: target.value,
					valueType: target.dataset.valueType,
					checked: target.checked || false,
					remixType: target.dataset.remixType
				}
			};

			console.log(f);

			// f.formState[e.target.data] ... setState (Object.assign())

			// TODO Checkboxes need a TRUE / FALSE to be unchecked properly
		}
	};

	[f.formState.parameters.state, f.formState.parameters.setState] = useState({});
	[f.formState.sections.state, f.formState.sections.setState] = useState({});
	[f.formState.options.state, f.formState.options.setState] = useState({});

	console.log({f});



	// TODO Pull this dynamically from Strapi
	f.config.paypalFormData = {
		parameters: [
			{ label: "Merchant / Partner Name",	id: "partnerName",	type: "text",		autoComplete: "off",	size: "sm",	placeholder: "Surfing Kitties Inc."					},
			{ label: "Description",				id: "description",	type: "textarea",	autoComplete: "off",	rows: "2",	resize: "none",	placeholder: "This document describes ..." 	},
			{ label: "Countries",				id: "countries",	type: "text",		autoComplete: "off",	size: "sm",	placeholder: "AT CA CH DE FR GB IT US"					},
			{ label: "Currencies",				id: "currencies",	type: "text",		autoComplete: "off",	size: "sm",	placeholder: "EUR GBP USD"					},
			{ label: "Platforms",				id: "platforms",	type: "checkboxes-inline",	size: "sm",		values: [ { label: "Web", value: "web" }, { label: "Mobile Web", value: "mobile-web" }, { label: "Android", value: "android" }, { label: "iOS", value: "ios" } ] },
			{ label: "Websites / Apps",			id: "websites",		type: "textarea",	autoComplete: "off",	rows: "3",	resize: "none",	placeholder: "surfingkitties.com\nsurfendekatzen.de\nchatonsdesurf.fr"	},
			{ label: "BN Codes", 				id: "bnCodes",		type: "textarea",	autoComplete: "off",	rows: "3",	resize: "none",	placeholder: "SurfingKitties_ECM Default BN Code\nSurfingKitties_ECS Shortcut BN Code\nSurfingKitties_Mobile Mobile BN Code" 	},
			{ label: "Accounts", 				id: "accounts",		type: "textarea",	autoComplete: "off",	rows: "3",	resize: "none",	placeholder: "paypal@surfingkitties.com H2SBA45SLDFKW\npaypal-fees@surfingkitties.com CH4ADNA9FAEBA\npaypal-losses@surfingkitties.com K2SBJS8DSHKLJ"	},
			{ label: "Credentials",				id: "credentials",	type: "textarea",	autoComplete: "off",	rows: "2",	resize: "none",	placeholder: "SKJDHFKJH223KJHKDJHFS_kjhkjh23SDFJSHK234 Live\nUn4DHFKJH223KJHKDJHFS_kjhkjh23SDFJSHK234 Sandbox"	}
		],

		sections: [

		],

		options: [

		]
	};

	/*
<Form.Group controlId="formBasicPassword">
	<Form.Label size="sm">Merchant / Partner Name</Form.Label>
	<Form.Control type="text" size="sm" placeholder="Surfing Kitties Inc." autoComplete="off" />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
	<Form.Label size="sm">Description</Form.Label>
	<Form.Control as="textarea" size="sm" rows="2" placeholder="This document describes ..." style={{resize: "none"}} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
	<Form.Label size="sm">Countries</Form.Label>
	<Form.Control type="text" size="sm" placeholder="AT CA CH DE FR GB IT US" autoComplete="off" />
</Form.Group>

<Form.Group controlId="formBasicPassword">
	<Form.Label size="sm">Currencies</Form.Label>
	<Form.Control type="text" size="sm" placeholder="EUR GBP USD" autoComplete="off" />
</Form.Group>

<Form.Group controlId="formBasicPassword">
	<Form.Label size="sm">Platforms</Form.Label>
	<div className="ml-2">
		<Form.Check inline label="Web" defaultChecked={true} type="checkbox" id="sdfsf" />
		<Form.Check inline label="Mobile Web" defaultChecked={true} type="checkbox" id="lakjhfk" />
		<Form.Check inline label="Android" type="checkbox" id="lskdjl" />
		<Form.Check inline label="iOS" type="checkbox" id="lskdjlsdf" />
	</div>
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
	<Form.Label size="sm">Websites / Apps</Form.Label>
	<Form.Control as="textarea" size="sm" rows="3" placeholder="surfingkitties.com&#10;surfendekatzen.de&#10;chatonsdesurf.fr" style={{resize: "none"}}/>
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
	<Form.Label size="sm">BN Codes</Form.Label>
	<Form.Control as="textarea" size="sm" rows="3" placeholder="SurfingKitties_ECM Default BN Code&#10;SurfingKitties_ECS Shortcut BN Code&#10;SurfingKitties_Mobile Mobile BN Code" style={{resize: "none"}} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
	<Form.Label size="sm">Accounts</Form.Label>
	<Form.Control as="textarea" size="sm" rows="3" placeholder="paypal@surfingkitties.com H2SBA45SLDFKW&#10;paypal-fees@surfingkitties.com CH4ADNA9FAEBA&#10;paypal-losses@surfingkitties.com K2SBJS8DSHKLJ" style={{resize: "none"}} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
	<Form.Label size="sm">Credentials</Form.Label>
	<Form.Control as="textarea" size="sm" rows="2" placeholder="SKJDHFKJH223KJHKDJHFS_kjhkjh23SDFJSHK234 Live&#10;Un4DHFKJH223KJHKDJHFS_kjhkjh23SDFJSHK234 Sandbox" style={{resize: "none"}} />
</Form.Group>
	*/

	// TODO Generate DOM form from above.



	const [modalSaveDisplayState, modalSaveDisplaySetState] = useState(false);
	const [modalEditDisplayState, modalEditDisplaySetState] = useState(false);

	// const [] = useState();


	// TODO Move Button Bar into Navbar ?

	return (
	<Layout>
		<SEO title="New Document" />

		<Row id="navbar-row" style={{height: "180px", minHeight: "180px"}}>
			<Col className="d-flex flex-column justify-content-end">
				<Container className="mb-5">

					<Dropdown className="btn-group mr-2">
						<Dropdown.Toggle variant="secondary"><Icon.Template />Template</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item>Merchant (Braintree)</Dropdown.Item>
							<Dropdown.Item>Merchant (PPCP)</Dropdown.Item>
							<Dropdown.Item>Merchant: Airline</Dropdown.Item>
							<Dropdown.Item>Merchant: Gambling</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Marketplace: Connected Path</Dropdown.Item>
							<Dropdown.Item>Marketplace: Managed Path</Dropdown.Item>
							<Dropdown.Item>Marketplace: Custom Path (Braintree)</Dropdown.Item>
							<Dropdown.Item>Marketplace: Custom Path (PayPal)</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Cart: Hosted</Dropdown.Item>
							<Dropdown.Item>Cart: Download</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>PSP</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Button variant="secondary" className="mr-4"><Icon.Download />Import</Button>

					<Button variant="success" className="mr-2"><Icon.Upload />Export</Button>
					<Button variant="success" className="mr-2" onClick={() => modalEditDisplaySetState(true)}><Icon.FileEdit />Edit</Button>
					<Button variant="success" className="mr-2" onClick={() => modalSaveDisplaySetState(true)}><Icon.CloudUpload />Save</Button>
					<Button variant="success" className="mr-2" onClick={() => modalSaveDisplaySetState(true)}><Icon.CloudUpload />Save As …</Button>

					<Dropdown className="btn-group mr-2">
						<Dropdown.Toggle variant="success"><Icon.FileDownload />Download</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item>Everything (ZIP)</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>SDD: PDF</Dropdown.Item>
							<Dropdown.Item>SDD: HTML</Dropdown.Item>
							<Dropdown.Item>Certification</Dropdown.Item>
							<Dropdown.Item>Presentation</Dropdown.Item>
							<Dropdown.Item>One Pager</Dropdown.Item>
							<Dropdown.Item>Mockup Deck</Dropdown.Item>
							<Dropdown.Item>Postman Collections</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Col>
		</Row>

		<Row id="options-and-preview-row" style={{flex: 1, overflowY: "scroll"}}>
			<Col id="document-set-parameters" className="pl-4" style={{flex: 2}}>
				<h3 className="mb-4" style={{borderBottom: "1px solid black", paddingBottom: 7}}>Parameters</h3>

				<Form>

					{ f.config.paypalFormData.parameters.map( (x) => ( <RemixFormItem remixType="parameter" formData={x} onChange={f.onFormChange} key={x.id} /> ) ) }					

				</Form>

			</Col>



			<Col id="document-set-sections" style={{flex: 1}}>
				<h3 className="mb-4" style={{borderBottom: "1px solid black", paddingBottom: 7}}>Sections</h3>

				<h5>Authentication</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Basics" id="" />
					<Form.Check type="checkbox" label="Webhooks Basics" id="" />
					<Form.Check type="checkbox" label="Express Checkout" id="" />
					<Form.Check type="checkbox" label="Adaptive" id="" />
					<Form.Check type="checkbox" label="OAuth 1st Party" id="" />
					<Form.Check type="checkbox" label="OAuth 1st Party + JWT" id="" />
					<Form.Check type="checkbox" label="OAuth 3rd Party" id="" />
					<Form.Check type="checkbox" label="iZettle" id="" />
				</Form.Group>

				<h5>Onboarding</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="ISU v2 3rd Party (API)" id="" />
					<Form.Check type="checkbox" label="ISU v2 3rd Party (API)" id="" />
					<Form.Check type="checkbox" label="ISU v2 3rd Party (API)" id="" />
					<Form.Check type="checkbox" label="ISU v2 3rd Party (API)" id="" />
					<Form.Check type="checkbox" label="MAM API v3" id="" />
					<Form.Check type="checkbox" label="MAM API v2" id="" />
					<Form.Check type="checkbox" label="Adaptive API" id="" />
					<Form.Check type="checkbox" label="Classic (Permission API)" id="" />
					<Form.Check type="checkbox" label="Classic (Manual)" id="" />
				</Form.Group>

				<h5>Payments</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Orders v2" id="" />
					<Form.Check type="checkbox" label="Orders v1" id="" />
					<Form.Check type="checkbox" label="Braintree" id="" />
					<Form.Check type="checkbox" label="Payments v1" id="" />
					<Form.Check type="checkbox" label="Adaptive Payments" id="" />
					<Form.Check type="checkbox" label="Express Checkout" id="" />
					<Form.Check type="checkbox" label="WPS" id="" />
					<Form.Check type="checkbox" label="Subscriptions" id="" />
					<Form.Check type="checkbox" label="Vaulting" id="" />
					<Form.Check type="checkbox" label="Reference Transactions (Classic)" id="" />
					<Form.Check type="checkbox" label="Reference Transactions (REST)" id="" />
					<Form.Check type="checkbox" label="Installment Banners" id="" />
					<Form.Check type="checkbox" label="iZettle Sync API" id="" />
					<Form.Check type="checkbox" label="iZettle Reader SDK" id="" />
				</Form.Group>

				<h5>Risk Data Acquisition</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Basics" id="" />
					<Form.Check type="checkbox" label="STC" id="" />
					<Form.Check type="checkbox" label="Magnes" id="" />
					<Form.Check type="checkbox" label="Fraudnet" id="" />
					<Form.Check type="checkbox" label="Kount" id="" />
				</Form.Group>

				<h5>Reporting</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Transaction Search (REST)" id="" />
					<Form.Check type="checkbox" label="Transaction Search for Partners (REST)" id="" />
					<Form.Check type="checkbox" label="Transaction Search (Classic)" id="" />
					<Form.Check type="checkbox" label="Reporting Files (STL etc.)" id="" />
				</Form.Group>

				<h5>Disputes</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Disputes API" id="" />
					<Form.Check type="checkbox" label="Braintree Disputes API" id="" />
					<Form.Check type="checkbox" label="Resolution Center" id="" />
				</Form.Group>

				<h5>Payouts</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Payouts API" id="" />
					<Form.Check type="checkbox" label="Hyperwallet" id="" />
				</Form.Group>
				
			</Col>



			<Col id="document-set-options" style={{flex: 1}}>
				<h3 className="mb-4" style={{borderBottom: "1px solid black", paddingBottom: 7}}>Options</h3>

				<h5>Partner Type</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="radio" name="form-options-partnerType" value="merchant" label="Merchant" id="" />
					<Form.Check type="radio" name="form-options-partnerType" value="psp" label="PSP" id="" />
					<Form.Check type="radio" name="form-options-partnerType" value="hosted-cart" label="Hosted Cart" id="" />
					<Form.Check type="radio" name="form-options-partnerType" value="download-cart" label="Downloaded Cart" id="" />
					<Form.Check type="radio" name="form-options-partnerType" value="marketplace" label="Marketplace" id="" />
				</Form.Group>

				<h5>Authentication</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="OAuth 1st Party" id="" />
					<Form.Check type="checkbox" label="OAuth 1st Party + JWT" id="" />
					<Form.Check type="checkbox" label="OAuth 3rd Party" id="" />
				</Form.Group>

				<h5>Onboarding</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Connected Path" id="" />
					<Form.Check type="checkbox" label="Managed Path" id="" />
				</Form.Group>

				<h5>Payments</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="APMs" id="" />
					<Form.Check type="checkbox" label="ACDC / CCF / UCC" id="" />
					<Form.Check type="checkbox" label="Partner Fee" id="" />
					<Form.Check type="checkbox" label="Intent: Capture / Sale" id="" />
					<Form.Check type="checkbox" label="Intent: Authorize (AS1)" id="" />
					<Form.Check type="checkbox" label="Intent: Authorize (AS2)" id="" />
					<Form.Check type="checkbox" label="Disbursement Mode: Instant" id="" />
					<Form.Check type="checkbox" label="Disbursement Mode: Delayed" id="" />
					<Form.Check type="checkbox" label="AID" id="" />
					<Form.Check type="checkbox" label="Installment Banners: JS" id="" />
					<Form.Check type="checkbox" label="Installment Banners: HTML" id="" />
				</Form.Group>

				<h5>Risk Data Acquisition</h5>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="STC: Airline" id="" />
					<Form.Check type="checkbox" label="Shared ID: Magnes to STC" id="" />
				</Form.Group>

			</Col>



			<Col id="document-preview-col" style={{flex: 2}}>
				<Row style={{height: "70px"}}>
					<Col style={{flex: 1}}><h3 className="mb-5" style={{borderBottom: "1px solid black", paddingBottom: 7}}>Preview</h3></Col>
					<Col style={{flex: 2}}>
						<DropdownButton variant="secondary" as={ButtonGroup} title="Document Type" size="md">
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
						<embed src="http://localhost:1337/uploads/Pay_Pal_SDD_Pay_One_Subscriptions_v1_0_2020_04_21_f6fc26bffd.pdf" width="100%" height="100%" type="application/pdf" />
					</Col>
				</Row>
			</Col>
		</Row>



		<Modal size="lg" show={modalSaveDisplayState} onHide={() => { console.log("onHide"); modalSaveDisplaySetState(false); }} aria-labelledby="example-modal-sizes-title-sm">
			<Modal.Header closeButton="true">
				<Modal.Title id="example-modal-sizes-title-sm">Save Document Set</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Container fluid="true">
					<Form id="form-save-document-set" onSubmit={(e) => { e.preventDefault(); console.log({e}); modalSaveDisplaySetState(false); }} >
						<Form.Group as={Row} controlId="form-save-document-set-name">
							<Form.Label column="true" sm="2">Name</Form.Label>
							<Col sm="10">
								<Form.Control type="text" defaultValue={"Merchant_Name " + currentDate() + " v1.0"} />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="form-save-document-set-status">
							<Form.Label column="true" sm="2">Status</Form.Label>
							<Col sm="10">
								<Form.Control type="text" defaultValue="Draft" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="form-save-document-set-author">
							<Form.Label column sm="2">Author</Form.Label>
							<Col sm="10">
								<Form.Control type="text" autoComplete="on" />
							</Col>
						</Form.Group>
					</Form>

					<Row className="mt-5">
						<Col sm="2"></Col>
						<Col sm="10">
							<Button variant="success" type="submit" form="form-save-document-set" className="mr-2" block="true"><Icon.CloudUpload />Save</Button>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Modal>



		<Modal size="lg" show={modalEditDisplayState} onHide={() => { console.log("onHide"); modalEditDisplaySetState(false); }} aria-labelledby="example-modal-sizes-title-sm">
			<Modal.Header closeButton="true">
				<Modal.Title id="example-modal-sizes-title-sm">Edit Document Set</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Container fluid="true">
					<Form id="form-save-document-set" onSubmit={(e) => { e.preventDefault(); console.log({e}); modalSaveDisplaySetState(false); }} >
						<Form.Group as={Row} controlId="form-save-document-set-name">
							<Form.Label column="true" sm="2">Name</Form.Label>
							<Col sm="10">
								<Form.Control type="text" defaultValue={"Merchant_Name " + currentDate() + " v1.0"} />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="form-save-document-set-status">
							<Form.Label column="true" sm="2">Status</Form.Label>
							<Col sm="10">
								<Form.Control type="text" defaultValue="Draft" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="form-save-document-set-author">
							<Form.Label column sm="2">Author</Form.Label>
							<Col sm="10">
								<Form.Control type="text" autoComplete="on" />
							</Col>
						</Form.Group>
					</Form>

					<Row className="mt-5">
						<Col sm="2"></Col>
						<Col sm="10">
							<Button variant="success" type="submit" form="form-save-document-set" className="mr-2" block="true"><Icon.CloudUpload />Save</Button>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Modal>
		
	</Layout>
	);
}

/*

<Dropdown className="btn-group mr-2">
	<Dropdown.Toggle variant="outline-secondary"><Icon.CloudDownload />Open</Dropdown.Toggle>

	<Dropdown.Menu>
		<Dropdown.Item>SDD: HTML</Dropdown.Item>
		<Dropdown.Item>SDD: PDF</Dropdown.Item>
		<Dropdown.Item>Certification</Dropdown.Item>
		<Dropdown.Item>Postman Collections</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown>

*/


/*
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
*/

/*

<ul>
			{data.allStrapiConfigItem.edges.map(document => (
				<li key={document.node.id}>{document.node.key}: {document.node.value}</li>
			))}
		</ul>

*/

export default IndexPage




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