import { ContainerWrapper } from '../../components/Container/index';
import { ProjectCard } from './ProjectCard';
import * as Styled from './Projects.styled';
import Portfolio from '../../assets/portfolio.png';
import QrCode from '../../assets/qrCode.png';

export const Projects = () => {
	
	return (
		<ContainerWrapper>
				<Styled.Cards direction="row">
					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={Portfolio}
					/>

					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={QrCode}
					/>

					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={Portfolio}
					/>

					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={QrCode}
					/>

					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={Portfolio}
					/>

					<ProjectCard
						title='Projeto'
						desc='Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Phasellus varius odio non tellus suscipit.'
						linkGit='#'
						linkRed='#'
						imagem={QrCode}
					/>
				</Styled.Cards>
		</ContainerWrapper>
	)
}