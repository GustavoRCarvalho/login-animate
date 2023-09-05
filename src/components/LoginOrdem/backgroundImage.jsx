import { styled } from "styled-components"
import ordemImage from "../../assets/ordem/static-assets-upload12428278481875804805.webp"
import paredeImage from "../../assets/ordem/parede.jpg"

export const BackgroundImage = ({ porcent, ready }) => {
  return (
    <BackgroundContainer>
      <BackgroundWall src={paredeImage} title="wall image" />
      <Background
        $show={porcent}
        $ready={ready}
        src={ordemImage}
        title="symbol image"
      />
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
`

const Background = styled.img`
  position: absolute;
  color: #f00d0d;

  height: 100%;

  object-fit: cover;
  user-select: none;

  ${(props) => props.$ready && "filter: drop-shadow(0 0 30px)"};
  opacity: ${(props) => props.$show / 100};
  transition: filter 500ms, opacity 2000ms;
`

const BackgroundWall = styled.img`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  object-fit: cover;
  user-select: none;

  filter: grayscale(1);
`
