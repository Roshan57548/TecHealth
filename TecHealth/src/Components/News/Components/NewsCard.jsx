import { React, useState, useEffect } from "react";
import "./Style/NewsCard.css";
import {
  useMediaQuery,
  Stack,
  Pagination,
  CircularProgress
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import axios from "axios";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_248930606c8a89a1aebea5656b3fcd96d298d&q=health&country=in&category=health"
        );
        setNewsData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching news data:", error);
        setLoading(true);
      }
    };

    fetchNewsData();
  }, []);

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const numberOfPages = Math.ceil(newsData.length / recordsPerPage);
  const currentRecords = newsData.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //pagination responsive
  const matches = useMediaQuery("(max-width:600px)");

  //loading
  let loadingCircle;

  if (loading) {
    loadingCircle = <CircularProgress className='loading-indicator' />;
  } else {
    const table = currentRecords.map((card, index) => {
      if (card.image_url) {
        return (
          <div className='newscard_container' key={index}>
            <div className='newscard_image'>
              <img src={card.image_url} alt={`image-${index}`} />
            </div>
            <div className='newscard_post--content'>
              <div className='newscard_heading'>
                <h3>{card.title}</h3>
              </div>
              <div className='newscard_details'>
                <p>{card.description}</p>
              </div>
              <div className='newscard_footer'>
                <div className='btn_readmore'>
                  <button
                    className='newscard_button'
                    onClick={() => {
                      window.open(card.link, "_blank");
                    }}
                  >
                    Read More
                    <span>
                      <KeyboardArrowRight />
                    </span>
                  </button>
                </div>
                <div className='newscard_date'>{card.pubDate.slice(0, 11)}</div>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <>
        <div className='newscard--parent'>{table}</div>
        <Stack className='pagination'>
          <Pagination
            count={numberOfPages}
            color='primary'
            size={matches ? "small" : "large"}
            page={currentPage}
            onChange={handlePageChange}
            onClick={handleScrollToTop}
          />
        </Stack>
      </>
    );
  }
  return <div className='loading--circle'>{loadingCircle}</div>;
};

export default NewsCard;
