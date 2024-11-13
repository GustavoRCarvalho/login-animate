import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { LoginOrdem } from "../components/LoginOrdem/LoginOrdem"
import { LoginGhibli } from "../components/LoginGhibli/LoginGhibli"
import { Futuristic } from "../components/Futuristic/Futuristic"
import { Retro } from "../components/Retro/Retro"

export const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/login-ordem-paranormal" element={<LoginOrdem />} />
        <Route path="/futuristic" element={<Futuristic />} />
        <Route path="/retro" element={<Retro />} />
        <Route path="*" element={<LoginGhibli />} />
        {/* <Route path="/*" element={<div>not found</div>} /> */}
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
