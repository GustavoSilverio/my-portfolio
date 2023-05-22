import React from "react";
import ReactDOM from "react-dom/client";
import { Rotas } from './routes/index'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "@mui/material";
import './style/global.css'
import { CssBaseline } from '@mui/material'
import { theme } from "./style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Rotas />
			</ThemeProvider>
		</Router>
	</React.StrictMode>
);
