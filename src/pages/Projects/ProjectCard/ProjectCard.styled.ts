import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardProj = styled(Card)(({ theme }) => ({
	maxWidth: 320,
	width: '100%',
	color: theme.palette.grey[100],
	backgroundColor: theme.palette.primary.main,

	borderRadius: 6,
	boxShadow: "0px 0px 15px 8px rgba(20, 2, 9, 0.6)",
	backgroundImage: "none",

	".content": {
		padding: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1.75),

		".title": {
			fontWeight: 700,
			fontSize: 20,
		},
	},
	

	".links": {
		padding: theme.spacing(0, 1.5, 1.5),
		div:{
			display: 'flex',
			
			a: {
				span: {
					fontSize: 24,
					color: theme.palette.secondary.dark,
				}
			}
		}
	}
}))