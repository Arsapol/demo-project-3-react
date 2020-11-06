import React from 'react'

import PropTypes from 'prop-types'

import styles from './footer-menu.module.css'

const FooterMenu = (props) => {
  return (
    <div className={styles.community}>
      <span className={styles.text}>{props.title}</span>
      <div className={styles.container}>
        <span className={styles.text1}>Subtitle</span>
        <span className={styles.text2}>Subtitle</span>
        <span className={styles.text3}>Subtitle</span>
        <span className={styles.text4}>Subtitle</span>
        <span className={styles.text5}>Subtitle</span>
      </div>
    </div>
  )
}

FooterMenu.defaultProps = {
  title: 'Title',
}

FooterMenu.propTypes = {
  title: PropTypes.string,
}

export default FooterMenu
