import React from 'react'

import Helmet from 'react-helmet'

import NavBar from '../components/nav-bar'
import Hero from '../components/hero'
import InfoSection from '../components/info-section'
import FeaturesGrid from '../components/features-grid'
import LogosBar from '../components/logos-bar'
import Footer from '../components/footer'
import styles from './layout-components.module.css'

const LayoutComponents = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>LayoutComponents - Demo Project 3</title>
        <meta
          name="description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="LayoutComponents - Demo Project 3" />
        <meta
          property="og:description"
          content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1"
        />
      </Helmet>
      <span className={styles.text}>Layout Components</span>
      <div className={styles.container01}>
        <span className={styles.text1}>NavBar</span>
        <div className={styles.container02}>
          <NavBar></NavBar>
        </div>
      </div>
      <div className={styles.container03}>
        <span className={styles.text2}>Hero</span>
        <div className={styles.container04}>
          <Hero></Hero>
        </div>
      </div>
      <div className={styles.container05}>
        <span className={styles.text3}>Info Section</span>
        <div className={styles.container06}>
          <InfoSection></InfoSection>
        </div>
      </div>
      <div className={styles.container07}>
        <span className={styles.text4}>Grid Section</span>
        <div className={styles.container08}>
          <FeaturesGrid></FeaturesGrid>
        </div>
      </div>
      <div className={styles.container09}>
        <span className={styles.text5}>Logos Section</span>
        <div className={styles.container10}>
          <LogosBar></LogosBar>
        </div>
      </div>
      <div className={styles.container11}>
        <span className={styles.text6}>FooterSection</span>
        <div className={styles.container12}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default LayoutComponents
