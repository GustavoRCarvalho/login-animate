import { useLocation } from "react-router-dom"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"
import { ListMenuGhibli, MenuItemGhibli } from "./MenuGhibli"
import { AiOutlineMenu } from "react-icons/ai"
import { styled } from "styled-components"

const MenuItems = [
  {
    path: "login-ghibli",
    title: "Login Ghibli",
  },
  {
    path: "login-ordem-paranormal",
    title: "Login Ordem Paranormal",
  },
  {
    path: "login-disney",
    title: "Login Disney",
  },
]

export const Menu = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()
  const path = pathname.split("/")[1]

  // if (path === "login-ghibli") {
  return (
    <ListMenuGhibli $isOpen={isOpen}>
      {isOpen ? (
        MenuItems.map((item) => (
          <NoStyleLinkRouter key={item.path} to={item.path}>
            <MenuItemGhibli $isSelected={path === item.path} $isOpen={isOpen}>
              {item.title}
            </MenuItemGhibli>
          </NoStyleLinkRouter>
        ))
      ) : (
        <MenuIcon onClick={() => setIsOpen((state) => !state)} />
      )}
    </ListMenuGhibli>
  )
  // }
}

const MenuIcon = styled(AiOutlineMenu)`
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;

  cursor: pointer;
`
