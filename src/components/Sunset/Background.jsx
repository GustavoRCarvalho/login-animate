import styled, { keyframes } from "styled-components"
import img from "../../assets/sunset/filtro.svg"
import imgblack from "../../assets/sunset/filtroblack.svg"

export const Background = ({ open }) => {
  return (
    <BackgroundContainer $isOpen={open}>
      <LineWrapper>
        {Array.apply(null, Array(18)).map((_, index) => (
          <Line key={index} />
        ))}
      </LineWrapper>
      <Column1 />
      <Column2 />
      <FiltroImg $url={open ? img : imgblack} />
      <BlurShadow />
      {!open && <SunsetShadow />}
    </BackgroundContainer>
  )
}

const filtroRotate = keyframes`
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg) translateX(20%);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
`

const FiltroImg = styled.div`
  background: ${(props) => `url(${props.$url})`} no-repeat;
  background-size: 60% 90%;
  background-position: 20% 50%;

  position: absolute;

  width: 100%;
  height: 100%;
  animation: ${filtroRotate} 20s ease-in-out infinite;
`

const sunsetAppers = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0; 
  }
`

const SunsetShadow = styled.div`
  background: radial-gradient(at top left, #ff880042, transparent);
  position: absolute;

  left: 0;
  top: 0;
  opacity: 0;

  width: 100%;
  height: 100%;

  animation: ${sunsetAppers} 2s linear;
`

const BlurShadow = styled.div`
  position: absolute;

  left: 0;
  top: 0;

  backdrop-filter: var(--backdrop-filter);

  width: 100%;
  height: 100%;
`

const BackgroundContainer = styled.div`
  --bg-color-light: ${(props) => (props.$isOpen ? "#fff1b2" : "#1b293f")};
  --bg-color-shadow: ${(props) => (props.$isOpen ? "#ccc8ae" : "#030307")};
  --backdrop-filter: ${(props) =>
    props.$isOpen ? "blur(10px)" : "blur(20px)"};
  --height: ${(props) => (props.$isOpen ? "1em" : "3em")};
  --gap: ${(props) => (props.$isOpen ? "2em" : "1em")};
  --transform: ${(props) =>
    props.$isOpen
      ? `matrix3d(
    1,
    -0.0625,
    0,
    0.0015,
    0,
    1.5,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  )`
      : `matrix3d(25, -2, 0, 0.005, 0, 1.5, 0, 0, 0, 0, 1, 0, 100, -100, 0, 1)`};

  background-color: var(--bg-color-light);
  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
`

const LineWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  height: 130vh;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  transform-origin: 100% 0;
  transform: var(--transform);
  transition: 2s ease-out;
`

const Column1 = styled.div`
  background-color: var(--bg-color-shadow);
  position: absolute;
  right: 10%;

  width: 1em;
  height: 100%;
`

const Column2 = styled.div`
  background-color: var(--bg-color-shadow);
  opacity: 0.2;
  position: absolute;
  left: 15%;

  width: 2em;
  height: 100%;
`

const Line = styled.div`
  background: linear-gradient(45deg, transparent 50%, var(--bg-color-shadow));

  width: 100%;
  height: var(--height);
  transition: 2s ease-out;
`
