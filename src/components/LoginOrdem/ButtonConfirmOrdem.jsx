import styled from "styled-components"

export const ButtonConfirmOrdem = ({ onClick, setIsHover, isReady }) => {
  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={!isReady}
    >
      Sign In
    </Button>
  )
}

const Button = styled.button`
  background-color: #0000;

  font-family: "Caveat", cursive;

  font-size: 1.5em;

  border: none;
  border-radius: 0.2em;
  padding-block: 0.1em;
  margin-block: 0.5em;

  width: 80%;

  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};

  &:hover,
  &:active {
    background-color: ${(props) =>
      !props.disabled && "var(--bg-color-login-ordem-red)"};
    box-shadow: ${(props) =>
      !props.disabled &&
      "0em 0em 0.35em 0.15em var(--bg-color-login-ordem-red),1.5em 0.3em 3em 0.2em var(--bg-color-login-ordem-red),-1.5em -0.3em 3em 0.2em var(--bg-color-login-ordem-red),inset 0em 0em 3em 0.2em var(--bg-color-login-ordem-red)"};
  }

  transition: background-color 150ms, box-shadow 125ms;
`
