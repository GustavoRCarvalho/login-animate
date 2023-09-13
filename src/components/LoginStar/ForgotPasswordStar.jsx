import { styled } from "styled-components"

export const ForgotPasswordStar = () => {
  return <Span>Forget Your Passoword?</Span>
}

const Span = styled.span`
  font-size: 0.9em;

  cursor: pointer;
  color: #111;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`
