import React from "react"
//import { Link } from "gatsby"

import Header from "../components/header"
import Home from '../components/homepage'
// import Image from "../components/image"
import SEO from "../components/seo"
import 'semantic-ui-css/semantic.min.css'


const IndexPage = () => (
  <Header>
    <SEO title="Home" />
    <Home/>    
  </Header>
)

export default IndexPage
