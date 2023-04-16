import React from "react"
import logo from "./assets/lunarfall.png"
import background from "./assets/lunarfall.mp4"
import "./App.css"

export const App: React.FC = () => {
  return (
    <div className="main-page">
        <img src={logo} alt="logo" className="main-logo"/>
        <button className="main-button" 
          onClick={()=>{
            window.open("https://discord.com/invite/Q5mu6bezmE", '_blank')
          }}>
          Discord
        </button>
        <span>Novidades em breve</span>
        <video autoPlay loop muted >
          <source src={background} type="video/mp4"/>
        </video>
    </div>
    )
}
