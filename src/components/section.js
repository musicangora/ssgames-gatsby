import PropTypes from "prop-types"
import React from "react"

const Section = ({ children }) => (
  <div
    style={{
      maxWidth: `630px`,
      padding: `0 15px`,
      margin: `32px auto`,
    }}
  >
    {children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
