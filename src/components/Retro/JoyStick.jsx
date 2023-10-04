import { useEffect, useState } from "react"
import styled from "styled-components"

export const JoyStick = ({ position, setPosition }) => {
  const [isGrab, setIsGrab] = useState(false)
  const isMouve = JSON.stringify(position) !== `{"x":40,"y":40}`

  const handleDrag = (e) => {
    if (isGrab) {
      const boundingBox = e.target.getBoundingClientRect()
      let x = e.clientX - boundingBox.left - 10
      let y = parseInt(e.clientY - boundingBox.top - 10)
      x = x > 80 ? 80 : x < 0 ? 0 : x
      y = y > 80 ? 80 : y < 0 ? 0 : y

      setPosition({ x: x, y: y })
    }
  }

  useEffect(() => {
    const Interval = setTimeout(() => {
      if (!isGrab) {
        setPosition({ x: 40, y: 40 })
      }
    }, 100)

    return () => {
      clearInterval(Interval)
    }
  }, [isMouve, isGrab, setPosition])

  return (
    <Base
      onMouseMove={(e) => handleDrag(e)}
      onTouchMove={(e) => handleDrag(e.touches[0])}
      onMouseDown={() => setIsGrab(true)}
      onTouchStart={() => setIsGrab(true)}
      onTouchCancel={() => setIsGrab(false)}
      onTouchEnd={() => setIsGrab(false)}
      onMouseUp={() => setIsGrab(false)}
      onMouseLeave={() => setIsGrab(false)}
      $isGrab={isGrab}
    >
      <Stick y={position.y} x={position.x} $isGrab={isGrab} />
    </Base>
  )
}

const Base = styled.div.attrs((props) => ({
  style: {
    cursor: props.$isGrab ? "none" : "grab",
  },
}))`
  background-color: var(--bg-color-dark-purple);
  position: relative;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--color-black-border);
`

const Stick = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.$isGrab ? "#0f0" : "#f00",
    left: `calc(${props.x}%)`,
    top: `calc(${props.y}%)`,
    transition:
      props.x === 40 && props.y === 40 ? "left 500ms, top 500ms" : "none",
  },
}))`
  position: absolute;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  pointer-events: none;
`
