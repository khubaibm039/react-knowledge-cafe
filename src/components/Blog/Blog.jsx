import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img, date, hash_tags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center '>
                    <img className='w-16 mr-6 ' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold text-lg'>{author}</h3>
                        <p>{date}</p>

                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>

            </div>
            <h3 className='font-bold text-4xl mb-4'>{title}</h3>
            <p >
                {
                    hash_tags.map((hash, idx) => <span className='mr-3 text-gray-400' key={idx}> <a href=''>#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;