import {
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Stack,
	Typography
} from '@mui/material'
import * as Styled from './ProjectCard.styled'
import { ProjectCardProps } from './ProjectCard.types'
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export const ProjectCard = ({
	title,
	desc,
	linkGit,
	linkRed,
	imagem
}: ProjectCardProps) => {
	return (
		<Styled.CardProj>
			<CardMedia
				sx={{
					height: 100,
				}}
				image={imagem}
				title={title}
				/>
			<CardContent className='content'>
				<Typography className="title">
					{title}
				</Typography>
				
				<Typography className="desc">
					{desc}
				</Typography>
			</CardContent>
			<CardActions className='links'>
				<Stack direction="row" spacing={1.75}>
					<Link
						href={linkGit}
						target="_blank"
						>
						<span>
							<BsGithub/>
						</span>
					</Link>
					<Link
						href={linkRed}
						target="_blank"
						>
						<span>
							<FaExternalLinkSquareAlt/>
						</span>
					</Link>
				</Stack>
			</CardActions>
		</Styled.CardProj>
	)
}