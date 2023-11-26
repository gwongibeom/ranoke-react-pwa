import { useState } from 'react'
import './App.css'
import DiaryList from './components/DiaryList'
import { Header } from './components/Header'

function App() {
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key))
    },
  }

  const [value, setValue] = useState('')

  const [translateValue, setTranslateValue] = useState('')

  const handleDiaryFormSubmit = (e) => {
    e.preventDefault()
  }

  function handleDiaryInputChange(e) {
    setValue(e.target.value)
  }

  const handleWordTranslateFormSubmit = (e) => {
    e.preventDefault()
  }

  function handleWordTranslateInputChange(e) {
    setValue(e.target.value)
  }

  const [diarys, setDiarys] = useState(() => {
    return jsonLocalStorage.getItem('diarys') || []
  })

  const [isWrite, setIsWrite] = useState(true)

  const onMenuChange = (bool) => {
    setIsWrite(bool)
  }
  return (
    <div className='App'>
      <Header onMenuChange={onMenuChange} />
      {isWrite ? (
        <>
          <form onSubmit={handleWordTranslateFormSubmit}>
            <input
              className='wordTranslateInput'
              type='text'
              name='name'
              placeholder='기억이 나지 않는 단어를 써주세요'
              onChange={handleWordTranslateInputChange}
              value={translateValue}
            />
          </form>
          <form onSubmit={handleDiaryFormSubmit}>
            <textarea
              className='diaryInput'
              type='text'
              name='name'
              placeholder='한국어 일기를 작성 해주세요!'
              onChange={handleDiaryInputChange}
              value={value}
            />
            <button className='diaryCreateBtn' type='submit'>
              생성
            </button>
          </form>
        </>
      ) : (
        <div>
          this is read
          <DiaryList />
        </div>
      )}
    </div>
  )
}

export default App
