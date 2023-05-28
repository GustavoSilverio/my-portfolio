import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Cards = styled(Stack)(({ theme }) => ({
	flexWrap: 'wrap',
	gap: theme.spacing(7, 9),
	justifyContent: 'center',
	alignItems: 'center',

	maxWidth: 1108,
	width: "100%",
}))