import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `absolute`,
      top: 0,
      left: 0,
      right: 0,
      height: `72px`,
      width: `100%`,
      maxWidth: `960px`,
      display: `flex`,
      alignItems: `center`,
      margin: `0 auto`,
      padding: `0 15px`,
      color: `white`,
      textShadow: `2px 2px 8px rgba(0,0,0,0.5)`,
      fontFamily: `sans-serif`,
      zIndex: `999`,
    }}
  >
    <h1>
      <Link
        to="/"
        style={{
          fontSize: `20px`,
          letterSpacing: `1.5px`,
          fontWeight: 600,
          color: `white`,
          textDecoration: `none`,
          fontFamily: `Source Sans Pro`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav style={{ marginLeft: `auto` }}>
      <a
        style={{
          color: `white`,
          fontSize: `15px`,
          marginLeft: `20px`,
          textDecoration: `none`,
          fontWeight: 600,
          letterSpacing: `0.5px`,
        }}
        href="#about"
      >
        私たちについて
      </a>
      <a
        style={{
          color: `white`,
          fontSize: `15px`,
          marginLeft: `20px`,
          textDecoration: `none`,
          fontWeight: 600,
          letterSpacing: `0.5px`,
        }}
        href="#works"
      >
        ゲーム
      </a>
      <a
        style={{
          color: `white`,
          fontSize: `15px`,
          marginLeft: `20px`,
          textDecoration: `none`,
          fontWeight: 600,
          letterSpacing: `0.5px`,
        }}
        href="https://ss-games.hatenablog.jp/"
      >
        ブログ
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
