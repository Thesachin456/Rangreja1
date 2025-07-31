import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Lectures from './pages/Lectures'
import Upload from './pages/Upload'
import { LectureProvider } from './context/LectureContext'

function App() {
  return (
    <LectureProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lectures" element={<Lectures />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LectureProvider>
  )
}

export default App
