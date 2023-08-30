import { AiOutlinePause } from "react-icons/ai"
import { BsPlay } from "react-icons/bs"
import { useAudio } from "./Audio"
import { styled } from "styled-components"
import { useState, useEffect } from "react"

export const PlayerGhibli = ({ audio, title }) => {
  const [playing, toggle] = useAudio(audio)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    setShowTitle(true)
    setTimeout(() => {
      setShowTitle(false)
    }, 10000)
  }, [playing])

  useEffect(() => {
    setShowTitle(true)
    setTimeout(() => {
      setShowTitle(false)
    }, 15000)
  }, [])

  console.log(playing)

  return (
    <ButtonPlayer onClick={toggle}>
      <PlayTitleContainer>
        <PlayTitle $show={showTitle}>{title}</PlayTitle>
      </PlayTitleContainer>

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

const PlayTitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 3em;

  display: flex;
  align-items: center;
`

const PlayTitle = styled.span`
  position: absolute;
  font-size: 1em;
  text-align: end;
  width: 100%;

  transform: translateX(${(props) => (props.$show ? 0 : 100)}%);
  transition: transform 3000ms;
`

const ButtonPlayer = styled.button`
  position: absolute;
  background-color: transparent;

  width: 40%;

  top: 1rem;
  right: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
`
