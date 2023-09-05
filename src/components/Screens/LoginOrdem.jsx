import { styled } from "styled-components"
import { BackgroundImage } from "../LoginOrdem/backgroundImage"
import { ContentLimit } from "../Common/ContentLimit"
import { Logo } from "../LoginGhibli/Logo"
import ordemLogo from "../../assets/ordem/ordemLogo.png"
import { useEffect, useState } from "react"
import { ButtonConfirmOrdem } from "../LoginOrdem/ButtonConfirmOrdem"
import { handleSubmit } from "../Common/LoginshandleSubmit"
import { InputLoginOrdem } from "../LoginOrdem/InputLoginOrdem"
import { AnotherLogins } from "../LoginGhibli/AnotherLogins"
import { ForgotPassword } from "../LoginGhibli/ForgotPassword"

const initialState = {
  User: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const LoginOrdem = () => {
  const [form, setForm] = useState(initialState)
  const [porcent, setPorcent] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  useEffect(() => {
    if (form.User.value !== "" && form.Password.value !== "") {
      setPorcent(80)
      setIsReady(true)
    } else if (form.User.value !== "" || form.Password.value !== "") {
      setPorcent(40)
      setIsReady(false)
    } else {
      setPorcent(0)
      setIsReady(false)
    }
  }, [form])

  return (
    <>
      <BackgroundImage porcent={porcent} ready={isHover} />
      <LoginContentLimit>
        <LoginContainer>
          <Logo src={ordemLogo} />
          <InputWrapper>
            <InputLoginOrdem
              label={"User"}
              value={form.User?.value}
              error={form.User?.error !== ""}
              setValue={handleInput}
            />
            <InputLoginOrdem
              label={"Password"}
              value={form.Password?.value}
              error={form.Password?.error !== ""}
              setValue={handleInput}
              type="password"
            />
            <ForgotPassword />
          </InputWrapper>
          <ButtonConfirmOrdem
            onClick={() => handleSubmit({ form: form, setForm: setForm })}
            setIsHover={setIsHover}
            isReady={isReady}
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
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const LoginContainer = styled.div`
  backdrop-filter: blur(4px);
  border-radius: 1em;

  font-family: "Caveat", cursive;

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
