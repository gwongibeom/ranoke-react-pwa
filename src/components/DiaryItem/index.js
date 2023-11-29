import React from 'react'
import styles from './DiaryItem.module.css'

const DiaryItem = ({ created_date, value, report }) => {
  return (
    <div className={styles.DiaryItem}>
      <h3>{new Date(created_date).toLocaleString()}</h3>
      <hr />
      <div>{value}</div>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src='ranoke_black.png' alt='logo' />
        <div className={styles.circle}></div>
      </div>
      <div
        className={styles.report}
        dangerouslySetInnerHTML={{ __html: report }}
      ></div>
    </div>
  )
}

export default DiaryItem
