import { useState, useMemo } from 'react'
import { Search, Filter, BookOpen } from 'lucide-react'
import { useLectures } from '../context/LectureContext'
import LectureCard from '../components/LectureCard'

const Lectures = () => {
  const { lectures } = useLectures()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')

  // Get unique subjects
  const subjects = useMemo(() => {
    const uniqueSubjects = [...new Set(lectures.map(lecture => lecture.subject))]
    return uniqueSubjects.sort()
  }, [lectures])

  // Filter lectures based on search and subject
  const filteredLectures = useMemo(() => {
    return lectures.filter(lecture => {
      const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           lecture.subject.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubject = selectedSubject === '' || lecture.subject === selectedSubject
      return matchesSearch && matchesSubject
    })
  }, [lectures, searchTerm, selectedSubject])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Lectures</h1>
          <p className="text-gray-600">
            Explore our collection of educational lectures across various subjects
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search lectures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Subject Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Subjects</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredLectures.length} lecture{filteredLectures.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Lectures Grid */}
        {filteredLectures.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {lectures.length === 0 ? 'No Lectures Available' : 'No Lectures Found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {lectures.length === 0 
                ? 'Be the first to upload educational content!' 
                : 'Try adjusting your search or filter criteria.'}
            </p>
            {(searchTerm || selectedSubject) && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSubject('')
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Lectures