import { useLocation } from "react-router-dom"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"
import { ListMenuGhibli, MenuItemGhibli } from "./MenuGhibli"
import { AiOutlineMenu } from "react-icons/ai"
import { styled } from "styled-components"
import { ListMenuOrdem, MenuItemOrdem } from "./MenuOrdem"
// import { ListMenuStart, MenuItemStart } from "./MenuStart"
import { ListMenuFuturistic, MenuItemFuturistic } from "./MenuFuturistic"

const MenuItems = [
  {
    path: "",
    title: "Home",
  },
  {
    path: "login-ghibli",
    title: "Ghibli",
  },
  {
    path: "login-ordem-paranormal",
    title: "Ordem Paranormal",
  },
  // {
  //   path: "login-start-wars",
  //   title: "Start Wars",
  // },
  {
    path: "futuristic",
    title: "Futuristic Windows",
  },
  {
    path: "retro",
    title: "Retro",
  },
]

export const Menu = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()
  const path = pathname.split("/")[1]

  if (path === "login-ordem-paranormal") {
    return (
      <ListMenuOrdem $isOpen={isOpen}>
        {isOpen ? (
          MenuItems.map((item) => (
            <NoStyleLinkRouter key={item.path} to={item.path}>
              <MenuItemOrdem $isSelected={path === item.path} $isOpen={isOpen}>
                {item.title}
              </MenuItemOrdem>
            </NoStyleLinkRouter>
          ))
        ) : (
          <MenuIcon onClick={() => setIsOpen((state) => !state)} />
        )}
      </ListMenuOrdem>
    )
  } else if (path === "login-ghibli") {
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
    // } else if (path === "login-start-wars") {
    //   return (
    //     <ListMenuStart $isOpen={isOpen}>
    //       {isOpen ? (
    //         MenuItems.map((item) => (
    //           <NoStyleLinkRouter key={item.path} to={item.path}>
    //             <MenuItemStart $isSelected={path === item.path} $isOpen={isOpen}>
    //               {item.title}
    //             </MenuItemStart>
    //           </NoStyleLinkRouter>
    //         ))
    //       ) : (
    //         <MenuIcon onClick={() => setIsOpen((state) => !state)} />
    //       )}
    //     </ListMenuStart>
    //   )
  } else if (path === "futuristic") {
    return (
      <ListMenuFuturistic $isOpen={isOpen}>
        {isOpen ? (
          MenuItems.map((item) => (
            <NoStyleLinkRouter key={item.path} to={item.path}>
              <MenuItemFuturistic
                $isSelected={path === item.path}
                $isOpen={isOpen}
              >
                {item.title}
              </MenuItemFuturistic>
            </NoStyleLinkRouter>
          ))
        ) : (
          <MenuIcon onClick={() => setIsOpen((state) => !state)} />
        )}
      </ListMenuFuturistic>
    )
  } else if (path === "retro") {
    return (
      <ListMenuFuturistic $isOpen={isOpen}>
        {isOpen ? (
          MenuItems.map((item) => (
            <NoStyleLinkRouter key={item.path} to={item.path}>
              <MenuItemFuturistic
                $isSelected={path === item.path}
                $isOpen={isOpen}
              >
                {item.title}
              </MenuItemFuturistic>
            </NoStyleLinkRouter>
          ))
        ) : (
          <MenuIcon onClick={() => setIsOpen((state) => !state)} />
        )}
      </ListMenuFuturistic>
    )
  }
}

const MenuIcon = styled(AiOutlineMenu)`
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;

  cursor: pointer;
  pointer-events: all;
`
