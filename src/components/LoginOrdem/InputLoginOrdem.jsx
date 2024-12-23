import { useState } from "react"
import { styled } from "styled-components"

export const InputLoginOrdem = ({
  value = "",
  setValue = () => {},
  label,
  type = "text",
  error = true,
  autoComplete = "",
}) => {
  const [onFocus, setOnFocus] = useState(false)

  return (
    <InputContainer
      tabIndex={0}
      onFocus={() => setOnFocus(true)}
      onBlur={() => setOnFocus(false)}
      $error={error}
    >
      <Inputlabel $onFocus={value !== "" || onFocus}>{label}</Inputlabel>
      <Input
        value={value}
        onChange={(e) => setValue({ text: e.target.value, type: label })}
        type={type}
        autoComplete={autoComplete}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  margin-block: 1em;

  color: ${(props) =>
    props.$error ? "var(--color-login-error)" : "var(--color-login)"};
  border-bottom: 1px solid
    ${(props) =>
      props.$error ? "var(--color-login-error)" : "var(--color-login)"};
`

const Inputlabel = styled.label`
  position: absolute;
  background-color: transparent;

  font-size: 1.4em;

  pointer-events: none;
  font-size: ${(props) => props.$onFocus && "1em"};

  transform: ${(props) => props.$onFocus && "translateY(-100%)"};

  transition: transform 100ms, font-size 100ms;
`

const Input = styled.input`
  background-color: #0000;
  color: var(--color-login);

  width: 100%;

  padding-block: 0.4em;

  font-size: 1em;

  border: none;
  outline: none;
`
