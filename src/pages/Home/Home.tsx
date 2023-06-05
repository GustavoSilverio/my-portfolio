import { Stack, Typography } from "@mui/material";
import * as Styled from "./Home.styled";
import { ContainerWrapper } from "../../components/Container/index";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Curriculo from "../../assets/GustavoSilverio.pdf";

export const Home = () => {
  //TODO: Arrumar o clamp do title e do subtitle

  return (
    <ContainerWrapper>
      <Styled.Home>
        <Styled.About spacing={3}>
          <Typography variant="h2">
            {" "}
            Olá, sou <span>Gustavo Oliveira.</span>{" "}
          </Typography>

          <Typography variant="h4"> Um full-stack developer. </Typography>

          <Typography>
            Tenho 17 anos, sou um desenvolvedor full-stack, estou trabalhando
            atualmente com TypeScript, C# e SQL. também estudo na
            Etec MCM cursando programação para internet.
          </Typography>

          <Stack spacing={2} direction="row">
            <a href={Curriculo} download>
              <span className="download">
                <FiDownload />
              </span>
              resume
            </a>

            <span
              className="midias"
              onClick={() => window.open("https://github.com/GustavoSilverio")}
            >
              <BsGithub />
            </span>

            <span
              className="midias"
              onClick={() =>
                window.open("https://www.linkedin.com/in/gustavosilverioo/")
              }
            >
              <BsLinkedin />
            </span>
          </Stack>
        </Styled.About>
      </Styled.Home>
    </ContainerWrapper>
  );
};
