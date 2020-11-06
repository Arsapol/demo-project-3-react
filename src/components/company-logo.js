import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './company-logo.module.css'

const CompanyLogo = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} className={` ${projectStyles.thqImage} ${styles.image} `} />
    </div>
  )
}

CompanyLogo.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

CompanyLogo.propTypes = {
  src: PropTypes.string,
}

export default CompanyLogo
