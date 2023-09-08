import { styled } from "styled-components"

export const InputLoginStar = ({
  value = "",
  setValue = () => {},
  label,
  placeholder,
  type = "text",
  error = true,
  aliance,
}) => {
  return (
    <InputContainer tabIndex={0} $aliance={aliance}>
      <Inputlabel>{label}</Inputlabel>
      <Input
        $aliance={aliance}
        placeholder={placeholder}
        value={value}
        $error={error}
        onChange={(e) => setValue({ text: e.target.value, type: label })}
        type={type}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;

  margin-block: 1em;

  color: ${(props) =>
    props.$aliance ? "var(--color-login-light)" : "var(--color-login)"};
`

const Inputlabel = styled.label`
  font-size: 1em;
`

const Input = styled.input`
  background-color: #0000;

  width: calc(100% - (1px + 0.7em * 2));

  padding: 0.7em;

  font-size: 1em;

  color: ${(props) => {
    if (props.$error) return "var(--color-login-error)"
    else if (props.$aliance) return "var(--color-login-light)"
    else if (!props.$aliance) return "var(--color-login)"
  }};
  border: none;
  border: 1px solid
    ${(props) => {
      if (props.$error) return "var(--color-login-error)"
      else if (props.$aliance) return "var(--color-login-light)"
      else if (!props.$aliance) return "var(--color-login)"
    }};
  border-radius: 0.5em;

  outline: none;
`
