import React from 'react'
import styles from './DiaryList.module.css'
import DiaryItem from '../DiaryItem'

const DiaryList = ({ diarys }) => {
  return (
    <div className={styles.DiaryList}>
      <h2 className={styles.diarysLengthText}>
        {diarys.length}개의 일기가 있습니다.
      </h2>
      {diarys.length === 0 ? (
        <h2 className={styles.noDiarysText}>
          일기가 하나도 없네요! <br />
          한번 작성해보는건 <br />
          어떨까요...🤔
        </h2>
      ) : (
        <div className={styles.itemWrap}>
          {diarys.map((it) => (
            <DiaryItem {...it} />
          ))}
        </div>
      )}
    </div>
  )
}

export default DiaryList
