import { React, useState } from "react";
import "./Style/BlogCard.css";
import { useMediaQuery, Stack, Pagination } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const BlogCard = (props) => {
  const pageData = props.data.cards;

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = pageData.slice(indexOfFirstRecord, indexOfLastRecord);

  const numberOfPages = Math.ceil(pageData.length / recordsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  //pagination responsive
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className='blog_card--parent'>
        {currentRecords.map((card, index) => (
          <div className='blogcard_container' key={index}>
            <div className='blog_image'>
              <img src={card.image} alt={`image-${index}`} />
            </div>
            <div className='blog_post--content'>
              <div className='blog_heading'>
                <h3>{card.heading}</h3>
              </div>
              <div className='blog_details'>
                <p>{card.content}</p>
              </div>
              <div className='blog_footer'>
                <div className='btn_readmore'>
                  <button className='blog_button '>
                    {card.button}
                    <span>
                      <KeyboardArrowRight />
                    </span>
                  </button>
                </div>
                <div className='blog_date'>{card.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Stack className='pagination'>
        <Pagination
          count={numberOfPages}
          color='primary'
          size={matches ? "small" : "large"}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default BlogCard;
