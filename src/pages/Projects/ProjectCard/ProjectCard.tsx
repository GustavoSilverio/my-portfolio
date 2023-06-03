import {
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import * as Styled from "./ProjectCard.styled";
import { ProjectCardProps } from "./ProjectCard.types";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import React from "react";
import Loading from "../../../assets/loading.png";

export const ProjectCard = ({
  title,
  desc,
  linkGit,
  linkRed,
  imagem,
  linkGit2,
  Icon,
}: ProjectCardProps) => {
  return (
    <Styled.CardProj>
      <CardMedia
        sx={{
          height: 100,
          transition: "transform .3s ease",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        image={imagem ? imagem : Loading}
        title={title}
      />
      <CardContent className="content">
        <Typography className="title">{title}</Typography>

        <Typography className="desc">{desc}</Typography>
      </CardContent>
      <CardActions className="links">
        <Stack direction="row" spacing={1.75}>
          <Link href={linkGit} target={linkGit ? "_blank" : undefined}>
            <span>
              <BsGithub />
            </span>
          </Link>
          {linkGit2 && Icon && (
            <Link href={linkGit2} target="_blank">
              <span>{React.createElement(Icon)}</span>
            </Link>
          )}
          <Link href={linkRed} target="_blank">
            <span>
              <FaExternalLinkSquareAlt />
            </span>
          </Link>
        </Stack>
      </CardActions>
    </Styled.CardProj>
  );
};
