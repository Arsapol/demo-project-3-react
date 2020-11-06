import React from 'react'

import PropTypes from 'prop-types'

import SectionHeading from './section-heading'
import Button from './button'
import styles from './info-section.module.css'

const InfoSection = (props) => {
  return (
    <div className={styles['card-2']}>
      <div className={styles.textcontainer}>
        <SectionHeading></SectionHeading>
        <span className={styles.text}>{props.loremipsumdolo}</span>
        <span className={styles.text1}>{props.utpharetrapuru}</span>
        <Button button="START NOW"></Button>
      </div>
      <div className={styles.imagecontainer}></div>
    </div>
  )
}

InfoSection.defaultProps = {
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
  utpharetrapuru:
    'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
}

InfoSection.propTypes = {
  loremipsumdolo: PropTypes.string,
  utpharetrapuru: PropTypes.string,
}

export default InfoSection
