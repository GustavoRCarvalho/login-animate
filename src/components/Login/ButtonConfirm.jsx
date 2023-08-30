import styled from "styled-components"

export const ButtonConfirm = ({ onClick }) => {
  return <Button onClick={onClick}>Sign In</Button>
}

const Button = styled.button`
  background-color: #0000;

  font-size: 1.1em;

  border: none;
  border-radius: 0.5em;
  padding-block: 0.5em;

  width: 80%;

  cursor: pointer;

  &:hover {
    background-color: var(--bg-color-login-green);
    box-shadow: 0em 0em 0.65em 0.35em var(--bg-color-login-green),
      2.5em 0.5em 5em 0.4em var(--bg-color-login-green),
      -2.5em -0.5em 5em 0.4em var(--bg-color-login-green),
      inset 0em 0em 5em 0.4em var(--bg-color-login-green);
  }

  transition: background-color 150ms, box-shadow 125ms;
`
