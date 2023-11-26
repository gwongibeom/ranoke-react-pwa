import styles from './Header.module.css'

export const Header = ({ onMenuChange }) => {
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
        쓰기
      </div>
      <div>
        <p className={styles.HeadText}>오늘 먹은 음식에 대해</p>
        <p className={styles.SubHeadText}>오늘의 주제</p>
      </div>
      <div id='read' className={styles.HeadTextBtn} onClick={onMenuClick}>
        읽기
      </div>
    </div>
  )
}
