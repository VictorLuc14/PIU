import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards'
import Tema from './Tema'
import Children from './Children'
import gojo from './assets/gojo.png'
import Ken from './assets/kenjaku.png'

function App() {
  return (
    <>
    <Tema>  
      <Children>
        <Cards img={gojo} title={"gojo"} description={"jajaja"}/>
        <Cards img={Ken} title={"kenjaku"} description={"jajaja"}/>
        <Cards img={gojo} title={"gojo"} description={"jajaja"}/>
        <Cards img={gojo} title={"gojo"} description={"jajaja"}/>
        <Cards img={gojo} title={"gojo"} description={"jajaja"}/>
        <Cards img={gojo} title={"gojo"} description={"jajaja"}/>
      </Children>
    </Tema>
    </>
  )
}

export default App
