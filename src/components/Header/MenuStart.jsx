import { styled } from "styled-components"

export const ListMenuStart = styled.ul`
  background-color: #16161622;
  backdrop-filter: blur(3px);
  border-radius: 0.5em;
  width: min-content;

  list-style-type: none;
  display: flex;
  justify-content: center;

  font-family: "Quicksand", sans-serif;

  padding: 0;
  margin: auto;

  pointer-events: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    margin: 0.5em;
  }
`

export const MenuItemStart = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  width: max-content;

  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;

  margin: 0.5em;
  padding-block: 0.3em;
  padding-inline: 2em;

  border-radius: 0.5em;

  background-color: ${(props) =>
    props.$isSelected && "var(--bg-color-login-star-blue)"};

  pointer-events: all;

  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isSelected &&
    "0em 0em 0.65em 0.35em var(--bg-color-login-star-blue),0.5em 0.5em 3em 0.4em var(--bg-color-login-star-blue),-0.5em -0.5em 3em 0.4em var(--bg-color-login-star-blue),inset 0em 0em 5em 0.4em var(--bg-color-login-star-blue)"};

  transition: color 200ms;
`
