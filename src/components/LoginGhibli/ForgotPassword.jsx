import { styled } from "styled-components"

export const ForgotPassword = () => {
  return <Span>Forget Your Password?</Span>
}

const Span = styled.span`
  font-size: 0.9em;

  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`
