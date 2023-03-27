import React, { useEffect, useState } from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReactPaginate from "react-paginate";

const BlogCard = ({ blogItems }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const slicedItems = blogItems.map((i) => ({
      ...i,
      chdBlogs:
        i.chdBlogs.length > itemsPerPage
          ? i.chdBlogs.slice(itemOffset, endOffset)
          : i.chdBlogs,
    }));
    setCurrentItems(slicedItems);
    setPageCount(
      Math.ceil(
        blogItems.reduce(
          (acc, curr) =>
            acc +
            (curr.chdBlogs.length > itemsPerPage ? curr.chdBlogs.length : 0),
          0
        ) / itemsPerPage
      )
    );
  }, [itemOffset, itemsPerPage, blogItems]);
  const handlePageClick = (event, blgIndex) => {
    const newOffset = event.selected * itemsPerPage;
    const endOffset = newOffset + itemsPerPage;
    const slicedChdBlogs =
      blogItems[blgIndex].chdBlogs.length > itemsPerPage
        ? blogItems[blgIndex].chdBlogs.slice(newOffset, endOffset)
        : blogItems[blgIndex].chdBlogs;
    const updatedBlg = { ...blogItems[blgIndex], chdBlogs: slicedChdBlogs };
    const updatedItems = [...currentItems];
    updatedItems.splice(blgIndex, 1, updatedBlg);
    setCurrentItems(updatedItems);
  };
  return (
    <div>
      {currentItems.map((blg, index) => (
        <>
          <div className="blog_main_title">{blg.tagTitle}</div>
          <div className="blog_card_item_container">
            {blg?.chdBlogs?.map((blgItem) => (
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
          {blogItems[index].chdBlogs.length >= 9 && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={(event) => handlePageClick(event, index)}
              containerClassName={"paginationBttn"}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default BlogCard;
