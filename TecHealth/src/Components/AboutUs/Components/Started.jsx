
import React from 'react'
import './Style/Started.css'
const Started = (props) => {
  return (
    <div>
       <div className='started_ParentDiv'>
          <div className='row started_row'>
            <div className='col-6 started_image_div'>
              <img src={props.data.i} alt='my_image' className='started_img'/>
            </div>
            <div className='col-6 started_contents'>
            <div className='started_content'>
               <div className='started_text_h'>{props.data.Heading} <span className='started_text_h-1'>{props.data.Heading1}</span></div>
               <div className='started_para1'>{props.data.Details1}</div>
               <div className='started_para1'>{props.data.Details2}</div>
               <div className='started_para1'>{props.data.Details3}</div>
               </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Started