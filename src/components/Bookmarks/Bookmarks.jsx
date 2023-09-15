import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (

        <div className=' md:w-1/3 ml-4'>
            <div>
                <h3 className=' text-3xl text-center text-blue-600 border-2 border-blue-600 bg-blue-100 py-5 px-12  mb-6  rounded-lg'>
                    Spent time on read : {readingTime} min
                </h3>
            </div>
            <div className=" bg-gray-300  rounded-lg pb-4">

                <h2 className='text-center text-3xl p-4'>Bookmarks Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}
export default Bookmarks;