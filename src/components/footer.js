import React from 'react'

import PropTypes from 'prop-types'

import FooterMenu from './footer-menu'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <span className={styles.text}>About us</span>
          <span className={styles.text1}>{props.utpharetrapuru}</span>
        </div>
        <div className={styles.container1}>
          <FooterMenu title="Title"></FooterMenu>
          <FooterMenu title="Title"></FooterMenu>
          <FooterMenu title="Title"></FooterMenu>
        </div>
      </div>
      <div className={styles['rights-section']}>
        <span className={styles.text2}>Â© 2020 Company Name. All rights reserved.</span>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  utpharetrapuru:
    'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
}

Footer.propTypes = {
  utpharetrapuru: PropTypes.string,
}

export default Footer
