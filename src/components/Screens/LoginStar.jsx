import { styled } from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { useState } from "react"
import { handleSubmit } from "../Common/LoginshandleSubmit"
import { InputLoginStar } from "../LoginStar/InputLoginStar"
import { ButtonSignIn } from "../LoginStar/ButtonSignIn"
import { AnotherLoginsStar } from "../LoginStar/AnotherLoginsStar"
import { ImageLogo } from "../LoginStar/ImageLogo"

const initialState = {
  "Your Name": { value: "", error: "" },
  Email: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const LoginStar = () => {
  const [form, setForm] = useState(initialState)
  const [aliance, setAliance] = useState(true)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  return (
    <>
      <LoginContentLimit>
        <LoginCard $aliance={aliance}>
          <LoginContainer>
            <button onClick={() => setAliance((state) => !state)}>
              change
            </button>
            <InputWrapper>
              <InputLoginStar
                aliance={aliance}
                label={"Your Name"}
                placeholder={"First Last"}
                value={form["Your Name"]?.value}
                error={form["Your Name"]?.error !== ""}
                setValue={handleInput}
              />
              <InputLoginStar
                aliance={aliance}
                label={"Email"}
                placeholder={"you@email.com"}
                value={form.Email?.value}
                error={form.Email?.error !== ""}
                setValue={handleInput}
                type="email"
              />
              <InputLoginStar
                aliance={aliance}
                label={"Password"}
                placeholder={"XXXXXX"}
                value={form.Password?.value}
                error={form.Password?.error !== ""}
                setValue={handleInput}
                type="password"
              />
            </InputWrapper>
            <ButtonSignIn
              aliance={aliance}
              onClick={() => handleSubmit({ form: form, setForm: setForm })}
            />
            <AnotherLoginsStar aliance={aliance} />
          </LoginContainer>
          <ImageLogo aliance={aliance} />
        </LoginCard>
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

const LoginCard = styled.div`
  background-color: ${(props) => (props.$aliance ? "#eee" : "#1c1c1c")};
  border-radius: 1em;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;

  width: 100%;

  transition: background-color 200ms;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  padding-block: 1em;

  color: var(--color-login-light);
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  width: 80%;
`
