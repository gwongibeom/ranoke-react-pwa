import { useState, useRef } from 'react'
import './App.css'
import DiaryList from './components/DiaryList'
import { Header } from './components/Header'
import axios from 'axios'

function App() {
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key))
    },
  }

  const GetDairyReport = async (text) => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/text', {
        text: text,
      })

      return res.data.result
    } catch (err) {
      console.log('문자 마법사 API post 에러', err)
    }
  }

  const loadingTexts = [
    'AI가 일기를 살펴보는 중...',
    'AI가 리포트를 작성하는 중...',
    'AI가 김치를 먹는 중...',
    'AI가 페이커를 찬양하는 중...',
    'AI가 한화이글스를 응원하는 중...',
    'AI가 로고가 나비인지 새인지 구분 하는 중...',
    'AI가 정국의 Seven을 듣는 중...',
    'AI가 한신 타이거즈를 응원하는 중...',
    'AI가 서폿 판테온을 하는 중...',
    'AI가 새로운 언어를 학습하는 중...',
    'AI가 고양이와 놀고 있는 중...',
    'AI가 신나게 춤을 추는 중...',
    'AI가 미로를 탐험하는 중...',
    'AI가 명언을 생각하는 중...',
    'AI가 노래를 부르는 중...',
    'AI가 우주 쓰레기를 수집하며 지구를 구하는 중...',
    'AI가 자율 주행 자동차를 레이스에서 운전하는 중...',
    'AI가 미지의 행성에서 우주 친구를 사귀는 중...',
    'AI가 시간 여행을 하며 역사 속으로 빠져드는 중...',
  ]

  const [value, setValue] = useState('')

  const diaryCreateBtn = useRef()
  const diaryInput = useRef()

  const handleDiaryFormSubmit = async (e) => {
    e.preventDefault()

    if (value.length <= 10) {
      alert('일기를 10글자 이상 입력해주세요')
      return
    }

    const loadingTextChangeInterval = () => {
      return setInterval(() => {
        const randomIndex = Math.floor(Math.random() * loadingTexts.length)
        diaryCreateBtn.current.innerText = loadingTexts[randomIndex]
      }, 2500)
    }

    const intervalId = loadingTextChangeInterval()

    const res = await GetDairyReport(value)

    const dairy = {
      created_date: new Date().getTime(),
      value: value,
      report: res,
    }

    console.log(diarys)

    setDiarys((prevDiarys) => {
      const newDairys = [...prevDiarys, dairy]
      console.log(newDairys)
      jsonLocalStorage.setItem('diarys', newDairys)
      return newDairys
    })

    clearInterval(intervalId)
    diaryCreateBtn.current.innerText = '생성'
  }

  function handleDiaryInputChange(e) {
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
      <Header onMenuChange={onMenuChange} diarys={diarys} />
      {isWrite ? (
        <>
          <form onSubmit={handleDiaryFormSubmit}>
            <textarea
              className='diaryInput'
              type='text'
              name='name'
              placeholder='한국어 일기를 작성 해주세요!'
              onChange={handleDiaryInputChange}
              value={value}
              ref={diaryInput}
            />
            <button
              className='diaryCreateBtn'
              ref={diaryCreateBtn}
              type='submit'
            >
              생성
            </button>
          </form>
        </>
      ) : (
        <div>
          <DiaryList diarys={diarys} />
        </div>
      )}
    </div>
  )
}

export default App
