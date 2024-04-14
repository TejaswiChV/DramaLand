import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import Countries from './components/Countries'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Dramas from './components/Dramas'

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div >
    <Routes>
      <Route path="/" element={<Countries />}></Route>
      <Route path="/dramas" element={<Dramas />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
