import React from 'react'
import { Card } from 'semantic-ui-react'

const Cardy= ({project}) => (
     <Card
        style={{width:"100%"}}
        href={`${project.site}`}
        header={project.title}
        meta={project.type}
        description={project.description}
  /> 
)

export default Cardy