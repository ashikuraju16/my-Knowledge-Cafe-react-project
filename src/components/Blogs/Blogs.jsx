import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelAddBookmark}) => {
const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
}, [])

    return (
        <div className=" text-3xl mt-4 max-w-7xl mx-auto">
            <h4>Blogs:{blogs.length}</h4>
            {
                blogs.map((blog,idx) =>  
                    <Blog 
                    key={idx}
                     blog={blog}>
                        handelAddBookmark={handelAddBookmark}
                         </Blog>)
            }
        </div>
    );
};

export default Blogs;