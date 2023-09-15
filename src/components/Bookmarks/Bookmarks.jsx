import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-md">
            <h3 className='text-center text-3xl p-4'>Bookmarks Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;