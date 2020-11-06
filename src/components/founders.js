import React from 'react'

import PropTypes from 'prop-types'

import styles from './founders.module.css'

const Founders = (props) => {
  return (
    <div className={styles['founder-section']}>
      <div className={styles.imagecontainer}></div>
      <div className={styles.textcontainer}>
        <span className={styles.text}>{props.largeheading}</span>
        <span className={styles.text1}>{props.loremipsumdolo}</span>
        <span className={styles.text2}>{props.loremipsum2p}</span>
        <span className={styles.text3}>{props.loremipsum3p}</span>
      </div>
    </div>
  )
}

Founders.defaultProps = {
  largeheading: 'Large heading',
  loremipsum2p:
    'Lorem ipsum 2. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
  loremipsum3p:
    'Lorem ipsum 3. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus.',
}

Founders.propTypes = {
  largeheading: PropTypes.string,
  loremipsum2p: PropTypes.string,
  loremipsum3p: PropTypes.string,
  loremipsumdolo: PropTypes.string,
}

export default Founders
