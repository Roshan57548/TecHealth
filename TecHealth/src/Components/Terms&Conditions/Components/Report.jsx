import React from 'react'
import './Style/Report.css'
const Report = (props) => {
  return (
    <div className='report'>
      <h1 className='report-heading'>
        {props.data.Heading}
      </h1>
      <p className='report-para'>{props.data.para}</p>
    </div>
  )
}

export default Report
