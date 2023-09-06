import { styled } from "styled-components"

export const InputLoginStar = ({
  value = "",
  setValue = () => {},
  label,
  placeholder,
  type = "text",
  error = true,
}) => {
  return (
    <InputContainer tabIndex={0}>
      <Inputlabel>{label}</Inputlabel>
      <Input
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
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  margin-block: 1em;
`

const Inputlabel = styled.label`
  font-size: 1em;
`

const Input = styled.input`
  background-color: #0000;

  width: 100%;

  padding: 0.7em;

  font-size: 1em;

  color: ${(props) =>
    props.$error ? "var(--color-login-error)" : "var(--color-login-light)"};
  border: none;
  border: 1px solid
    ${(props) =>
      props.$error ? "var(--color-login-error)" : "var(--color-login-light)"};
  border-radius: 0.5em;

  outline: none;
`
