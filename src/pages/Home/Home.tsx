import { Button, Stack, Typography } from '@mui/material'
import * as Styled from './Home.styled'
import { ContainerWrapper } from '../../components/Container/index'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi'

export const Home = () => {

	//TODO: Arrumar o clamp do title e do subtitle

	return (
		<ContainerWrapper>
			<Styled.Home>
				<Styled.About spacing={3}>
					<Typography variant='h2'> Olá, sou <span>Gustavo Oliveira.</span> </Typography>
					
					<Typography variant='h4'> Um full-stack developer. </Typography>
					
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus varius odio non tellus suscipit, et egestas justo interdum.
						Morbi augue enim, ultricies sit amet nibh at, molestie laoreet nibh.
						Duis pharetra erat sem, id consequat nunc tempus sed. Aliquam fringilla ut mauris vel.
					</Typography>

					<Stack spacing={2} direction="row" >
						<Button>
							<span className='download'>
								<FiDownload/>
							</span>

							resume
						</Button>

						<span className="midias" onClick={() => window.open("https://github.com/GustavoSilverio")}>
							<BsGithub/>
						</span>

						<span className="midias" onClick={() => window.open("https://www.linkedin.com/in/gustavosilverioo/")}>
							<BsLinkedin/>
						</span>
					</Stack>
				</Styled.About>
			</Styled.Home>
		</ContainerWrapper>
	)
}