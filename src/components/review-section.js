import React from 'react'

import ReviewCard from './review-card'
import styles from './review-section.module.css'

const ReviewSection = () => {
  return (
    <div className={styles['customers-review']}>
      <span className={styles.text}>What your</span>
      <span className={styles.text1}>Customers are saying</span>
      <span className={styles.text2}>
        Add your customers&apos; testimonials and feedback here. Let your other customers know what
        you&apos;re about.Â 
      </span>
      <ReviewCard></ReviewCard>
      <div className={styles.overlay}></div>
    </div>
  )
}

export default ReviewSection
