import { styled } from "styled-components"
import { ButtonConfirm } from "./ButtonConfirm"
import { InputLogin } from "./InputLogin"
import { useState } from "react"
import audio from "../../assets/audios/loginGhibliAudio.mp3"
import { PlayerGhibli } from "../Common/PlayerGhibli"
import { ForgotPassword } from "./ForgotPassword"
import { Logo } from "./Logo"
import { ContentLimit } from "../Common/ContentLimit"
import logoImg from "../../assets/ghibli/ghibliLogo.svg"
import backgroundImg from "../../assets/ghibli/77a266bb54fc65179ec0672d97268c3a.gif"
import { AnotherLogins } from "./AnotherLogins"
import { handleSubmit } from "../Common/LoginshandleSubmit"

const initialState = {
  User: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const LoginGhibli = () => {
  const [form, setForm] = useState(initialState)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  return (
    <>
      <LoginBackgroundImage src={backgroundImg} />
      <LoginContentLimit>
        <PlayerGhibli
          audio={audio}
          title="Spirited Away: Always With Me cover by Deneb"
        />
        <LoginContainer>
          <Logo src={logoImg} alt="logo" />
          <InputWrapper>
            <InputLogin
              label={"User"}
              value={form.User?.value}
              error={form.User?.error !== ""}
              setValue={handleInput}
            />
            <InputLogin
              label={"Password"}
              value={form.Password?.value}
              error={form.Password?.error !== ""}
              setValue={handleInput}
              type="password"
            />
            <ForgotPassword />
          </InputWrapper>
          <ButtonConfirm
            onClick={() => handleSubmit({ form: form, setForm: setForm })}
          />
          <AnotherLogins />
        </LoginContainer>
      </LoginContentLimit>
    </>
  )
}

const LoginContentLimit = styled(ContentLimit)`
  height: 100vh;

  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const LoginBackgroundImage = styled.img`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  object-fit: cover;
`

const LoginContainer = styled.div`
  backdrop-filter: blur(4px);
  border-radius: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 30em;
  min-width: min-content;
  min-height: min-content;

  padding-block: 1em;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  width: 80%;
`
