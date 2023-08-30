import { styled } from "styled-components"
import { ButtonConfirm } from "../Login/ButtonConfirm"
import { InputLogin } from "../Login/InputLogin"
import { useState } from "react"
import audio from "../../assets/audios/loginGhibliAudio.mp3"
import { PlayerGhibli } from "../common/PlayerGhibli"

export const Login = () => {
  const [form, setForm] = useState({})

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: text }
    })
  }

  return (
    <LoginBackground>
      <PlayerGhibli audio={audio} />
      <LoginContainer>
        <LoginWrapper>
          LOGIN
          <InputWrapper>
            <InputLogin
              label={"User"}
              value={form.User}
              setValue={handleInput}
            />
            <InputLogin
              label={"Password"}
              value={form.Password}
              setValue={handleInput}
              type="password"
            />
          </InputWrapper>
          <ButtonConfirm />
        </LoginWrapper>
      </LoginContainer>
    </LoginBackground>
  )
}

const LoginBackground = styled.div`
  position: relative;
  background: url("/src/assets/77a266bb54fc65179ec0672d97268c3a.gif");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const LoginContainer = styled.div`
  backdrop-filter: blur(4px);

  width: 30em;
  height: 35em;
  margin-inline: 5%;

  border-radius: 1em;
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
  justify-content: space-between;

  width: 80%;
  height: 15%;
`
