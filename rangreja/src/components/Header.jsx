import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Upload, Home } from 'lucide-react'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Rangreja</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              to="/lectures"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/lectures') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Lectures</span>
            </Link>

            <Link
              to="/upload"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/upload') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header