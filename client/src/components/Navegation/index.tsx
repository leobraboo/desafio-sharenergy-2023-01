import { GiCat, GiSittingDog, GiArchiveRegister, GiExitDoor } from "react-icons/gi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSide, Container, TextSide } from "./styles";

export function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <Container  >
      <div style={{ width: open ? "13rem" : "3rem", transition: "ease-in 500ms", display: "flex", flexDirection: "row", justifyContent: "flex-end" }} onClick={() => setOpen(!open)}>
        <IoArrowForwardCircleOutline size={30} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "ease-in 500ms", color: "white" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", padding: "5px", gap: "10px", marginTop: "4rem" }} >
        <ButtonSide as={Link} to="/cats">
          <GiCat size={25} style={{ marginRight: "10px" }} />
          <TextSide style={{ fontSize: open ? "18px" : "0px", transition: "ease-in 500ms" }}>Status Code</TextSide>
        </ButtonSide>
        <ButtonSide as={Link} to="/dogs">
          <GiSittingDog size={25} style={{ marginRight: "10px" }} />
          <TextSide style={{ fontSize: open ? "18px" : "0px", transition: "ease-in 500ms" }}>Random Dogs</TextSide>
        </ButtonSide>
        <ButtonSide as={Link} to="/cats">
          <GiArchiveRegister size={25} style={{ marginRight: "10px" }} />
          <TextSide style={{ fontSize: open ? "18px" : "0px", transition: "ease-in 500ms" }}>Cadastro</TextSide>
        </ButtonSide>
      </div>
      <ButtonSide style={{ marginTop: "50vh" }} as={Link} to="/sair">
          <GiExitDoor size={25} style={{ marginRight: "10px" }} />
          <TextSide style={{ fontSize: open ? "18px" : "0px", transition: "ease-in 500ms" }}>Sair</TextSide>
        </ButtonSide>
    </Container>
  )
}