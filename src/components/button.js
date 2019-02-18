import React from 'react'
import PropTypes from 'prop-types'

const Button = () => (
  <div>
    <button type="button">Test</button>
  </div>
)

Button.proptypes = {
  type: PropTypes.arrayOf(['submit', 'button', 'reset'])
}

export default Button
