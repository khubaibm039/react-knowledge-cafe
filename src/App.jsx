import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] = useState(0)

    const handleAddToBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
    }

    const handleMarkAsRead = time => {
        const newReadingTime = readingTime + time
        setReadingTime(newReadingTime)

    }
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='md:flex mt-8'>
                <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
            </div>
        </div>
    )
}

export default App
