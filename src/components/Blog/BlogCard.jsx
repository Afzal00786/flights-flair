import React, { useEffect, useState } from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReactPaginate from "react-paginate";

const BlogCard = ({ blogItems }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffSet = itemOffset + itemsPerPage;
    setCurrentItems(blogItems.slice(itemOffset, endOffSet));
    setPageCount(Math.ceil(blogItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogItems]);

  console.log(blogItems, "blogItems");

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogItems.length;
    setItemOffset(newOffset);
  };
  console.log(blogItems, "blogItems");

  return (
    <div>
      {blogItems.map((blg) => {
        return (
          <>
            <div className="blog_main_title">{blg.tagTitle}</div>
            <div className="blog_card_item_container">
              {currentItems.map((blgItem) => (
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
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"paginationBttn"}
            />
          </>
        );
      })}
    </div>
  );
};

export default BlogCard;
