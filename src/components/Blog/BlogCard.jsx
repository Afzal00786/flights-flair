import React from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogCard = ({ blogItems }) => {
  return (
    <>
      {blogItems.map((blg) => (
        <>
          <div className="blog_main_title">{blg.tagTitle}</div>
          <div className="blog_card_item_container">
            {blg.chdBlogs.map((blgItem) => (
              <div className="blog_card_container">
                <div className="blog_card_tag_type">{blg.tagTitle}</div>
                <img width={"100%"} height={208} src={blgItem.img} />
                <div style={{ padding: 20 }}>
                  <div className="blog_card_title_text">{blgItem.title}</div>
                  <div className="blog_small_details_container">
                    <span>{blgItem.tripCompany}</span>
                    <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
                    <span>{blgItem.created}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default BlogCard;
