import styled from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { InputRetro } from "./InputRetro"
import { ButtonRetro } from "./ButtonRetro"
import { GiAchievement } from "react-icons/gi"
import { BsFillGearFill } from "react-icons/bs"
import Gamepad from "../../assets/retro/gamepad.svg"

export const Retro = () => {
  return (
    <ContentLimitCustom>
      <ContainerRetro>
        <IconGear />
        <Title>
          <Icon />
          retro
          <Icon />
        </Title>
        <InputWrapper>
          <InputRetro placeholder="User" type="text" />
          <InputRetro placeholder="Password" type="password" />
        </InputWrapper>
        <ButtonWrapper>
          <ButtonRetro>login</ButtonRetro>
          <ButtonRetro>reset</ButtonRetro>
        </ButtonWrapper>
      </ContainerRetro>
    </ContentLimitCustom>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Icon = styled(GiAchievement)``
const IconGear = styled(BsFillGearFill)`
  background-color: #0000002d;
  position: absolute;

  right: 1em;
  top: 1em;

  padding: 0.3em;

  border: 3px solid var(--color-black-border);
  border-radius: 0.5em;

  cursor: pointer;
`

const Title = styled.h1`
  background-color: var(--bg-color-orange);

  padding-block: 0.5em;
  padding-inline: 1em;

  display: flex;
  align-items: center;

  border: 3px solid var(--color-black-border);
  border-radius: 0.5em;

  user-select: none;
`

const ContentLimitCustom = styled(ContentLimit)`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ContainerRetro = styled.div`
  position: relative;
  background: url(${Gamepad});
  background-size: 2em;
  background-color: var(--bg-color-purple);

  font-family: "Croissant One", cursive;
  text-transform: uppercase;

  max-width: 25.5em;
  width: 100%;
  height: 80%;

  border: 3px solid var(--color-black-border);
  border-radius: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
