import { useState } from "react"
import styled from "styled-components"

export const BackgroundMouse = ({ children }) => {
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
      {children}
    </FuturisticContainer>
  )
}

const FuturisticContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
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
