import React from "react"
import Link from 'gatsby-link'
import {Container} from 'semantic-ui-react'
import { graphql } from 'gatsby'
import Header from "../components/header"
import '../styles/blog.css'

const Blogpage = ({data}) =>
    (
        <div>
        <Header/>
        <Container text>
        <h1 className="header">Blog Posts</h1>
        <div className="author">
             <img src={require('../images/me.jpg')} alt="none"/>  
             <p>I am Vincent Muthabuku, I try to write sometimes <a href="https://twitter.com/VMuthabuku"> follow me on twitter </a> </p>          
        </div>

        <hr/><br/>
        
       
            {data.allMarkdownRemark.edges.map(post =>(
                <div key = {post.node.id}>
                    <h3 className="headers">{post.node.frontmatter.title}</h3>
                    <small>Posted By: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}> Read-More </Link>
                    <hr />

                </div>
            ))}
           
        </Container>
        </div>
        

    )

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges{
                node{
                    id
                    frontmatter{
                        path
                        title
                        date
                        author
                    }
                }
            }
        }

    }

`

export default Blogpage;