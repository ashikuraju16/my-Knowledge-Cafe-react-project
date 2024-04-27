const Bookmark = ({ bookmark}) => {
    const [title]=bookmark;
    return (
        <div className="bg-gray-200 p-4 m-4 rounded-xl">
            <h4 className=" text-2xl">{title}</h4>
        </div>
    );
};

export default Bookmark;