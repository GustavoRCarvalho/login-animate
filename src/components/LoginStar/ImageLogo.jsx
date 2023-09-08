import { styled } from "styled-components"
import alianceLogo from "../../assets/star/Rebel_Alliance_logo.png"
import imperialLogo from "../../assets/star/Imperial_Emblem.svg"
import imperialChibiKylo from "../../assets/star/kylo.png"
import imperialChibiLuke from "../../assets/star/luke.png"
import imperialChibiFinn from "../../assets/star/finn.png"
import imperialChibiStorm from "../../assets/star/storm.png"

export const ImageLogo = ({ aliance }) => {
  if (aliance)
    return (
      <ImageWrapper>
        <ImageChibiLeft src={imperialChibiLuke} />
        <ImageChibiRight src={imperialChibiFinn} />
        <ImageAliance src={alianceLogo} />
      </ImageWrapper>
    )
  else
    return (
      <ImageWrapper>
        <ImageChibiLeft src={imperialChibiKylo} />
        <ImageChibiRight src={imperialChibiStorm} />
        <ImageImperial src={imperialLogo} />
      </ImageWrapper>
    )
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

const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageChibiLeft = styled.img`
  position: absolute;

  width: 10em;

  bottom: 0;
  left: 0;

  filter: drop-shadow(0 0 5px);
`

const ImageChibiRight = styled.img`
  position: absolute;

  width: 10em;

  top: 0;
  right: 0;

  filter: drop-shadow(0 0 5px);
`
