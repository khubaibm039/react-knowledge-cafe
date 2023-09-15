import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, date, hash_tags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-md shadow-lg' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center '>
                    <img className='w-16 mr-6 ' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold text-lg'>{author}</h3>
                        <p>{date}</p>

                    </div>
                </div>
                <div className='flex items-center '>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-3xl text-red-600'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>

            </div>
            <h3 className='font-bold text-4xl mb-4'>{title}</h3>
            <p >
                {
                    hash_tags.map((hash, idx) => <span className='mr-3 text-gray-400' key={idx}> <a href=''>#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline mt-4' onClick={() => handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;