import { styled } from "styled-components"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"

export const Card = ({ link, title, src }) => {
  return (
    <LinkCustom to={link}>
      <CardContainer $src={src}>{title}</CardContainer>
    </LinkCustom>
  )
}

const LinkCustom = styled(NoStyleLinkRouter)`
  margin: 1em;
`

const CardContainer = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 1em;

  background: url(${(props) => props.$src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 15em;
  height: 20em;

  cursor: pointer;

  &:hover,
  &:active {
    width: 16em;
    height: 21em;
  }

  transition: width 400ms, height 400ms;
`
