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
		justifyContent: 'center',
		padding: theme.spacing(4, 8, 4),
		
		h1: {
			animation: 'pop 2.5s infinite ease-in-out',
		},
	},

	"@keyframes pop": {
		'0%': {
			transform: 'scale(1)',
		},

		'50%': {
			transform: 'scale(1.2)',
		},

		'100%': {
			transform: 'scale(1)',
		},
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

	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}))