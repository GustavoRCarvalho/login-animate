import { styled } from "styled-components"
import { ButtonConfirm } from "../Login/ButtonConfirm"
import { InputLogin } from "../Login/InputLogin"
import { useState } from "react"
import audio from "../../assets/audios/loginGhibliAudio.mp3"
import { PlayerGhibli } from "../common/PlayerGhibli"
import { ForgotPassword } from "../Login/ForgotPassword"
import { Logo } from "../Login/Logo"
import { ContentLimit } from "../common/ContentLimit"

const initialState = {
  User: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const Login = () => {
  const [form, setForm] = useState(initialState)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  function handleSubmit() {
    const list = Object.keys(form)
    let haveError = false

    list.forEach((field) => {
      if (form[field]?.value === "") {
        setForm((state) => {
          return {
            ...state,
            [field]: { value: state[field].value, error: "Field Empty" },
          }
        })
        haveError = true
      }
    })
    if (!haveError) {
      list.forEach((field) => {
        setForm((state) => {
          return { ...state, [field]: { value: "", error: "" } }
        })
      })
    }
  }

  return (
    <LoginBackground>
      <LoginContentLimit>
        <PlayerGhibli
          audio={audio}
          title="Spirited Away: Always With Me cover by Deneb"
        />
        <LoginContainer>
          <LoginWrapper>
            <Logo src="/src/assets/ghibli/ghibliLogo.svg" alt="logo" />
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
            <ButtonConfirm onClick={handleSubmit} />
          </LoginWrapper>
        </LoginContainer>
      </LoginContentLimit>
    </LoginBackground>
  )
}

const LoginContentLimit = styled(ContentLimit)`
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const LoginBackground = styled.div`
  background: url("/src/assets/ghibli/77a266bb54fc65179ec0672d97268c3a.gif");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  font-family: Arial;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const LoginContainer = styled.div`
  backdrop-filter: blur(4px);

  width: 30em;
  height: 35em;
  margin-inline: 5%;

  border-radius: 1em;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  width: 80%;
`
