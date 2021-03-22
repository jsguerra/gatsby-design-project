import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// markup
const IndexPage = ({ data }) => {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={image} alt={data.file.name} />
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`