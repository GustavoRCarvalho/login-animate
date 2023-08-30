import { AiOutlinePause } from "react-icons/ai"
import { BsPlay } from "react-icons/bs"
import { useAudio } from "./Audio"
import { styled } from "styled-components"

export const PlayerGhibli = ({ audio }) => {
  const [playing, toggle] = useAudio(audio)

  return (
    <ButtonPlayer onClick={toggle}>
      {playing ? <PauseIcon /> : <PlayIcon />}
    </ButtonPlayer>
  )
}

const PauseIcon = styled(AiOutlinePause)`
  width: 3em;
  height: 3em;
`

const PlayIcon = styled(BsPlay)`
  width: 3em;
  height: 3em;
`

const ButtonPlayer = styled.button`
  position: absolute;
  background-color: transparent;

  top: 1rem;
  right: 1em;

  border: none;
`
