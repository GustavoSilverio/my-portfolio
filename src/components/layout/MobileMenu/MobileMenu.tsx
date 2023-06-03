import { Stack, Typography } from "@mui/material";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";
import * as Styled from "./MobileMenu.styled";
import { IoClose } from "react-icons/io5";
import { BiCodeAlt, BiInfoCircle } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  const { showMenu, setShowMenu } = useMobileMenuContext();

  const handleRedirect = () => {
    const mensagemUrl = "Olá, tudo bem? Gostaria de fazer um orçamento!";
    const mensagemUrlFiltrada = window.encodeURIComponent(mensagemUrl);

    window.open(
      `https://api.whatsapp.com/send?phone=5511943352341&text=${mensagemUrlFiltrada}`
    );
    setShowMenu(false);
  };

  return (
    <Styled.MobileMenu className={showMenu ? "active" : undefined}>
      <Stack direction="row" className="title">
        <Typography variant="h1">GO_</Typography>
        <button onClick={() => setShowMenu(false)}>
          <span>
            <IoClose />
          </span>
        </button>
      </Stack>
      <Styled.NavigationWrapper>
        <li onClick={() => setShowMenu(false)}>
          <NavLink to="/">
            <span>
              <BiInfoCircle />
            </span>

            <Typography>about me</Typography>
          </NavLink>
        </li>

        <li onClick={() => setShowMenu(false)}>
          <NavLink to="/projects">
            <span>
              <BiCodeAlt />
            </span>

            <Typography>projects</Typography>
          </NavLink>
        </li>

        <li>
          <button onClick={() => handleRedirect()}>
            <span>
              <BsWhatsapp />
            </span>

            <Typography>contact</Typography>
          </button>
        </li>
      </Styled.NavigationWrapper>
    </Styled.MobileMenu>
  );
};
