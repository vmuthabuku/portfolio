import React from 'react'

// import _ from 'lodash'
import { graphql } from 'gatsby'
// import Logo from '../images/logo.png'

import Link from 'gatsby-link'
import {Container} from 'semantic-ui-react'
import '../styles/blog.css'
          

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Container text>
    <div style={{marginBottom:"4em"}}>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    <hr></hr>
     <div className="author">
             <img src={require('../images/me.jpg')} alt="none"/>  
             <p>I am Vincent Muthabuku, I try to write sometimes <a href="https://twitter.com/VMuthabuku"> follow me on twitter </a> </p>          
        </div>
    </Container>
      
    
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`