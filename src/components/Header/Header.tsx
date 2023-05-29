import { Typography } from '@mui/material';
import * as Styled from './Header.styled';
import { NavLink, redirect } from 'react-router-dom';

export const Header = () => {

	function handleContact() {
		const mensagemUrl = "Olá, tudo bem? Gostaria de fazer um orçamento!";

		const mensagemUrlFiltrada = window.encodeURIComponent(mensagemUrl);

		window.open(`https://api.whatsapp.com/send?phone=5511943352341&text=${mensagemUrlFiltrada}`)
	}

	return (
		<Styled.Header>
			<Typography onClick={() => redirect("/")} variant='h1'> GO_ </Typography>
				<Styled.Navigation>
					<li>
						<NavLink to="/">
							about me
						</NavLink>
					</li>
					
					<li>
						<NavLink to="/projects">
							projects
						</NavLink>
					</li>
				
					<li>
						<NavLink onClick={() => handleContact()}>
							contact
						</NavLink>
					</li>
				</Styled.Navigation>
		</Styled.Header>
	)
}