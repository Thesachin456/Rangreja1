import { useState } from 'react'
import { Lock, Upload as UploadIcon, Calendar, BookOpen, Link as LinkIcon, AlertCircle, CheckCircle } from 'lucide-react'
import { useLectures } from '../context/LectureContext'

const Upload = () => {
  const { addLecture, lectures, deleteLecture } = useLectures()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    videoUrl: '',
    date: new Date().toISOString().split('T')[0]
  })
  const [formErrors, setFormErrors] = useState({})

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === '980161') {
      setIsAuthenticated(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.title.trim()) {
      errors.title = 'Title is required'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.videoUrl.trim()) {
      errors.videoUrl = 'Video URL is required'
    } else {
      // Basic URL validation
      try {
        new URL(formData.videoUrl)
      } catch {
        errors.videoUrl = 'Please enter a valid URL'
      }
    }
    
    if (!formData.date) {
      errors.date = 'Date is required'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    addLecture({
      title: formData.title.trim(),
      subject: formData.subject.trim(),
      videoUrl: formData.videoUrl.trim(),
      date: formData.date
    })

    // Reset form
    setFormData({
      title: '',
      subject: '',
      videoUrl: '',
      date: new Date().toISOString().split('T')[0]
    })
    setFormErrors({})
    setShowSuccess(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Access Required</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter the admin password to upload lectures
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Enter admin password"
              />
            </div>
            
            {passwordError && (
              <div className="flex items-center space-x-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{passwordError}</span>
              </div>
            )}

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Lecture</h1>
          <p className="text-gray-600">
            Add new educational content to the Rangreja platform
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800">Lecture uploaded successfully!</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Lecture Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Lecture Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter lecture title"
                />
                {formErrors.title && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.subject ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Mathematics, Physics, Chemistry"
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>
                )}
              </div>

              {/* Video URL */}
              <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Video URL *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    id="videoUrl"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.videoUrl ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
                {formErrors.videoUrl && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.videoUrl}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Lecture Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.date ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                </div>
                {formErrors.date && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <UploadIcon className="h-5 w-5" />
                <span>Upload Lecture</span>
              </button>
            </form>
          </div>

          {/* Uploaded Lectures List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Uploaded Lectures ({lectures.length})
            </h2>
            
            {lectures.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {lectures.map((lecture) => (
                  <div key={lecture.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{lecture.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{lecture.subject}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(lecture.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteLecture(lecture.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No lectures uploaded yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload