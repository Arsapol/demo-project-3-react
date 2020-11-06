import React from 'react'

import SectionHeading from './section-heading'
import styles from './product-section.module.css'

const ProductSection = () => {
  return (
    <div className={styles['product-section']}>
      <div className={styles.imagecontainer}></div>
      <div className={styles.textcontainer}>
        <SectionHeading
          largeheading="Right Click and Select 'Duplicate' to reuse me"
          smallheading="About components"
        ></SectionHeading>
        <span className={styles.text}>
          Reusing components is a sure way of saving time when developing your website.Â 
        </span>
        <span className={styles.text1}>
          Open the component, Right-click on an element (text or picture) and select Create
          Override. Doing this will allow you to add different text for the component in different
          instances.
        </span>
        <span className={styles.text2}>Link &gt;&gt;</span>
      </div>
    </div>
  )
}

export default ProductSection
