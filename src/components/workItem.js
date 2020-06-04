import PropTypes from "prop-types"
import React from "react"

const WorkItem = props => (
  <li
    style={{
      margin: `16px 0 48px`,
    }}
  >
    <a href={props.link}>
      <img style={{ margin: 0 }} src={props.src} />
    </a>
    <h3
      style={{
        fontSize: `12px`,
        fontFamily: `Source Sans Pro`,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: `0.5px`,
        margin: `6px 0 2px`,
        color: `#222`,
      }}
    >
      {props.category}
    </h3>
    <h3
      style={{
        fontFamily: `Source Sans Pro`,
        fontSize: `20px`,
        fontWeight: 600,
        margin: 0,
      }}
    >
      {props.title}
    </h3>
    <p
      style={{
        fontFamily: `Source Sans Pro`,
        fontSize: `16px`,
      }}
    >
      {props.description}
    </p>
  </li>
)

WorkItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkItem
