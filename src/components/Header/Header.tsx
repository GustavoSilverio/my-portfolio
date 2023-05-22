import { Typography } from '@mui/material';
import * as Styled from './Header.styled';
import { NavLink } from 'react-router-dom';

export const Header = () => {

	return (
		<Styled.Header>
			<Typography variant='h1'> GO_ </Typography>
				<Styled.Navigation>
					<li>
						<NavLink to="#">
							projects
						</NavLink>
					</li>
				
					<li>
						<NavLink to="#">
							about me
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