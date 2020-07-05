import React, {useState} from "react"


// import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";

import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";


// import "ace-builds/src-noconflict/ext-language_tools";

// import { Link } from "gatsby"

// import remixConfig from "../"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

// Bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
// import Table from 'react-bootstrap/Table';

function currentDate() {
	return ((new Date()).toISOString().substr(0, 10));
}




const AceThemes = {
	light: [
		["Chrome",					"chrome",					"light"	],
		["Clouds",					"clouds",					"light"	],
		["Crimson Editor",			"crimson_editor",			"light"	],
		["Dawn",					"dawn",						"light"	],
		["Dreamweaver",				"dreamweaver",				"light"	],
		["Eclipse",					"eclipse",					"light"	],
		["GitHub",					"github",					"light"	],
		["IPlastic",				"iplastic",					"light"	],
		["Solarized Light",			"solarized_light",			"light"	],
		["TextMate",				"textmate",					"light"	],
		["Tomorrow",				"tomorrow",					"light"	],
		["Xcode",					"xcode",					"light"	],
		["Kuroir",					"kuroir",					"light"	],
		["KatzenMilch",				"katzenmilch",				"light"	],
		["SQL Server",				"sqlserver",				"light"	]
	],
	dark: [
		["Ambiance",				"ambiance",					"dark"	],
		["Chaos",					"chaos",					"dark"	],
		["Clouds Midnight",			"clouds_midnight",			"dark"	],
		["Dracula",					"dracula",					"dark"	],
		["Cobalt",					"cobalt",					"dark"	],
		["Gruvbox",					"gruvbox",					"dark"	],
		["Green on Black",			"gob",						"dark"	],
		["idle Fingers",			"idle_fingers",				"dark"	],
		["krTheme",					"kr_theme",					"dark"	],
		["Merbivore",				"merbivore",				"dark"	],
		["Merbivore Soft",			"merbivore_soft",			"dark"	],
		["Mono Industrial",			"mono_industrial",			"dark"	],
		["Monokai",					"monokai",					"dark"	],
		["Nord Dark",				"nord_dark",				"dark"	],
		["Pastel on dark",			"pastel_on_dark",			"dark"	],
		["Solarized Dark",			"solarized_dark",			"dark"	],
		["Terminal",				"terminal",					"dark"	],
		["Tomorrow Night",			"tomorrow_night",			"dark"	],
		["Tomorrow Night Blue",		"tomorrow_night_blue",		"dark"	],
		["Tomorrow Night Bright",	"tomorrow_night_bright",	"dark"	],
		["Tomorrow Night 80s",		"tomorrow_night_eighties",	"dark"	],
		["Twilight",				"twilight",  				"dark"	],
		["Vibrant Ink",				"vibrant_ink",				"dark"	]
	]
};



const sections = [
	{ section: "Authentication", entries: [
		"Braintree",
		"Express Checkout",
		"Adaptive",
		"OAuth 1st Party",
		"OAuth 1st Party + JWT",
		"OAuth 3rd Party",
		"iZettle"
	]},
	{ section: "Onboarding", entries: [
		"ISU v2 3rd Party (API)",
		"ISU v2 3rd Party (URL)",
		"ISU v2 1st Party (API)",
		"ISU v2 1st Party (URL)",
		"MAM API v3",
		"MAM API v2",
		"Adaptive API",
		"Classic (Permission API)",
		"Classic (Manual)"
	]},
	{ section: "Payments", entries: [
		"Orders v2",
		"Orders v1",
		"Braintree",
		"Payments v1",
		"Adaptive Payments",
		"Express Checkout",
		"WPS",
		"Subscriptions",
		"Vaulting",
		"Reference Transactions (Classic)",
		"Reference Transactions (REST)",
		"Installment Banners",
		"iZettle Sync API",
		"iZettle Reader SDK"
	]},
	{ section: "Risk Data Acquisition", entries: [
		"Basics",
		"STC",
		"Magnes (Android, iOS)",
		"Fraudnet (Web)",
		"Kount"
	]},
	{ section: "Reporting", entries: [
		"Transaction Search (REST)",
		"Transaction Search for Partners (REST)",
		"Transaction Search (Classic)",
		"Reporting Files (STL etc.)"
	]},
	{ section: "Disputes", entries: [
		"Disputes API (Braintree)",
		"Disputes API (PayPal)",
		"Resolution Center",
		"Braintree Disputes (Website)"
	]},
	{ section: "Payouts", entries: [
		"Hyperwallet",
		"Payouts API"
	]}
];




const RemixContentEditorToolbar = (_) => {

	const onClickDropdownThemes = (e) => {
		console.log("onClickDropdownThemes", e.target.dataset.themeId);
		_.state.editorTheme.set(e.target.dataset.themeId);
	};

	return (
		<div>
			<Dropdown className="btn-group mr-2">
				<Dropdown.Toggle variant="success"><Icon.Template />Section</Dropdown.Toggle>

				<Dropdown.Menu className="bg-dark text-light">

					{ sections.map( (x) => {
						return (
							<div key={x.section}>
								<Dropdown.Header key={x.section} className="text-light">{x.section}</Dropdown.Header>
								{ x.entries.map( (e) => ( <Dropdown.Item style={{fontSize: 12, paddingTop: 0, paddingBottom: 0}} className="text-light" key={e}>{e}</Dropdown.Item> ) ) }
							</div>
						);
					} ) }

				</Dropdown.Menu>
			</Dropdown>

			<Button variant="success" className="mr-4" onClick={() => console.log("Save")}><Icon.CloudUpload />Save</Button>


			<Button variant="secondary" className="mr-2" onClick={() => _.state.modalHelpDisplay.set(true)}><Icon.QuestionCircle />Help</Button>

			<Dropdown className="btn-group mr-2">
				<Dropdown.Toggle variant="secondary"><Icon.Template />Theme</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Header>Light</Dropdown.Header>
					{ AceThemes.light.map( (x) => <Dropdown.Item style={{fontSize: 14, paddingTop: 1, paddingBottom: 1}} key={x[1]} onClick={onClickDropdownThemes} data-theme-id={x[1]}>{x[0]}</Dropdown.Item> ) }

					<Dropdown.Header>Dark</Dropdown.Header>
					{ AceThemes.dark.map( (x) => <Dropdown.Item style={{fontSize: 14, paddingTop: 1, paddingBottom: 1}} key={x[1]} onClick={onClickDropdownThemes} data-theme-id={x[1]}>{x[0]}</Dropdown.Item> ) }
				</Dropdown.Menu>
			</Dropdown>

			<Button variant="secondary" className="mr-4"><Icon.Download />Import</Button>

			<Button variant="success" className="mr-2"><Icon.Upload />Export</Button>

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
		</div>
	);
}

const editorValueDefault = `


Detail Level 1 2 3
Order is infered simply from order within the document



# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


Normal Text of Paragraph 1
Normal Text of Paragraph 1
Normal Text of Paragraph 1

Normal Text of Paragraph 2
Normal Text of Paragraph 2
Normal Text of Paragraph 2

Normal Text of Paragraph 3
Normal Text of Paragraph 3
Normal Text of Paragraph 3

***

- List (Depth: 1)
- List (Depth: 1)
- List (Depth: 1)
  - List (Depth: 2)
  - List (Depth: 2)
  - List (Depth: 2)
    - List (Depth: 3)
    - List (Depth: 3)
    - List (Depth: 3)
  - List (Depth: 2)
- List (Depth: 1)

1. Numbered List (Depth: 1)
1. Numbered List (Depth: 1)
1. Numbered List (Depth: 1)
   1. Numbered List (Depth: 2)
   1. Numbered List (Depth: 2)
   1. Numbered List (Depth: 2)
      1. Numbered List (Depth: 3)
      1. Numbered List (Depth: 3)
      1. Numbered List (Depth: 3)
   1. Numbered List (Depth: 2)
1. Numbered List (Depth: 1)

***

The following word is **bold**.
The following word is *emphasized / italic*.
The following word is ***emphasized / italic***.
The following word is __underlined__.
The following word is ~~bold~~.

This is an implicit link: Visit [Google](https://www.google.com).
This is an explicit link: Visit Google here: <https://www.google.com>.

***

> Special callout
> For example
> To always remember the right Client ID

***


Paragraph Type: Explanatory Text, Detail Level 1/2/3

<var>skdjfhskjdhfkj</var>

_info.PartnerName_ will integrate PPCP.

<var>if options.....</var>

***

Inline \`code\` to show.

\`\`\`api-header
code block
\`\`\`

\`\`\`api
code block
\`\`\`

\`\`\`js
console.log("sdjhfskj");
\`\`\`

\`\`\`mermaid
Inline Flowchart or Sequence Chart
\`\`\`

***

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


`;



const RemixContentEditorAce = (_) => {

	const onChange = (text, details) => {
		console.log("onChange", {text, details});
	};

	return (
		<AceEditor
			mode="markdown"
			theme={_.themeState.value}
			onChange={onChange}
			name="UNIQUE_ID_OF_DIV"
			editorProps={{ $blockScrolling: true }}
			width={"100%"}
			height={"900px"}
			showPrintMargin={false}
			showGutter={true}
			highlightActiveLine={true}
			setOptions={{}}
			value={editorValueDefault}
		  />
	);

	/*
		setOptions={{
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			enableSnippets: true
		}}
	*/
}



const RemixDocumentPreview = () => {
	return (
		<div></div>
		
	); // <embed src="http://localhost:1337/uploads/Pay_Pal_SDD_Pay_One_Subscriptions_v1_0_2020_04_21_f6fc26bffd.pdf" width="100%" height="100%" type="application/pdf" />
}







const IndexPage = ({data}) => {

	let f = {
		configuration: {
			editorThemeDefault: "twilight"
		},
		state: {
			modalHelpDisplay: {},
			editorTheme: {}
		}
	};

	[f.state.modalHelpDisplay.value, f.state.modalHelpDisplay.set] = useState(false);
	[f.state.editorTheme.value, f.state.editorTheme.set] = useState(f.configuration.editorThemeDefault);



	return (
	<Layout>
		<SEO title="Archive" />

		<Container fluid className="h-100" style={{paddingTop: 100}}>
			<Row>
				<Col id="col-editor" style={{flex: 2, paddingRight: 50}}>
					<Row id="row-editor-toolbar" className="ml-5">
						<RemixContentEditorToolbar state={f.state}/>
					</Row>

					<Row id="row-editor-ace" style={{marginLeft: 20, marginTop: 50}}>
						<RemixContentEditorAce  themeState={f.state.editorTheme} />
					</Row>
				</Col>



				<Col id="col-preview" style={{flex: 1}}>
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
							<RemixDocumentPreview />
						</Col>
					</Row>
				</Col>
			</Row>			
		</Container>

		<Modal size="lg" show={f.state.modalHelpDisplay.value} onHide={() => { console.log("onHide"); f.state.modalHelpDisplay.set(false); }} aria-labelledby="example-modal-sizes-title-sm">
			<Modal.Header closeButton="true">
				<Modal.Title id="example-modal-sizes-title-sm">Help</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Container fluid="true">
					<Form id="form-save-document-set" onSubmit={(e) => { e.preventDefault(); console.log({e}); f.state.modalHelpDisplay.set(false); }} >
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
	)
}



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
`;