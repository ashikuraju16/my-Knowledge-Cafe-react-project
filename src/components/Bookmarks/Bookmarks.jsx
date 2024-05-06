import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-300  ml-4 mt-12 p-8 text-2xl rounded-lg">
       <h2>Bookmark:{bookmarks.length}</h2>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;