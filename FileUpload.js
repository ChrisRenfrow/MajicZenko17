import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {

	label: {
		color: "rgba(0, 0, 0, 0.87)",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)",
		borderRadius: "2px",
		minWidth: "88px",

		border: "10px none",
		boxSizing: "border-box",
		display: "inline-block",
		fontFamily: "Roboto,sans-serif",
		cursor: "pointer",
		textDecoration: "none",
		margin: 12,
		padding: 0,
		outline: "medium none",
		fontSize: "inherit",
		fontWeight: "inherit",
		position: "relative",
		zIndex: 1,
		height: "36px",
		lineHeight: "36px",
		width: "100%",
		borderRadius: "2px",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		backgroundColor: "rgb(0, 188, 212)",
		textAlign: "center",

		height: "36px",
		width: 150,
		borderRadius: "2px",
		transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
		top: "0px",
	},
	text: {
		position: "relative",
		opacity: 1,
		fontSize: "14px",
		letterSpacing: "0px",
		textTransform: "uppercase",
		fontWeight: 500,
		margin: "0px",
		paddingLeft: "16px",
		paddingRight: "16px",
		color: "rgb(255, 255, 255)",
		// -moz-user-select: none;"
	},
	input: {
		opacity: 0,
		position: "absolute",
		zIndex: -1,
		display: "hidden",	
	},
	button: {
 		margin: 12,
	}
}

class FileUpload extends Component {
	render() {
		return (
			<div>
				<form action="/upload" method="post" enctype="multipart/form-data">
					<label for="upload-file" style={styles.label}>
						<span style={styles.text}>Browse...</span>
					</label>
					<input type="file" name="file" value="val"  id="upload-file"/>
					<RaisedButton label="Upload" primary={true} style={styles.button}
					onClick={(event) => this.handleClick(event)} />
				</form>
			</div>
		)
	}
}

export default FileUpload
