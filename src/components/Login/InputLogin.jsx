import { useState } from "react"
import { styled } from "styled-components"

export const InputLogin = ({
  value = "",
  setValue = () => {},
  label,
  type = "text",
}) => {
  const [onFocus, setOnFocus] = useState(false)

  return (
    <InputContainer
      tabIndex={0}
      onFocus={() => setOnFocus(true)}
      onBlur={() => setOnFocus(false)}
    >
      <Inputlabel $onFocus={value !== "" || onFocus}>{label}</Inputlabel>
      <Input
        value={value}
        onChange={(e) => setValue({ text: e.target.value, type: label })}
        type={type}
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

  color: var(--color-login);
  border-bottom: 1px solid var(--color-login);
`

const Inputlabel = styled.label`
  position: absolute;
  background-color: transparent;

  pointer-events: none;
  font-size: ${(props) => props.$onFocus && "0.8em"};

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
