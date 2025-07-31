# Rangreja - Educational Platform

A modern, clean, and minimalistic educational website built with React.js and Tailwind CSS.

## Features

✨ **Modern Design**: Clean and minimalistic UI with responsive design
📚 **Lecture Display**: Browse and view uploaded lectures in a card-based layout
🔐 **Admin Upload**: Password-protected upload section for administrators
🔍 **Search & Filter**: Search lectures by title/subject and filter by subject
📱 **Mobile-Friendly**: Fully responsive design that works on all devices
💾 **Local Storage**: Lecture data persisted in browser's local storage

## Admin Access

- **Password**: `980161`
- Access the upload section at `/upload` to add new lectures

## Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Data Storage**: Browser Local Storage

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rangreja
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   └── LectureCard.jsx     # Individual lecture card component
├── context/
│   └── LectureContext.jsx  # Context for lecture data management
├── pages/
│   ├── Home.jsx           # Homepage with hero section
│   ├── Lectures.jsx       # All lectures page with search/filter
│   └── Upload.jsx         # Admin upload page
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles with Tailwind
```

## Usage

### For Students
1. Visit the homepage to see recent lectures
2. Navigate to "Lectures" to browse all available content
3. Use search and filter options to find specific lectures
4. Click "Watch Lecture" to open video links

### For Administrators
1. Navigate to the "Upload" section
2. Enter the admin password: `980161`
3. Fill out the lecture form with:
   - Title
   - Subject
   - Video URL (YouTube, Vimeo, etc.)
   - Date
4. Submit to add the lecture to the platform

## Features Overview

### Homepage
- Hero section with call-to-action buttons
- Feature highlights
- Recent lectures display
- Responsive design

### Lectures Page
- Grid layout of all lectures
- Search functionality
- Subject-based filtering
- Lecture count display

### Upload Page
- Password protection
- Form validation
- Success notifications
- List of uploaded lectures with delete option

### Lecture Management
- Add new lectures
- Delete existing lectures
- Persistent storage using localStorage
- Auto-generated unique IDs and timestamps

## Customization

### Colors
The project uses Tailwind CSS with blue as the primary color scheme. To change colors, update the classes in components from `blue-*` to your preferred color.

### Storage
Currently uses localStorage. To integrate with a backend:
1. Replace localStorage calls in `LectureContext.jsx`
2. Add API endpoints for CRUD operations
3. Update the context methods accordingly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using React.js and Tailwind CSS
