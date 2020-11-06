import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import styles from './pricing-card.module.css'

const PricingCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.text}>{props.quizchecksmonth}</span>
        <span className={styles.text1}>{props.getstartednow}</span>
        <span className={styles.text2}>{props.then10month}</span>
      </div>
      <div className={styles.container1}>
        <span className={styles.text3}>{props.dayfreetria}</span>
        <span className={styles.text4}>{props.unlimitedquizze}</span>
        <span className={styles.text5}>{props.fullautoma}</span>
        <span className={styles.text6}>{props.unlimitedwebsit}</span>
        <span className={styles.text7}>{props.licensekeyread}</span>
        <span className={styles.text8}>{props.sellyourautoma}</span>
        <Button button="TRY NOW"></Button>
      </div>
    </div>
  )
}

PricingCard.defaultProps = {
  fullautoma: '100% full automatic e-mail replies',
  dayfreetria: '14 day free trial',
  then10month: 'then $10 / month',
  getstartednow: 'Get started now with our free 14 day trial',
  licensekeyread: 'License Key ready with Digistore',
  sellyourautoma: 'Sell your automatic answers',
  quizchecksmonth: 'quizchecks Monthly payment',
  unlimitedquizze: 'Unlimited quizzes',
  unlimitedwebsit: 'Unlimited websites',
}

PricingCard.propTypes = {
  fullautoma: PropTypes.string,
  dayfreetria: PropTypes.string,
  then10month: PropTypes.string,
  getstartednow: PropTypes.string,
  licensekeyread: PropTypes.string,
  sellyourautoma: PropTypes.string,
  quizchecksmonth: PropTypes.string,
  unlimitedquizze: PropTypes.string,
  unlimitedwebsit: PropTypes.string,
}

export default PricingCard
