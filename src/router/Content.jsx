import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { LoginGhibli } from "../components/Screens1/LoginGhibli"

export const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/login-ghibli" element={<LoginGhibli />}></Route>
        <Route path="*" element={<div>not found</div>}></Route>
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
