import React from "react"
//import { Link } from "gatsby"

import Header from "../components/header"
import Cardy from '../components/Cards/cardy'
// import '../styles/global.css'
import { portfolio } from '../projectss'
import { Container } from 'semantic-ui-react'

const Projects = () =>(
    <Header>
     <Container text >
                {portfolio.map((project, i) => (
                <Cardy project={project} key={i} />
        ))}
       </Container>
        
    </Header>
)

export default Projects;