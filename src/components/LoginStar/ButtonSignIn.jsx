import styled from "styled-components"

export const ButtonSignIn = ({ onClick, aliance }) => {
  return (
    <Button type="submit" onClick={onClick} $aliance={aliance}>
      Sign In
    </Button>
  )
}

const Button = styled.button`
  background-color: #0000;

  font-size: 1.1em;
  color: ${(props) =>
    props.$aliance ? "var(--color-login-light)" : "var(--color-login)"};

  border: none;
  border-radius: 0.5em;
  padding-block: 0.5em;
  margin-block: 1em;

  width: 80%;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$aliance
        ? "var(--bg-color-login-star-blue)"
        : "var(--bg-color-login-star-red)"};
    box-shadow: 0em 0em 0.65em 0.35em
        ${(props) =>
          props.$aliance
            ? "var(--bg-color-login-star-blue)"
            : "var(--bg-color-login-star-red)"},
      2.5em 0.5em 5em 0.4em
        ${(props) =>
          props.$aliance
            ? "var(--bg-color-login-star-blue)"
            : "var(--bg-color-login-star-red)"},
      -2.5em -0.5em 5em 0.4em
        ${(props) =>
          props.$aliance
            ? "var(--bg-color-login-star-blue)"
            : "var(--bg-color-login-star-red)"},
      inset 0em 0em 5em 0.4em
        ${(props) =>
          props.$aliance
            ? "var(--bg-color-login-star-blue)"
            : "var(--bg-color-login-star-red)"};
  }

  transition: background-color 150ms, box-shadow 125ms;
`
