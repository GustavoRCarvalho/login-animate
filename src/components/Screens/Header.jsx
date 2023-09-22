import { styled } from "styled-components"
import { Menu } from "../Header/Menu"
import { useState } from "react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768)

  function handleClickOutside(e) {
    if (e.target.id === "nav") {
      setIsOpen(false)
    }
  }

  return (
    <ContainerHeader>
      <ContainerLimiteMenu
        $isOpen={isOpen}
        id="nav"
        onClick={handleClickOutside}
      >
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </ContainerLimiteMenu>
    </ContainerHeader>
  )
}

const ContainerLimiteMenu = styled.nav`
  display: flex;
  align-items: start;

  width: min-content;
  height: min-content;

  padding-block: 1em;

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.$isOpen ? "100vw" : "auto")};
    height: ${(props) => (props.$isOpen ? "100vh" : "auto")};
    padding-block: 0;
  }
`

const ContainerHeader = styled.header`
  position: fixed;

  display: flex;
  justify-content: center;

  width: 100%;

  top: 0;

  z-index: 2;
  pointer-events: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    justify-content: start;
  }
`
