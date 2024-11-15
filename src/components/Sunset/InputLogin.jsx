import { styled } from "styled-components"

export const InputLogin = ({
  Icon = <></>,
  value = "",
  setValue = () => {},
  label,
  type = "text",
  error = true,
}) => {
  return (
    <InputContainer tabIndex={0} $error={error}>
      <Icon />
      <Input
        value={value}
        onChange={(e) => setValue({ text: e.target.value, type: label })}
        placeholder={label}
        type={type}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  font-size: 0.8em;
  position: relative;
  background-color: var(--bg-color-input-login);

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;

  width: calc(100% - 1.5em);
  margin-top: 1em;
  padding: 0.5em 0.75em;

  color: ${(props) =>
    props.$error ? "var(--color-login-error)" : "var(--color-login)"};

  border-radius: 0.75em;

  svg {
    width: 2em;
    height: 2em;

    color: #666;
  }
`

const Input = styled.input`
  background-color: transparent;
  color: var(--color-login);

  width: 100%;

  font-size: 1em;

  border: none;
  outline: none;

  &::placeholder {
    color: var(--placeholder-input-login);
  }
`
