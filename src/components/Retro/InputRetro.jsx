import styled from "styled-components"

export const InputRetro = styled.input`
  background-color: var(--bg-color-purple);

  font-family: "Croissant One", cursive;
  text-transform: uppercase;

  border: 3px solid var(--color-black-border);
  border-radius: 0.5em;

  padding-block: 0.5em;
  padding-inline: 1em;

  &:focus {
    box-shadow: 0px 6px 0 -1px #0000002d, 0px 3px 10px 0px black;
    transform: translate(0px, -6px);
  }

  transition: 100ms;
`
