import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { LoginOrdem } from "../components/Screens/LoginOrdem"
import { LoginGhibli } from "../components/Screens/LoginGhibli"
import { LoginStar } from "../components/Screens/LoginStar"

export const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/login-ghibli" element={<LoginGhibli />}></Route>
        <Route path="/login-ordem-paranormal" element={<LoginOrdem />}></Route>
        <Route path="/login-start-wars" element={<LoginStar />}></Route>
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
