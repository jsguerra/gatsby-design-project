import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, proj } from '../../styles/projects.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={proj}>
          { projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.title} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          )) }
        </div>
        <p>Like what you see? Email me at <a href={"mailto:" + contact }>{contact}</a> for a quote!</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          date
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`