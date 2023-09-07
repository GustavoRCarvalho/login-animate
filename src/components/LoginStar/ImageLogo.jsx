import { styled } from "styled-components"
import alianceLogo from "../../assets/star/Rebel_Alliance_logo.png"
import imperialLogo from "../../assets/star/Imperial_Emblem.svg"

export const ImageLogo = ({ aliance }) => {
  if (aliance) return <ImageAliance src={alianceLogo} />
  else return <ImageImperial src={imperialLogo} />
}

const ImageAliance = styled.img`
  width: 60%;
  color: var(--bg-color-login-star-blue);

  filter: drop-shadow(0 0 20px);

  user-select: none;
`

const ImageImperial = styled.img`
  width: 60%;
  color: var(--bg-color-login-star-red);

  filter: drop-shadow(0 0 20px);

  user-select: none;
`
