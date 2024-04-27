import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, reading_time}) => {
    return (
        <div>
            <div>
                <h3> Reading Time :{reading_time}</h3>
            </div>
          <h2>Bookmarks : {bookmarks.length}</h2>
          {
            bookmarks.map((bookmark,idx)=><Bookmark  key={idx} bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};

export default Bookmarks;