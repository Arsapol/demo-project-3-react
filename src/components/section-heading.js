import React from 'react'

import PropTypes from 'prop-types'

import styles from './section-heading.module.css'

const SectionHeading = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{props.smallheading}</span>
      <span className={styles.text1}>{props.largeheading}</span>
    </div>
  )
}

SectionHeading.defaultProps = {
  largeheading: 'Large Heading',
  smallheading: 'Small Heading',
}

SectionHeading.propTypes = {
  largeheading: PropTypes.string,
  smallheading: PropTypes.string,
}

export default SectionHeading
