import { styled } from "styled-components"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"

export const AnotherLoginsStar = ({ aliance }) => {
  return (
    <>
      <LineWrapper $aliance={aliance}>
        <LineSpan $aliance={aliance} />
        <LineLabelSpan>OR</LineLabelSpan>
        <LineSpan $aliance={aliance} />
      </LineWrapper>
      <ButtonsWrapper>
        <LoginAnotherButton $aliance={aliance}>
          <GoogleIcon /> Log in with Google
        </LoginAnotherButton>
        <LoginAnotherButton $aliance={aliance}>
          <GithubIcon /> Log in with GitHub
        </LoginAnotherButton>
      </ButtonsWrapper>
    </>
  )
}

const LineWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-block: 1em;

  color: ${(props) =>
    props.$aliance ? "var(--color-login-light)" : "var(--color-login)"};
`

const LineSpan = styled.span`
  background-color: ${(props) =>
    props.$aliance ? "var(--color-login-light)" : "var(--color-login)"};

  flex: 1;
  height: 1px;
`

const LineLabelSpan = styled.span`
  margin-inline: 1em;

  user-select: none;
`

const LoginAnotherButton = styled.button`
  background-color: #0000;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Quicksand", sans-serif;
  font-size: 1.1em;
  color: ${(props) =>
    props.$aliance ? "var(--color-login-light)" : "var(--color-login)"};

  border: none;
  border-radius: 0.5em;
  padding-block: 0.5em;
  margin-block: 0.2em;

  width: 100%;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) =>
      props.$aliance
        ? "var(--bg-color-login-google-gradient-light)"
        : "var(--bg-color-login-google-gradient)"};
  }

  transition: background-color 150ms, box-shadow 150ms;
`

const GoogleIcon = styled(FcGoogle)`
  width: 1.8em;
  height: 1.8em;

  padding-right: 1em;
`
const GithubIcon = styled(AiFillGithub)`
  width: 1.8em;
  height: 1.8em;

  padding-right: 1em;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 80%;
`
