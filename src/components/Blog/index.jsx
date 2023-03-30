import React, { useState } from "react";
import NavBar from "../Navbar";
import "./blog.css";
import BlogCard from "./BlogCard";
import BlogSlider from "./BlogSlider";
import CloseIcon from "@mui/icons-material/Close";
import { RealDummyBlogs } from "./RealBlogData";
const dummyTags = [
  "Pakistan Sector",
  // "TRAVEL TIPS",
  // "PILGRIMAGE",
  // "BEST DAYS SPEND",
];

function BookNow() {
  const [tagState, setTagState] = useState("");
  const [selectedBlog, setSelectedBlog] = useState();

  const [blogItems, setBlogItems] = useState(RealDummyBlogs);
  const [filterApply, setFilterApply] = useState();
  const filterItem = (value) => {
    const updatedItems = RealDummyBlogs.filter((currElem) => {
      return currElem.tagTitle === value;
    });
    setTagState(value);
    setBlogItems(updatedItems);
    setFilterApply(updatedItems);
  };
  const filterItemReset = () => {
    setBlogItems(RealDummyBlogs);
    setFilterApply("");
    setTagState("");
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar />
      <BlogSlider />
      <div>
        <div className={"tag_btn"}>Filter</div>
      </div>
      <div class="blog_active_btn">
        <div>
          {dummyTags.map((i) => (
            <button
              onClick={() => filterItem(i)}
              className={i === tagState ? "blog_btn_active" : "blog_btn"}
            >
              {i}
            </button>
          ))}
        </div>
        {filterApply && (
          <button onClick={() => filterItemReset()} className="cross_btn ">
            <CloseIcon style={{}} />
          </button>
        )}
      </div>

      <BlogCard blogItems={blogItems} />
    </div>
  );
}

export default BookNow;
