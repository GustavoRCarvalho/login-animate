import styled from "styled-components"

export const ButtonConfirmOrdem = ({ onClick, setIsHover }) => {
  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      Sign In
    </Button>
  )
}

const Button = styled.button`
  background-color: #0000;

  font-size: 1.1em;

  border: none;
  border-radius: 0.5em;
  padding-block: 0.5em;
  margin-block: 1em;

  width: 80%;

  cursor: pointer;

  &:hover {
    background-color: var(--bg-color-login-google-red);
    box-shadow: 0em 0em 0.65em 0.35em var(--bg-color-login-google-red),
      2.5em 0.5em 5em 0.4em var(--bg-color-login-google-red),
      -2.5em -0.5em 5em 0.4em var(--bg-color-login-google-red),
      inset 0em 0em 5em 0.4em var(--bg-color-login-google-red);
  }

  transition: background-color 150ms, box-shadow 125ms;
`
