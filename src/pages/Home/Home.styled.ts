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
		fontSize: "clamp(22px, 6vw, 48px)",
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
			fontWeight: 700,

			fontSize: 16,
			textTransform: 'none',
			color: theme.palette.secondary.dark,
			display: 'flex',
			gap: theme.spacing(1),

			span: {
				fontSize: 20,

				"&:hover": {
					color: "#000",
				},
			},

			"&:hover": {
				backgroundColor: theme.palette.secondary.main,
				color: "#000",
			},
		},

			span: {
				display: 'flex',
				fontSize: 24,
				cursor: 'pointer',
				transition: '.4s ease',
				
				"&:hover": {
					color: theme.palette.secondary.main,
				},
			},
	},

	[theme.breakpoints.down('md')]: {
		h2:{
			textAlign: 'center',
		}
	}
}))