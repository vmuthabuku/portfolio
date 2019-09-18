import React from "react"
import '../styles/global.css'

const Header = ({children}) => (
  <>
  <div className="nav">
  <div className="nav-header">
    <div className="nav-title">
      
    </div>
  </div>
  
  <div className="nav-links">
    <a href='/'>home</a>   
    <a href='/projects'>projects</a> 
    <a href='/blog'>blog</a> 
  </div>
  
</div>
{children}
</>
)

export default Header
