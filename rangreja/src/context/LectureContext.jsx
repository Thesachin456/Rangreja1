import { createContext, useContext, useState, useEffect } from 'react'

const LectureContext = createContext()

export const useLectures = () => {
  const context = useContext(LectureContext)
  if (!context) {
    throw new Error('useLectures must be used within a LectureProvider')
  }
  return context
}

export const LectureProvider = ({ children }) => {
  const [lectures, setLectures] = useState([])

  // Load lectures from localStorage on mount
  useEffect(() => {
    const savedLectures = localStorage.getItem('rangreja-lectures')
    if (savedLectures) {
      setLectures(JSON.parse(savedLectures))
    }
  }, [])

  // Save lectures to localStorage whenever lectures change
  useEffect(() => {
    localStorage.setItem('rangreja-lectures', JSON.stringify(lectures))
  }, [lectures])

  const addLecture = (lecture) => {
    const newLecture = {
      id: Date.now().toString(),
      ...lecture,
      createdAt: new Date().toISOString()
    }
    setLectures(prev => [newLecture, ...prev])
  }

  const deleteLecture = (id) => {
    setLectures(prev => prev.filter(lecture => lecture.id !== id))
  }

  const value = {
    lectures,
    addLecture,
    deleteLecture
  }

  return (
    <LectureContext.Provider value={value}>
      {children}
    </LectureContext.Provider>
  )
}