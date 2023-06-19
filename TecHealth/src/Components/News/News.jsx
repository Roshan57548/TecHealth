import React from "react";
import "./Style/News.css";
import NewsHeader from "./Components/NewsHeader";
import NewsCard from "./Components/NewsCard";
import ContentNewsHeader from "./Content/ContentNewsHeader";
const News = () => {
  return (
    <div className='News'>
        <NewsHeader data={ContentNewsHeader}/>
        <NewsCard />
    </div>
  );
};

export default News;
