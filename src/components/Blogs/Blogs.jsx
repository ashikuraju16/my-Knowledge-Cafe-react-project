import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
}, [])

    return (
        <div className=" max-w-7xl mx-auto text-3xl mt-4">
            <h4>Blogs:{blogs.length}</h4>
            {
                blogs.map((blog,idx) =>  
                    <Blog 
                    key={idx}
                     blog={blog}>
                         </Blog>)
            }
        </div>
    );
};

export default Blogs;