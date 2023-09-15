import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
    const [bookmarks, setBookmarks] = useState([])
    const handleAddToBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
    }
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='md:flex'>
                <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </div>
    )
}

export default App
