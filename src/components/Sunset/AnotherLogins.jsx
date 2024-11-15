import { styled } from "styled-components"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { SiApple } from "react-icons/si"

export const AnotherLogins = () => {
  return (
    <>
      <LineWrapper>
        <LineSpan />
        <LineLabelSpan>Or sign in with</LineLabelSpan>
        <LineSpan />
      </LineWrapper>
      <ButtonsWrapper>
        <LoginAnotherButton>
          <FcGoogle />
        </LoginAnotherButton>
        <LoginAnotherButton>
          <AiFillGithub />
        </LoginAnotherButton>
        <LoginAnotherButton>
          <SiApple />
        </LoginAnotherButton>
      </ButtonsWrapper>
    </>
  )
}

const LineWrapper = styled.div`
  width: 100%;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--bg-color-button-login);

  margin-block: 1em;
`

const LineSpan = styled.span`
  background-color: var(--bg-color-button-login);

  flex: 1;
  height: 1px;
`

const LineLabelSpan = styled.span`
  margin-inline: 1em;

  user-select: none;
`

const LoginAnotherButton = styled.button`
  background-color: var(--bg-color-login);
  color: var(--bg-color-button-login);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1em;

  border: none;
  border-radius: 0.75em;

  padding-block: 0.4em;
  padding-inline: 2em;
  margin-block: 0.2em;

  box-shadow: 0 1px 2px 1px var(--shadow-login);

  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--alt-bg-color-login);
  }

  svg {
    color: var(--color-login);
    width: 1.15em;
    height: 1.15em;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;

  width: 100%;
`
