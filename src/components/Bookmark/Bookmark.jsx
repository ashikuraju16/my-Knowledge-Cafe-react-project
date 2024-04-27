
const Bookmark = ({ bookmark}) => {
    const [title]=bookmark;
    return (
        <div>
            <h4 className=" text-2xl">{title}</h4>
        </div>
    );
};

export default Bookmark;