import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Paper, Typography, Box } from "@material-ui/core"
import getz from "./getz.jpg"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		display: "flex",
	},
	text: {
		border: "1px solid #333",
		padding: "0 10px",
	},
}))

export default function App() {
	const classes = useStyles()
	const [text, setText] = useState("")
	const [image, setImage] = useState(getz)
	const pagePaste = (event) => {
		var item = event.clipboardData.items[0]

		if (item.type.indexOf("image") === 0) {
			var blob = item.getAsFile()

			var reader = new FileReader()
			reader.onload = function (event) {
				document.getElementById("container").src = event.target.result
			}

			reader.readAsDataURL(blob)
		}
	}

	return (
		<div
			className={classes.root}
			contentEditable={true}
			onPaste={pagePaste}>
			<Container maxWidth='sm'>
				<Grid container>
					<Paper elevation={2} className={classes.paper}>
						<Typography className={classes.text} variant='h6'>
							Hmm kimochi
						</Typography>
						<Box>
							<img
								src={image}
								alt='Old Huyndai Getz'
								id='DraggingImage'
							/>
						</Box>
					</Paper>
				</Grid>
			</Container>
		</div>
	)
}
