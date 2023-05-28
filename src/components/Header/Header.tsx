import { Typography } from '@mui/material';
import * as Styled from './Header.styled';
import { NavLink, redirect } from 'react-router-dom';

export const Header = () => {

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
						<NavLink to="#">
							contact
						</NavLink>
					</li>
				</Styled.Navigation>
		</Styled.Header>
	)
}