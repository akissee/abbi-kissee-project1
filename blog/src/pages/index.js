import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
            <div>
              <GatsbyImage
                image={edge.node.heroImagegatsbyImageData}
                />
            </div>
            <div>
              {edge.node.body.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))

      }
    </ul>
  </Layout>
)
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id 
          title
          slug 
          body {
						childMarkdownRemark {
							excerpt
            }
          }
          heroImage {
						gatsbyImageData(
							layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
  }
`