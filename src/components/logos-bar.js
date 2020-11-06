import React from 'react'

import CompanyLogo from './company-logo'
import styles from './logos-bar.module.css'

const LogosBar = () => {
  return (
    <div className={styles.container}>
      <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
      <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
      <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
      <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
      <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
    </div>
  )
}

export default LogosBar
