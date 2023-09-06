import { styled } from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { useState } from "react"
import { handleSubmit } from "../Common/LoginshandleSubmit"
import { InputLoginStar } from "../LoginStar/InputLoginStar"
import { ButtonSignIn } from "../LoginStar/ButtonSignIn"
import { AnotherLoginsStar } from "../LoginStar/AnotherLoginsStar"

const initialState = {
  "Your Name": { value: "", error: "" },
  Email: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const LoginStar = () => {
  const [form, setForm] = useState(initialState)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  return (
    <>
      <LoginContentLimit>
        <LoginContainer>
          <InputWrapper>
            <InputLoginStar
              label={"Your Name"}
              placeholder={"First Last"}
              value={form["Your Name"]?.value}
              error={form["Your Name"]?.error !== ""}
              setValue={handleInput}
            />
            <InputLoginStar
              label={"Email"}
              placeholder={"you@email.com"}
              value={form.Email?.value}
              error={form.Email?.error !== ""}
              setValue={handleInput}
              type="email"
            />
            <InputLoginStar
              label={"Password"}
              placeholder={"********"}
              value={form.Password?.value}
              error={form.Password?.error !== ""}
              setValue={handleInput}
              type="password"
            />
          </InputWrapper>
          <ButtonSignIn
            onClick={() => handleSubmit({ form: form, setForm: setForm })}
          />
          <AnotherLoginsStar />
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
  background-color: #eee;
  border-radius: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 30em;
  min-width: min-content;
  min-height: min-content;

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
