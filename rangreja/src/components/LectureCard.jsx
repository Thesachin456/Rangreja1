import { Calendar, Play, BookOpen, Trash2 } from 'lucide-react'

const LectureCard = ({ lecture, onDelete, showDelete = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleVideoClick = () => {
    if (lecture.videoUrl) {
      window.open(lecture.videoUrl, '_blank')
    }
  }

  return (
    <div className="card">
      {/* Video Thumbnail/Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <Play className="h-12 w-12 text-white opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {lecture.title}
          </h3>
          {showDelete && (
            <button
              onClick={() => onDelete(lecture.id)}
              className="text-red-500 hover:text-red-700 p-1"
              title="Delete lecture"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{lecture.subject}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(lecture.date)}</span>
          </div>
        </div>

        {lecture.videoUrl && (
          <button
            onClick={handleVideoClick}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>Watch Lecture</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default LectureCard