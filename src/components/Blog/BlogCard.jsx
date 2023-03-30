import React, { useEffect, useState } from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReactPaginate from "react-paginate";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ blogItems }) => {
  const navigation = useNavigate();
  console.log(blogItems, "blogItems");
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9;
  useEffect(() => {
    let itemOffset = 0;
    const updatedItems = blogItems.map((item) => {
      const endOffset = itemOffset + itemsPerPage;
      const slicedChdBlogs =
        item?.chdBlogs?.length > itemsPerPage
          ? item.chdBlogs.slice(itemOffset, endOffset)
          : item.chdBlogs;
      const pageCount = Math?.ceil(item.chdBlogs.length / itemsPerPage);
      return {
        ...item,
        chdBlogs: slicedChdBlogs,
        pageCount: pageCount,
      };
    });
    setCurrentItems(updatedItems);
  }, [blogItems, itemsPerPage]);
  const handlePageClick = (event, blgIndex) => {
    const newOffset = event.selected * itemsPerPage;
    const endOffset = newOffset + itemsPerPage;
    const slicedChdBlogs =
      blogItems[blgIndex]?.chdBlogs?.length > itemsPerPage
        ? blogItems[blgIndex]?.chdBlogs?.slice(newOffset, endOffset)
        : blogItems[blgIndex]?.chdBlogs;
    const pageCount = Math?.ceil(
      blogItems[blgIndex]?.chdBlogs?.length / itemsPerPage
    );
    const updatedBlg = { ...blogItems[blgIndex], chdBlogs: slicedChdBlogs };
    const updatedItems = [...currentItems];
    updatedItems?.splice(blgIndex, 1, { ...updatedBlg, pageCount });
    setCurrentItems(updatedItems);
  };
  return (
    <div>
      {currentItems?.map((blg, index) => (
        <>
          {console.log(blg.pageCount, "pageCount")}
          <div className="blog_main_title">{blg.tagTitle}</div>
          <div className="blog_card_item_container">
            {blg?.chdBlogs?.map((blgItem) => (
              <div
                className="blog_card_container"
                onClick={() => navigation("/BlogDetails", { state: blgItem })}
              >
                <div className="blog_card_tag_type">{blg.tagTitle}</div>
                <img width={"100%"} height={208} src={blgItem.img} />
                <div style={{ padding: 20 }}>
                  <div className="blog_card_title_text">{blgItem.title}</div>

                  <div className="blog_small_details_container">
                    <span>{blgItem.tripCompany}</span>
                    <AccessTimeIcon
                      style={{
                        fontSize: 14,
                        color: "gray",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />
                    <span>{blgItem.created}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {blogItems[index]?.chdBlogs?.length >= 9 && (
            <ReactPaginate
              previousLabel={
                <KeyboardArrowLeftIcon style={{ width: 20, height: 20 }} />
              }
              nextLabel={
                <KeyboardArrowRightIcon style={{ width: 20, height: 20 }} />
              }
              pageCount={blg.pageCount}
              onPageChange={(event) => handlePageClick(event, index)}
              containerClassName={"paginationBttn"}
              pageLinkClassName="page-num"
              previousLinkClassName="page-num2"
              nextLinkClassName="page-num2"
              activeLinkClassName="active"
            />
          )}
        </>
      ))}
    </div>
  );
};

export default BlogCard;
