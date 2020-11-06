import React from 'react'

import PropTypes from 'prop-types'

import SectionHeading from './section-heading'
import LogosBar from './logos-bar'
import Button from './button'
import styles from './connection-section.module.css'

const ConnectionSection = (props) => {
  return (
    <div className={styles['connection-section']}>
      <div className={styles.textcontainer}>
        <SectionHeading
          largeheading="Customize your content"
          smallheading="Add Your Titles"
        ></SectionHeading>
        <span className={styles.text}>
          One or two lines of text have enough visual punch to communicate your message. And of
          course, you can add logo&apos;s in the page.
        </span>
      </div>
      <LogosBar></LogosBar>
      <div className={styles['setup-section']}>
        <div className={styles.imagecontainer}></div>
        <div className={styles.textcontainer1}>
          <SectionHeading
            largeheading="This one is a large heading"
            smallheading="Simple, right?"
          ></SectionHeading>
          <span className={styles.text1}>{props.loremipsumdolo}</span>
          <Button></Button>
        </div>
      </div>
    </div>
  )
}

ConnectionSection.defaultProps = {
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
}

ConnectionSection.propTypes = {
  loremipsumdolo: PropTypes.string,
}

export default ConnectionSection
