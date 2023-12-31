import { useState } from "react"
import styled, { keyframes } from "styled-components"

export const FuturisticCard = ({ image, borderColor, Logo }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Card
        $borderColor={borderColor}
        onMouseDown={() => {
          setActive(true)
          setTimeout(() => {
            setActive(false)
          }, 250)
        }}
      >
        <CardImage $image={image} />
        {/* <CardBackgroundGradient /> */}
        <CardInsideBorder $borderColor={borderColor}>
          <Logo $active={active} />
        </CardInsideBorder>
      </Card>
    </>
  )
}

const Card = styled.div`
  position: relative;
  background-color: #9b9b9b;

  width: 20em;
  height: 30em;
  margin: 1em;

  border-radius: 1em;
  border: 2px solid ${(props) => props.$borderColor};

  overflow: hidden;
  cursor: pointer;
`

const CardInsideBorder = styled.div`
  position: absolute;
  background-color: #0000;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(90% - 2px);
  height: calc(92.5% + 2px);

  margin: 5%;

  border-radius: 0.5em;

  border: 1px solid ${(props) => props.$borderColor};
`

const translateImage = keyframes`
  /* valores de background-size devem ficar no minimo em 350% para estas imagens por conta do aspect-ratio e resolução delas. Ajuste a depender da necessidade. */

   0% {
    background-position: 36% 42%;
    background-size: 350%;
  }
  20% {
    background-position: 30% 35%;
    background-size: 350%;
  }
  
  20.0001% {
    background-position: 60% 85%;
    background-size: 500%;
  }
  
  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }
  
  40.0001% {
    background-position: 80% 42%;
    background-size: 350%;
  }
  
  60% {
    background-position: 84% 33%;
    background-size: 350%;
  }
  
  60.0001% {
    background-position: 0% 0%;
    background-size: 350%;
  }
  
  80% {
    background-position: 15% 4%;
    background-size: 350%;
  }
  
  80.0001% {
    background-position: 80% 10%;
    background-size: 350%;
  }
  
  100% {
    background-position: 72% 14%;
    background-size: 350%;
  }
`

const CardImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.$image})`,
  },
}))`
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 350%;
  background-position: 0% 0%;

  opacity: 0.8;

  animation: ${translateImage} infinite 15s linear;
`

// const translate = keyframes`
//   from {
//     background-position: 0% 0%;
//   }
//   to {
//     background-position: 0% -100%;
//   }
// `

// const CardBackgroundGradient = styled.div`
//   background: linear-gradient(
//     var(--primary-blue-futuristic),
//     var(--primary-blue-futuristic) 3px,
//     transparent 3px,
//     transparent 9px
//   );
//   background-size: 100% 9px;
//   height: 100%;
//   animation: ${translate} infinite 22s linear;
// `
