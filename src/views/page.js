import React from 'react'

import Helmet from 'react-helmet'

import NavBar from '../components/nav-bar'
import Hero from '../components/hero'
import ProductSection from '../components/product-section'
import FeaturesGrid from '../components/features-grid'
import ConnectionSection from '../components/connection-section'
import ReviewSection from '../components/review-section'
import InfoSection from '../components/info-section'
import PricingCard from '../components/pricing-card'
import Founders from '../components/founders'
import Footer from '../components/footer'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Demo Project 3</title>
        <meta
          name="description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="Demo Project 3" />
        <meta
          property="og:description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1"
        />
      </Helmet>
      <div className={styles['top-section']}>
        <NavBar></NavBar>
        <Hero
          src="https://images.unsplash.com/photo-1584598147703-b4769ffb2c89?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          heading="This is a Demo Project"
          tagline="In the right panel you can change all the text."
          paragraph='You"ll find out more about components, overrides and responsiveness.'
        ></Hero>
      </div>
      <ProductSection></ProductSection>
      <FeaturesGrid></FeaturesGrid>
      <ConnectionSection></ConnectionSection>
      <ReviewSection></ReviewSection>
      <InfoSection
        loremipsumdolo="If you want to customise this paragraph, try deleting this text from the inputs on the right and then add your own."
        utpharetrapuru="You can do the same for this one."
      ></InfoSection>
      <div className={styles['pricing-section']}>
        <div className={styles.container}>
          <PricingCard
            fullautoma="For this card."
            dayfreetria="To see what we were thinking of"
            then10month="Look on the right"
            getstartednow="And customise it as you wish"
            licensekeyread="Just start editing the text"
            sellyourautoma="On your right"
            quizchecksmonth="Use this card"
            unlimitedquizze="And have a sample"
            unlimitedwebsit="In order to change the teext"
          ></PricingCard>
          <PricingCard
            then10month="$40 / year"
            licensekeyread="Automatic Deploy"
            quizchecksmonth="Anual payment"
            unlimitedquizze="Unlimited Projects"
            unlimitedwebsit="Unlimited Templates"
          ></PricingCard>
        </div>
      </div>
      <Founders
        founders="This one can"
        loremipsumdolo="Like before, this is a simple use of the right side input fields."
        utpharetrapuru="You can add as much content as you like."
        utpharetrapuru1="Just remember to keep it short, punchy and to the point."
      ></Founders>
      <Footer utpharetrapuru="Add a short sentence describing your company. We this one could be around 3 or less rows."></Footer>
    </div>
  )
}

export default Page
