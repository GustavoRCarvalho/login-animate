import { styled } from "styled-components"

export const ForgotPassword = () => {
  return <Span>Forget password?</Span>
}

const Span = styled.span`
  display: block;
  font-size: 0.75em;
  width: 100%;
  text-align: end;
  color: var(--color-login);

  margin-block: 0.25em 1em;

  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`
