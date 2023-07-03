import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Style/NeedAmbulance.css'
import Form from "../../Form/Amb_Booking_Form";
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NeedAmbulance = (props) => {
   const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className='need_Ambulance-0'>
    <div><h1 className='need_Ambulance-heading'>{props.data.heading}</h1></div>
     <p className='need_Ambulance-para'>{props.data.para}</p>
     <div className='need_Ambulance-center'>
     <div className='need_Ambulance-btns'>
              <button className='need_Ambulance-btn' onClick={handleClick}><ArrowForwardIcon/>Book Now</button>    
              <button className='need_Ambulance-btn'><CallIcon/>Call Now</button>
    </div>
     </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <Form onClose={handleClosePopup} />
          </div>
        </div>
      )}   
    </div>
  )
}

export default NeedAmbulance