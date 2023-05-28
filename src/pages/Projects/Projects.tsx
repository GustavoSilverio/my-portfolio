import { ContainerWrapper } from '../../components/Container/index';
import { ProjectCard } from './ProjectCard';
import * as Styled from './Projects.styled';
import QrCodeProj from '../../assets/qrCode.png'

export const Projects = () => {
	
	return (
		<ContainerWrapper>
			<Styled.Projects>
				<h1>Hello, projects</h1>

				<Styled.Cards>
					<ProjectCard
						title='sla'
						desc='eita pega, aqui seria a descrição na situação né, sla eu'
						linkGit='#'
						linkRed='#'
						imagem={QrCodeProj}
					/>
				</Styled.Cards>
			</Styled.Projects>
		</ContainerWrapper>
	)
}