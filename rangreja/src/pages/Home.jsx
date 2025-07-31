import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react'
import { useLectures } from '../context/LectureContext'
import LectureCard from '../components/LectureCard'

const Home = () => {
  const { lectures } = useLectures()
  const recentLectures = lectures.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">Rangreja</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your gateway to quality education. Access lectures, learn at your own pace, 
              and unlock your potential with our comprehensive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lectures"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Browse Lectures</span>
              </Link>
              <Link
                to="/upload"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Admin Upload</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Rangreja?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a seamless learning experience with high-quality content and user-friendly interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Content</h3>
              <p className="text-gray-600">
                Access high-quality educational lectures from expert instructors across various subjects.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Access</h3>
              <p className="text-gray-600">
                Learn at your own pace with our user-friendly platform accessible from any device.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organized Learning</h3>
              <p className="text-gray-600">
                Well-structured content organized by subjects and topics for systematic learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Lectures Section */}
      {recentLectures.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Lectures</h2>
              <Link
                to="/lectures"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentLectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          </div>
        </section>
      )}

      {lectures.length === 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Lectures Yet</h3>
            <p className="text-gray-600 mb-6">
              Be the first to upload educational content to Rangreja!
            </p>
            <Link
              to="/upload"
              className="btn-primary"
            >
              Upload First Lecture
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home