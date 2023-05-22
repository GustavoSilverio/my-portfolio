import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Home = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 3)
}))

export const About = styled (Stack)(({ theme }) => ({
	color: theme.palette.grey[100],
	maxWidth: 600,
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center',

	h2: {
		fontSize: 48,
		fontWeight: 700,

		span: {
			color: theme.palette.secondary.main
		},
	},

	h4: {
		fontSize: 24,
		fontWeight: 700,
	},

	div: {
		alignItems: 'center',
		
		button: {
			padding: theme.spacing(1, 2),
			border: `1px solid ${theme.palette.secondary.dark}`,
			borderRadius: 2,
			color: theme.palette.secondary.dark,
		},

			span: {
				display: 'flex',
				fontSize: 24,
				cursor: 'pointer',
			},
	},

	[theme.breakpoints.down('md')]: {
		h2:{
			textAlign: 'center',
		}
	}
}))