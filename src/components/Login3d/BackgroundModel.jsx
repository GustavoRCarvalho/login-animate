import Spline from "@splinetool/react-spline"
import { styled } from "styled-components"

export const BackgroundModel = () => {
  return (
    <SplineCustom scene="https://prod.spline.design/gPjxJjuROxsaWLsr/scene.splinecode" />
  )
}

const SplineCustom = styled(Spline)`
  position: absolute;
  /* pointer-events: none; */

  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    width: 80% !important;
    height: 80% !important;
  }
`
