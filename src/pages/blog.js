import React from "react"
import Link from 'gatsby-link'
import {Container} from 'semantic-ui-react'
import { graphql } from 'gatsby'
import Header from "../components/header"

const Blogpage = ({data}) =>
    (
        <div>
        <Header/>
        <Container text>
        <h1 className="headers" style={{marginTop: '1em', color:"red"}}>Posts</h1><hr/><br/>
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