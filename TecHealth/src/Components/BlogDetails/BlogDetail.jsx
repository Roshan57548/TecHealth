import React from 'react';
import './Style/BlogDetail.css';
import { useLocation,useParams } from 'react-router-dom';
const BlogDetail = () => {
  const location=useLocation();
  return (
    <div className='BlogDetail' >
      <div className='BlogDetail_image_mainHeading_mainContent'>
        <img className='BlogDetail_Image'  src={location.state.card.image} alt="" />
        <div className='BlogDetail_MainHeading_mainContent'>
          <h3 className='BlogDetail_MainHeading' >{location.state.card.mainHeading}</h3>
          <p className='BlogDetail_MainContent'>{location.state.card.mainContent}</p>
        </div>
      </div>
      <div className='BlogDetail_Content'>
        {location.state.card.content.map((ele,ind)=>{
          return <div className='BlogDetail_SubHeading_SubContent'key={ind} >
                    <h5 className='BlogDetail_SubHeading'>{ele.subHeading}</h5>
                    <p className='BlogDetail_SubContent'>{ele.subContent}</p>
                 </div>
        })}
      </div>
    </div>
  )
}

export default BlogDetail