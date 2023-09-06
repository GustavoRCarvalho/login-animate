import { styled } from "styled-components"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"

export const AnotherLoginsStar = () => {
  return (
    <>
      <LineWrapper>
        <LineSpan />
        <LineLabelSpan>OR</LineLabelSpan>
        <LineSpan />
      </LineWrapper>
      <ButtonsWrapper>
        <LoginAnotherButton>
          <GoogleIcon /> Log in with Google
        </LoginAnotherButton>
        <LoginAnotherButton>
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
`

const LineSpan = styled.span`
  background-color: var(--color-login-light);

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

  font-size: 1.1em;
  color: var(--color-login-light);

  border: none;
  border-radius: 0.5em;
  padding-block: 0.5em;
  margin-block: 0.2em;

  width: 100%;

  cursor: pointer;

  &:hover {
    background-color: var(--bg-color-login-google-gradient-light);
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