import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import projectStyles from '../style.module.css'
import styles from './hero.module.css'

const Hero = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <span className={styles.text}>{props.tagline}</span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text1} `}>{props.heading}</h1>
          <span className={styles.text2}>{props.paragraph}</span>
          <Button button="LET'S START"></Button>
        </div>
        <div className={styles.container3}>
          <img src={props.src} className={` ${projectStyles.thqImage} ${styles.image} `} />
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  heading: 'Heading',
  tagline: 'Tagline',
  paragraph: 'Paragraph',
}

Hero.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  tagline: PropTypes.string,
  paragraph: PropTypes.string,
}

export default Hero
