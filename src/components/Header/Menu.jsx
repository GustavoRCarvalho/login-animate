import { useLocation } from "react-router-dom"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"
import { ListMenuGhibli, MenuItemGhibli } from "./MenuGhibli"
import { AiOutlineMenu } from "react-icons/ai"
import { styled } from "styled-components"
import { ListMenuOrdem, MenuItemOrdem } from "./MenuOrdem"
import { ListMenuFuturistic, MenuItemFuturistic } from "./MenuFuturistic"

const MenuComponents = {
  "login-ghibli": {
    title: "Ghibli",
    List: ListMenuGhibli,
    MenuItem: MenuItemGhibli,
  },
  sunset: {
    title: "Sunset",
    List: ListMenuGhibli,
    MenuItem: MenuItemGhibli,
  },
  "login-ordem-paranormal": {
    title: "Ordem Paranormal",
    List: ListMenuOrdem,
    MenuItem: MenuItemOrdem,
  },
  futuristic: {
    title: "Futuristic Windows",
    List: ListMenuFuturistic,
    MenuItem: MenuItemFuturistic,
  },
  retro: {
    title: "Retro",
    List: ListMenuFuturistic,
    MenuItem: MenuItemFuturistic,
  },
}

export const Menu = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()
  const path = pathname.split("/")[1]
  const pathLabel = path === "" ? "login-ghibli" : path
  const list = Object.keys(MenuComponents)
  const { List, MenuItem } = MenuComponents[pathLabel] ?? {
    List: ListMenuGhibli,
    MenuItem: MenuItemGhibli,
  }

  return (
    <List $isOpen={isOpen}>
      {isOpen ? (
        list.map((item) => (
          <NoStyleLinkRouter key={item} to={item}>
            <MenuItem $isSelected={pathLabel === item} $isOpen={isOpen}>
              {MenuComponents[item].title}
            </MenuItem>
          </NoStyleLinkRouter>
        ))
      ) : (
        <MenuIcon onClick={() => setIsOpen((state) => !state)} />
      )}
    </List>
  )
}

const MenuIcon = styled(AiOutlineMenu)`
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;

  cursor: pointer;
  pointer-events: all;
`
