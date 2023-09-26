import { styled } from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { Card } from "../Home/Card"
import ghibliImage from "../../assets/home/ghibliImage.png"
import ordemImage from "../../assets/home/ordemImage.png"
// import starImage from "../../assets/home/starImage.png"
import retroImage from "../../assets/home/retroImage.png"
import futuristicImage from "../../assets/home/futuristicImage.png"

export const Home = () => {
  return (
    <HomeContentLimit>
      <Card link="login-ghibli" title={"Ghibli"} src={ghibliImage} />
      <Card
        link="login-ordem-paranormal"
        title={"Ordem Paranormal"}
        src={ordemImage}
      />
      <Card
        link="futuristic"
        title={"Futuristic Windows"}
        src={futuristicImage}
      />
      <Card link="retro" title={"Retro"} src={retroImage} />
      {/* <Card link="login-start-wars" title={"Start Wars"} src={starImage} /> */}
    </HomeContentLimit>
  )
}

const HomeContentLimit = styled(ContentLimit)`
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
