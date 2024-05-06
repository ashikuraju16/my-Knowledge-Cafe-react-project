import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";


function App() {
  const [bookmark,setBookmark]=useState([]);

  const handelAddBookmark = blog =>{
 
    const newBookmark = [...bookmark,blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Header />
    <div className="flex w-[75%] mx-auto">
    <Blogs handelAddBookmark={handelAddBookmark} />
      <Bookmarks bookmarks={bookmark} />
    </div>
    </>
  );
}

export default App;
