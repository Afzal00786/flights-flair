import React, { useState } from "react";
import NavBar from "../Navbar";
import "./blog.css";
import BlogCard from "./BlogCard";
import BlogSlider from "./BlogSlider";
const dummyTags = ["HOLIDAY DESTINATIONS", "TRAVEL TIPS", "PILGRIMAGE"];
const dummyBlogs = [
  {
    tagTitle: "HOLIDAY DESTINATIONS",
    chdBlogs: [
      {
        img: "https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/International/638130140539443227/638130140539443227yrSZnx.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638146533187203914/638146533187203914r946k9.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/International/638130140539443227/638130140539443227yrSZnx.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638146533187203914/638146533187203914r946k9.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/International/638130140539443227/638130140539443227yrSZnx.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638146533187203914/638146533187203914r946k9.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/637973826324879492/637973826324879492twcfHY.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
    ],
  },
  {
    tagTitle: "TRAVEL TIPS",
    chdBlogs: [
      {
        img: "https://media.easemytrip.com/media/Blog/India/638144016262437477/638144016262437477VNyVTP.jpg",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
    ],
  },
  {
    tagTitle: "PILGRIMAGE",
    chdBlogs: [
      {
        img: "https://media.easemytrip.com/media/Blog/India/638146533187203914/638146533187203914r946k9.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
      {
        img: "https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png",
        title: "Best place to celebrate",
        created: "February 23, 2023",
        tripCompany: "Easymytrpipi",
      },
    ],
  },
];

function BookNow() {
  const [tagState, setTagState] = useState("");
  const [selectedBlog, setSelectedBlog] = useState();

  const [blogItems, setBlogItems] = useState(dummyBlogs);
  const [filterApply, setFilterApply] = useState();
  const filterItem = (value) => {
    const updatedItems = dummyBlogs.filter((currElem) => {
      return currElem.tagTitle === value;
    });
    setTagState(value);
    setBlogItems(updatedItems);
    setFilterApply(updatedItems);
  };
  const filterItemReset = () => {
    setBlogItems(dummyBlogs);
    setFilterApply("");
    setTagState("");
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar />
      <BlogSlider />
      <div class="blog_active_btn">
        {dummyTags.map((i) => (
          <button
            onClick={() => filterItem(i)}
            className={i === tagState ? "blog_btn_active" : "blog_btn"}
          >
            {i}
          </button>
        ))}
        {filterApply && (
          <button onClick={() => filterItemReset()} class="blog_btn ">
            reset
          </button>
        )}
      </div>

      <BlogCard blogItems={blogItems} />
    </div>
  );
}

export default BookNow;
