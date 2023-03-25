import React from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dummyData } from "../Blog/blogData";

const BlogCard = () => {
  return (
    <>
      {dummyData.map(
        (data) => (
          console.log(dummyData, "dummyData"),
          (
            <div className="blog_card_container">
              <div className="blog_card_tag_type">{data.tags}</div>
              <img width={"100%"} height={208} src={data.children.image} />
              <div style={{ padding: 20 }}>
                <div className="blog_card_title_text">
                  {data.children.title}
                </div>
                <div className="blog_small_details_container">
                  {data.children.des}
                  <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
                </div>
              </div>
            </div>
          )
        )
      )}
    </>
  );
};

export default BlogCard;
