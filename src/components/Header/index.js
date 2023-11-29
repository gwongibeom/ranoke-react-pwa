import styles from './Header.module.css'

export const Header = ({ onMenuChange, diarys }) => {
  const diaryTopics = [
    '하루 일과에 대하여',
    '오늘 먹은 음식에 대하여',
    '오늘 만난 친구에 대하여',
    '학교 / 직장에 대하여',
    '현재 계절에 대하여',
    '취미에 대하여',
  ]

  const onMenuClick = (e) => {
    switch (e.currentTarget.id) {
      case 'write':
        onMenuChange(true)
        break

      case 'read':
        onMenuChange(false)
        break

      default:
        break
    }
  }

  return (
    <div className={styles.Header}>
      <div id='write' className={styles.HeadTextBtn} onClick={onMenuClick}>
        ✍️
      </div>
      <div>
        <p className={styles.HeadText}>
          {diaryTopics.length < diarys.length
            ? '자유주제'
            : diaryTopics[diarys.length]}
        </p>
        <p className={styles.SubHeadText}>{diarys.length}번째 주제</p>
      </div>
      <div id='read' className={styles.HeadTextBtn} onClick={onMenuClick}>
        📖
      </div>
    </div>
  )
}
