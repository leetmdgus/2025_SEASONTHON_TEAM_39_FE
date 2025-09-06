import {Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import CalendarPage from './pages/CalendarPage'
import HistoryPage from './pages/HistoryPage'
import MakeCapsulePage from './pages/MakeCapsulePage'
import ProfilePage from './pages/ProfilePage'
import RecommendMusicPage from './pages/RecommendMusicPage'
import MakeTimeCapsulePage from './pages/MakeTimeCapsulePage'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/make-capsule" element={<MakeCapsulePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/history-positive" element={<HistoryPage emotionTags={['행복', '즐거움', '감동', '설렘']} />} />
        <Route path="/history-negative" element={<HistoryPage emotionTags={['우울', '차분', '분노', '그리움']} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recommend" element={<RecommendMusicPage />} />
        <Route path="/make-timecapsule" element={<MakeTimeCapsulePage />} />
      </Routes>
    </>
  )
}

export default App
