import React from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const BlogCard = () => {
  return (
    <div className="blog_card_container">
      <div className="blog_card_tag_type">Holiday Destinations</div>
      <img
        width={"100%"}
        height={208}
        src="https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png"
      />
      <div style={{ padding: 20 }}>
        <div className="blog_card_title_text">Best place to celebrate</div>
        <div className="blog_small_details_container">
          <span>Easymytrpipi</span>
          <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
          <span>February 23, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
