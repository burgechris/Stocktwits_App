import React, { useState } from "react";
import { getTweets } from "../API";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function SearchBar(props) {
	const classes = useStyles();

	const [searchValue, setSearchValue] = useState("");
	// const [messages, setMessages] = useState([]);

	const handleOnChange = (e) => {
		let val = e.target.value;
		setSearchValue(val);
	};

	const handleSearch = () => {
		makeApiCall(searchValue);
	};

	const makeApiCall = input => {
		if (input !== null && input !== "") {
			getTweets(input)
				.then(res => res.json())
				.then(res => {
					props.populateMessages(res.messages);
				});
		} else 
			alert('I am sorry, but your search had no results.');
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						StockTwit
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}></div>
						<InputBase
							placeholder="Search…"
							onChange={(e) => handleOnChange(e)}
							value={searchValue}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
						<Button variant="contained" color="primary" onClick={handleSearch}>
							Search
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			{handleSearch}
		</div>
	);
}
