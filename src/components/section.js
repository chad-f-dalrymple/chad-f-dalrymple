import React from 'react'
import sectionStyles from './section.module.css'

export default ({ children }) => (
  <div className={sectionStyles.section}>{children}</div>
)
