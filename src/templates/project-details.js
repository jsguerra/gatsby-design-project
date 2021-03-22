import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import { GatsbyImage } from 'gatsby-plugin-image'
import { details, featured, content } from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt={title} />
        </div>
        <div className={content} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`