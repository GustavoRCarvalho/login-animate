import { styled } from "styled-components"

export const ForgotPassword = () => {
  return <Span>Forget Your Passoword?</Span>
}

const Span = styled.span`
  font-size: 0.9em;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
