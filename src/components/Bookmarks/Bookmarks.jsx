
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-6 mt-16 space-y-5  text-3xl rounded-xl  text-center pt-10 px-4">
            <div>
                <h3 >Reading Time: {readingTime} min</h3>
            </div>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {
    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} /> )
}
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks