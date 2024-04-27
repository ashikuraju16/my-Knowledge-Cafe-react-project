import { Icon } from '@iconify/react';

const Blog = ({blog}) => {
    const {title,author_name,cover_img,author_img,published_date,reading_time } = blog;
    return (
        <div className="w-2/3  mb-8 space-y-4">
            <img  src={`/images/${cover_img}`} alt="" />
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
                <button className=' mb-6 text-red-600'><Icon icon="noto-v1:bookmark-tabs" /></button>
               </div>
            </div>
            <h4>{title}</h4>
            <button className='text-xl underline font-bold text-sky-900'>Mark as Read</button>
        </div>
    );
};

export default Blog;