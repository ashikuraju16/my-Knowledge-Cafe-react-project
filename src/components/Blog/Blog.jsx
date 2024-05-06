import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';


const Blog = ({blog,handelAddBookmark}) => {
    const {title,author_name,cover_img,author_img,published_date,reading_time } = blog;
    return (
        <div className="mb-8 space-y-8">
            <img className='w-full'  src={`/images/${cover_img}`} alt="" />
            <div className="flex justify-between ">
               <div className="flex">
                 <img className="w-14" src={`/images/${author_img}`} alt="" />
                <div className=" text-xl ml-4 font-bold">
                <h5>{author_name}</h5>
                 <h6>{published_date}</h6>
                </div>
               </div>
               <div className='flex space-x-3' >
                <p className="text-xl">{reading_time} read</p>
                <button type="button" onClick={() => handelAddBookmark(blog)} className='mb-6 text-red-600'>
  <Icon icon="noto-v1:bookmark-tabs" />
</button>
               </div>
            </div>
            <h4 className='text-5xl  leading-12'>{title}</h4>
          <button type="button" className='text-xl underline font-bold text-sky-900'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddBookmark: PropTypes.func.isRequired,
  };
export default Blog;