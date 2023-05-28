import { Button, Stack, Typography } from '@mui/material'
import * as Styled from './Home.styled'
import { ContainerWrapper } from '../../components/Container/index'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi'
import { useEffect } from 'react';
import Chalk from 'chalk';

export const Home = () => {
	
	const slctedColor = Chalk.rgb(255, 0, 92)

	useEffect(() => {
		console.log(slctedColor(`Developed by:

			 ██████╗  █████╗            ██╗  
			██╔════╝ ██╔══██╗    ██████╗╚██╗ 
			██║  ██╗ ██║  ██║    ╚═════╝ ╚██╗
			██║  ╚██╗██║  ██║    ██████╗ ██╔╝
			╚██████╔╝╚█████╔╝    ╚═════╝██╔╝ 
			 ╚═════╝  ╚════╝            ╚═╝  
		`))
	})


	return (
		<ContainerWrapper>
			<Styled.Home>
				<Styled.About spacing={3}>
					<Typography variant='h2'> Olá, sou <span>Gustavo Oliveira.</span> </Typography>
					
					<Typography variant='h4'> Um frontend developer. </Typography>
					
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus varius odio non tellus suscipit, et egestas justo interdum.
						Morbi augue enim, ultricies sit amet nibh at, molestie laoreet nibh.
						Duis pharetra erat sem, id consequat nunc tempus sed. Aliquam fringilla ut mauris vel.
					</Typography>

					<Stack spacing={2} direction="row" >
						<Button>
							<span>
								<FiDownload/>
							</span>
							resume
						</Button>

						<span> <BsGithub/> </span>

						<span> <BsLinkedin/> </span>
					</Stack>
				</Styled.About>
			</Styled.Home>
		</ContainerWrapper>
	)
}