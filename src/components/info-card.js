import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './info-card.module.css'

const InfoCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} className={` ${projectStyles.thqImage} ${styles.image} `} />
      <span className={styles.text}>{props.title}</span>
      <span className={styles.text1}>{props.loremipsumdolo}</span>
    </div>
  )
}

InfoCard.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'Title',
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpi.',
}

InfoCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  loremipsumdolo: PropTypes.string,
}

export default InfoCard
