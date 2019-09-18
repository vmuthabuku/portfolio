import React from "react"
//import { Link } from "gatsby"

import Header from "../components/header"
import Cardy from '../components/Cards/cardy'
import '../styles/global.css'
import { portfolio } from '../projectss'

const Projects = () =>(
    <Header>
    <div className="cardds" >
                {portfolio.map((project, i) => (
                <Cardy project={project} key={i} />
        ))}
      </div>
        
    </Header>
)

export default Projects;