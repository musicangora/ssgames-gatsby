import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Image from "../components/image"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Image />
      <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          padding: `140px 0 120px`,
          color: `white`,
          textAlign: `center`,
          fontFamily: `sans-serif`,
        }}
      >
        {/* <h1
          style={{
            fontSize: `36px`,
            fontWight: 600,
            letterSpacing: `1px`,
            lineHeight: `1.4`,
          }}
        >
          SS-Games
        </h1>
        <p
          style={{
            fontSize: `18px`,
            letterSpacing: `0.5px`,
          }}
        >
          ゲーム制作をしています
        </p> */}
      </div>
      <main>{children}</main>
      <footer
        style={{
          fontSize: `12px`,
          textAlign: `center`,
          padding: `16px 0`,
          backgroundColor: `#1b1d28`,
          color: `white`,
        }}
      >
        Copyright &copy; StarSource Games. All right All Rights Reserved.
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
