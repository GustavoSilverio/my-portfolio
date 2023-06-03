import { ContainerWrapper } from "../../components/Container/index";
import { ProjectCard } from "./ProjectCard";
import * as Styled from "./Projects.styled";
import Portfolio from "../../assets/portfolio.png";
import QrCode from "../../assets/qrCode.png";
import ToDoList from "../../assets/todolist.png";
import Crip from "../../assets/crip.png";
import { SiCsharp } from "react-icons/si";

export const Projects = () => {
  return (
    <ContainerWrapper>
      <Styled.Cards direction="row">
        <ProjectCard
          title="Portfolio"
          desc="Este é meu portfolio que desenvolvi com algumas
						tecnologias que gosto para mostrar um pouquinho de mim."
          linkGit="https://github.com/GustavoSilverio/my-portfolio"
          linkRed="https://gustavosilverio.netlify.app/"
          imagem={Portfolio}
        />

        <ProjectCard
          title="QrCode generator"
          desc="Neste projeto eu consumo uma api externa
						que gera qrCodes para criar uma UI para o usuário."
          linkGit="#"
          linkRed="#"
          imagem={QrCode}
        />

        <ProjectCard
          title="ToDoList"
          desc="Uma lista de tarefas full-stack desenvolvida com react,
						javaScript e C# para fins educativos."
          linkGit="https://github.com/GustavoSilverio/toDoList-auth-CLIENT"
          linkGit2="https://github.com/GustavoSilverio/toDoList-auth"
          Icon={SiCsharp}
          linkRed="https://to-do-list-auth-client.vercel.app/"
          imagem={ToDoList}
        />

        <ProjectCard
          title="Cripto"
          desc="UI criada para fins academicos com o intuito de criptografar
						uma frase ou texto com uma chave passada."
          linkGit="https://github.com/GustavoSilverio/criptografia"
          linkRed="https://criptografia-eight.vercel.app/"
          imagem={Crip}
        />

        <ProjectCard
          title="Em breve..."
          desc="Ainda estou desenvolvendo novos projetos para meu portfolio!"
        />

        <ProjectCard
          title="Em breve..."
          desc="Ainda estou desenvolvendo novos projetos para meu portfolio!"
        />
      </Styled.Cards>
    </ContainerWrapper>
  );
};
