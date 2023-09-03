import { styled } from "styled-components"
import ordemImage from "../../assets/ordem/static-assets-upload12428278481875804805.webp"

export const BackgroundImage = ({ porcent, ready }) => {
  return (
    <BackgroundContainer>
      <Background $ready={ready} src={ordemImage} />
      <BackgroundMask $show={-(porcent - 100)} />
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

const Background = styled.img`
  color: #f00d0d;

  height: 100%;

  object-fit: cover;

  ${(props) => props.$ready && "filter: drop-shadow(0 0 30px)"};
  transition: filter 500ms;
`

const BackgroundMask = styled.div`
  position: absolute;
  background-color: ${(props) => `rgba(36, 36, 36, ${props.$show / 100})`};

  height: 100%;
  width: 100%;

  object-fit: cover;
  transition: background-color 2000ms;
`
