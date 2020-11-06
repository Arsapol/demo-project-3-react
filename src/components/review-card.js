import React from 'react'

import projectStyles from '../style.module.css'
import styles from './review-card.module.css'

const ReviewCard = () => {
  return (
    <div className={styles.review}>
      <svg fill="#2b2b2b" height="40" viewBox="0 0 1024 1024" className={projectStyles.thqIcon}>
        <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
      </svg>
      <div className={styles.container}>
        <div className={styles.container1}></div>
        <span className={styles.text}>Your Name</span>
        <span className={styles.text1}>CEO at A good company</span>
        <span className={styles.text2}>
          &quot;Best company (apart from ours, of course) I&apos;ve ever seen in the whole wide
          world!&quot;
        </span>
      </div>
      <svg fill="#2b2b2b" height="40" viewBox="0 0 1024 1024" className={projectStyles.thqIcon}>
        <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
      </svg>
    </div>
  )
}

export default ReviewCard
