import React from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'
import '../../styles/card.css'

const Cardy = ({project}) => (
      <div class="carrd">    
        <div class="header">
      <h1>{project.title}</h1>

      </div>
      <div className="row">
      <div class="avatar-container">
      <div class="photo">
      <img class="img" src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758_960_720.png" alt="none"/>
      </div>
      </div>   


      <div class="details-container">
      
      <p><span style={{color:"red"}}>{project.type}</span></p>
      <p>{project.description}</p>      
      
      <div></div>
      <div></div>
      <div></div>
      <a href={`${project.site}`} class="button instagram"><span class="gradient"></span>view project</a>
      </div>

      </div>  
      </div>
      
)

export default Cardy