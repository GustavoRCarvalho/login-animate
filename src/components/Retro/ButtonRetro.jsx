import styled from "styled-components"

export const ButtonRetro = styled.button`
  background-color: var(--button-color-yellow);

  color: var(--color-black-border);

  font-family: "Croissant One", cursive;
  text-transform: uppercase;

  border: 3px solid var(--color-black-border);
  border-radius: 0.5em;

  padding-block: 0.5em;
  padding-inline: 1em;

  box-shadow: 0px 4px 0 -1px var(--button-color-dark-yellow),
    0px 6px 10px 0px black;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 0 -1px var(--button-color-dark-yellow),
      0px 3px 5px 0px black;
    transform: translate(0px, 2px);
  }

  &:active {
    box-shadow: 0px 0px 0 0px var(--button-color-dark-yellow),
      0px 0px 0px 0px black;
    transform: translate(0px, 4px);
  }

  transition: 100ms;
`
