import React from 'react'

import InfoCard from './info-card'
import projectStyles from '../style.module.css'
import styles from './features-grid.module.css'

const FeaturesGrid = () => {
  return (
    <div className={styles['grid-section']}>
      <span className={styles.text}>What can you do with components</span>
      <div className={styles.cardsgrid}>
        <div className={styles.whitecard}>
          <img
            src="https://image.flaticon.com/icons/svg/201/201572.svg"
            className={` ${projectStyles.thqImage} ${styles.image} `}
          />
          <span className={styles.text1}>Easy to use</span>
          <span className={styles.text2}>
            I&apos;m not a component since I&apos;m used just once. But you can right-click me,
            select &quot;Create Component&quot; and reuse me if you want.Â 
          </span>
        </div>
        <InfoCard
          loremipsumdolo="This is an instance of a component. As you can see below, we reuse it."
          unlimitedorders="Analytics"
        ></InfoCard>
        <InfoCard
          loremipsumdolo="This is the same one, we just changed the text and image using overrides."
          unlimitedorders="Payments"
        ></InfoCard>
        <InfoCard
          loremipsumdolo="You can go ahead and duplicate these and use them as you see fit."
          unlimitedorders="How to use"
        ></InfoCard>
      </div>
    </div>
  )
}

export default FeaturesGrid
