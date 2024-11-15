import styled from "styled-components"
import { Background } from "./Background"
import { useState } from "react"
import { InputLogin } from "./InputLogin"
import { ForgotPassword } from "./ForgotPassword"
import { MdEmail, MdLockOutline } from "react-icons/md"
import { AnotherLogins } from "./AnotherLogins"
import { GoSun } from "react-icons/go"
import { GoMoon } from "react-icons/go"

const initialState = {
  Email: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const Sunset = () => {
  const [open, setOpen] = useState(true)
  const [form, setForm] = useState(initialState)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <Background open={open} />
      <SunsetContainer $isOpen={open}>
        <LoginContainer>
          <LightDarkButton
            $isOpen={open}
            onClick={() => setOpen((state) => !state)}
          >
            <GoSun />
            <GoMoon />
          </LightDarkButton>
          <Text>SUNSET</Text>
          <form action="submit">
            <InputLogin
              Icon={MdEmail}
              type="text"
              label={"Email"}
              value={form.Email?.value}
              error={form.Email?.error !== ""}
              setValue={handleInput}
            />
            <InputLogin
              Icon={MdLockOutline}
              type="current-password"
              label={"Password"}
              value={form.Password?.value}
              error={form.Password?.error !== ""}
              setValue={handleInput}
            />
            <ForgotPassword />
            <LoginButton type="submit" onClick={handleSubmit}>
              Get Started
            </LoginButton>
          </form>
          <AnotherLogins />
        </LoginContainer>
      </SunsetContainer>
    </>
  )
}

const LightDarkButton = styled.button`
  position: absolute;

  right: 2em;
  top: 2em;

  background-color: transparent;
  border: none;

  svg {
    color: var(--color-login);
    width: 1.5em;
    height: 1.5em;
  }

  svg:nth-child(1) {
    display: ${(props) => (props.$isOpen ? "unset" : "none")};
  }
  svg:nth-child(2) {
    display: ${(props) => (props.$isOpen ? "none" : "unset")};
  }

  cursor: pointer;
`

const LoginButton = styled.button`
  font-size: 0.8em;
  background-color: var(--bg-color-button-login);
  color: var(--color-button-login);

  border: none;
  border-radius: 0.75em;

  width: 100%;

  padding: 0.75em;

  cursor: pointer;
`

const LoginContainer = styled.div`
  position: relative;
  background: linear-gradient(0deg, var(--bg-color-login) 20%, transparent);
  backdrop-filter: blur(10px);

  border-radius: 1.25em;

  min-width: 250px;

  padding: 2em;

  box-shadow: 0 3px 5px 1px var(--shadow-login);

  font-family: "Host Grotesk", sans-serif;
  letter-spacing: 0.06em;

  input,
  button {
    font-family: "Host Grotesk", sans-serif;
    letter-spacing: 0.06em;
  }
`

const Text = styled.span`
  color: var(--color-login);
`

const SunsetContainer = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;

  --color-login: ${(props) => (props.$isOpen ? "#000" : "#fff")};
  --bg-color-login: ${(props) => (props.$isOpen ? "#fff" : "#000")};
  --bg-color-button-login: ${(props) => (props.$isOpen ? "#333" : "#ffff")};
  --color-button-login: ${(props) => (props.$isOpen ? "#fff" : "#000")};
  --bg-color-input-login: ${(props) =>
    props.$isOpen ? "#dddddd75" : "#22222275"};
  --placeholder-input-login: ${(props) => (props.$isOpen ? "#666" : "#aaa")};
  --alt-bg-color-login: ${(props) => (props.$isOpen ? "#efefef" : "#010101")};
  --shadow-login: ${(props) => (props.$isOpen ? "#aaaaaa68" : "#ffffff58")};

  z-index: 1;
`
