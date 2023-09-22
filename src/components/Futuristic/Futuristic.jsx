import styled from "styled-components"
import { FuturisticCard } from "./Card"
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineInstagram,
} from "react-icons/ai"
import image1 from "../../assets/futuristic/animeImage.png"
import image2 from "../../assets/futuristic/animeMountains.png"
import image3 from "../../assets/futuristic/animeMontainsNight.png"
import { BackgroundMouse } from "./BackgroundMouse"

export const Futuristic = () => {
  return (
    <FuturisticContainer>
      <BackgroundMouse>
        <FuturisticCard
          image={image1}
          borderColor={"var(--primary-blue-futuristic)"}
          Logo={GoogleLogo}
        />
        <FuturisticCard
          image={image2}
          borderColor={"var(--primary-light-blue-futuristic)"}
          Logo={GitLogo}
        />
        <FuturisticCard
          image={image3}
          borderColor={"var(--primary-orange-futuristic)"}
          Logo={InstagramLogo}
        />
      </BackgroundMouse>
    </FuturisticContainer>
  )
}

const FuturisticContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const GitLogo = styled(AiFillGithub)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  transition: 250ms;
`
const InstagramLogo = styled(AiOutlineInstagram)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  transition: 250ms;
`
const GoogleLogo = styled(AiOutlineGoogle)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  transition: 250ms;
`
