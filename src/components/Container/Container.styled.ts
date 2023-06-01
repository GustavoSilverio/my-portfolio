import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerWrapper = styled(Box)(({ theme }) => ({
	minHeight: 'calc(100vh - 161px)',
	height: "100%",
	display: 'flex',
	justifyContent: 'center',

	padding: theme.spacing(0, 3),
	alignItems: 'center',
	maxWidth: '100%',
	animation: "fadeIn .3s ease",
	margin: theme.spacing(10, 0),

	"@keyframes fadeIn": {
		from: {
			opacity: 0,
			transform: "translateY(8px)"
		},
		
		to: {
			opacity: 1,
			transform: "translateY(0)"
		}
	}

}))