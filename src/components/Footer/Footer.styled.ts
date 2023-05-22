import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Footer = styled(Stack)(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.primary.main}`,
	justifyContent: 'center',
	alignItems: 'center',
	padding: theme.spacing(3.25, 2),

	bottom: 0,
	position: 'absolute',
	width: '100%',

	p: {
		color: theme.palette.grey[100],
		fontWeight: 700,
	}
}))