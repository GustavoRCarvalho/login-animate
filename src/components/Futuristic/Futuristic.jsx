import styled from "styled-components"
import { FuturisticCard } from "./Card"
import { useState } from "react"
import image1 from "../../assets/futuristic/animeImage.png"
import image2 from "../../assets/futuristic/animeMountains.png"
import image3 from "../../assets/futuristic/animeMontainsNight.png"

export const Futuristic = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMoveMouse(e) {
    const { clientY, clientX } = e
    setPosition({ x: clientX, y: clientY })
  }

  return (
    <FuturisticContainer onPointerMove={handleMoveMouse}>
      {position.x !== 0 &&
        position.x !== window.innerWidth - 1 &&
        position.y !== 0 &&
        position.y !== window.innerHeight - 1 && (
          <MouseEffect y={position.y} x={position.x} />
        )}
      <FuturisticCard
        image={image1}
        borderColor={"var(--primary-blue-futuristic)"}
      />
      <FuturisticCard
        image={image2}
        borderColor={"var(--primary-light-blue-futuristic)"}
      />
      <FuturisticCard
        image={image3}
        borderColor={"var(--primary-orange-futuristic)"}
      />
    </FuturisticContainer>
  )
}

const MouseEffect = styled.div.attrs((props) => ({
  style: {
    left: props.x,
    top: props.y,
  },
}))`
  box-shadow: 2.5em 2.5em 6em 1.5em var(--primary-light-blue-futuristic),
    -2.5em -2.5em 6em 1.5em var(--primary-light-blue-futuristic),
    2.5em -2.5em 6em 1.5em var(--primary-light-blue-futuristic),
    -2.5em 2.5em 6em 1.5em var(--primary-light-blue-futuristic);
  position: fixed;
`

const FuturisticContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
