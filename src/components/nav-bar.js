import React from 'react'

import Button from './button'
import projectStyles from '../style.module.css'
import styles from './nav-bar.module.css'

const NavBar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <svg
          fill="#ffffff"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          className={projectStyles.thqIcon}
        >
          <path d="M598 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 726q18 0 31 12t13 30-13 30-31 12-30-12-12-30 12-30 30-12zM426 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 874q20 0 20 22t-20 22q-22 0-22-22t22-22zM598 726q18 0 30 12t12 30-12 30-30 12-31-12-13-30 13-30 31-12zM896 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM768 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM768 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13zM426 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 298q-18 0-30-12t-12-30 12-30 30-12 31 12 13 30-13 30-31 12zM426 150q-20 0-20-22t20-22q22 0 22 22t-22 22zM426 874q22 0 22 22t-22 22q-20 0-20-22t20-22zM128 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM598 150q-22 0-22-22t22-22q20 0 20 22t-20 22zM598 298q-18 0-31-12t-13-30 13-30 31-12 30 12 12 30-12 30-30 12zM896 448q-22 0-22-22 0-20 22-20t22 20q0 22-22 22zM256 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM128 406q22 0 22 20 0 22-22 22t-22-22q0-20 22-20zM256 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM256 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM256 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13z"></path>
        </svg>
        <span className={styles.text}>Your Company</span>
      </div>
      <div className={styles.links}>
        <span className={styles.text1}>HOME</span>
        <span className={styles.text2}>PRICING</span>
        <span className={styles.text3}>SERVICES</span>
        <Button button="GET STARTED"></Button>
      </div>
      <div className={styles.container1}>
        <svg
          fill="#fff"
          width="30"
          height="30"
          viewBox="0 0 1024 1024"
          className={projectStyles.thqIcon}
        >
          <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
        </svg>
      </div>
    </div>
  )
}

export default NavBar
