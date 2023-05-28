import { CardActions, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material'
import * as Styled from './ProjectCard.styled'
import { ProjectCardProps } from './ProjectCard.types'
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi'

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
					height: 140,
				}}
				image={imagem}
				title={title}
			/>
			<CardContent>
				<Typography variant="h5">
					{title}
				</Typography>
				
				<Typography>
					{desc}
				</Typography>
			</CardContent>
			<CardActions>
				<Stack>
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
							<FiExternalLink/>
						</span>
					</Link>
				</Stack>
			</CardActions>
		</Styled.CardProj>
	)
}