import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(Stack)(({ theme }) => ({
	width: '100%',
	padding: theme.spacing(4, 19, 1.25),
	backgrouncColor: 'transparent',
	flexDirection: 'row',

	alignItems: 'center',
	justifyContent: 'space-between',

	h1: {
		fontSize: 36,
		color: theme.palette.grey[100],
		fontWeight: 700,
		cursor: 'pointer',
		transition: "color .4s ease",

		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
	
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(4, 8, 0),
	},
}))

export const Navigation = styled('ul')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	listStyle: 'none',
	
	'li a': {
		color: theme.palette.grey[100],
		textDecoration: 'none',
		
		"&:hover::after": {
			content: "''",
			height: 1,
			width: 0,
			backgroundColor: theme.palette.secondary.main,
		},
	},

	"li button": {
		backgroundColor: 'transparent',
		border: 'none',
		color: theme.palette.grey[100],
		fontSize: 16,
		cursor: 'pointer',
	},

	span: {
		fontSize: 30,
		color: theme.palette.grey[100],
		transition: "color .4s ease",
		
		"&:hover": {
			color: theme.palette.secondary.main,
		}
	}
}))