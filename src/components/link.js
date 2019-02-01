import React from 'react'
import linkStyles from './link.module.css'

const Link = ({ children }) => (
  <React.Fragment>
    <a className={linkStyles.link} href="/page-2/">
      {children}
    </a>
  </React.Fragment>
)

export default Link
