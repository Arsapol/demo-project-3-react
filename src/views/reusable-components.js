import React from 'react'

import Helmet from 'react-helmet'

import SectionHeading from '../components/section-heading'
import FooterMenu from '../components/footer-menu'
import Button from '../components/button'
import PricingCard from '../components/pricing-card'
import InfoCard from '../components/info-card'
import ReviewCard from '../components/review-card'
import styles from './reusable-components.module.css'

const ReusableComponents = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>ReusableComponents - Demo Project 3</title>
        <meta
          name="description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="ReusableComponents - Demo Project 3" />
        <meta
          property="og:description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1"
        />
      </Helmet>
      <span className={styles.text}>Reusable Components</span>
      <div className={styles.container01}>
        <span className={styles.text1}>Section Heading</span>
        <div></div>
        <SectionHeading></SectionHeading>
      </div>
      <div className={styles.container03}>
        <span className={styles.text2}>FooterSection</span>
        <div>
          <FooterMenu></FooterMenu>
        </div>
      </div>
      <div className={styles.container05}>
        <span className={styles.text3}>Button</span>
        <Button></Button>
      </div>
      <div className={styles.container06}>
        <span className={styles.text4}>Pricing Card</span>
        <PricingCard></PricingCard>
      </div>
      <div className={styles.container07}>
        <span className={styles.text5}>InfoCard</span>
        <div className={styles.container08}>
          <InfoCard></InfoCard>
        </div>
      </div>
      <div className={styles.container09}>
        <span className={styles.text6}>Review Card</span>
        <ReviewCard></ReviewCard>
      </div>
    </div>
  )
}

export default ReusableComponents
