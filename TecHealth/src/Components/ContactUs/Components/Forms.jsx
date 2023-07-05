
import React from "react";
import "./Style/Forms.css";
import { ArrowForward } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "yup-phone";
import axios from "axios";

const Forms = (props) => {

  const History = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validate = yup.object({
      fullname: yup.string().min(2).required(),
      email: yup.string().email().required(),
      Phone: yup
        .string()
        .required()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "too short")
        .max(10, "too long"),
        message: yup.string().min(2).required(),
    });
  
    const user = useFormik({
      initialValues: {
        fullname: "",
        email: "",
        Phone: "",
        message: "",
      },
      validationSchema: validate,
      onSubmit: async (values) => {
        const {
          fullname,
          email,
          Phone,
          message,
        } = values;
        const res = await axios({
          method: "post",
          url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/NsWWcHznpbvDIctE",
          params: { tabId: "Sheet1" },
          data: [
            [
              fullname,
              email,
              Phone,
              message,
            ],
          ],
        })
          .then(function (response) {
            // handle success
            console.log(response.data);
            swal("Send", "Your message sent successfully!", "success").then(
              (value) => {
                History("/");
              }
            );
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            swal("Error", "All field are required", "warning");
          });
      },
    });

  return (
    <div className='form-main__container'>
      <div className='row'>
        <div className='form_left col-lg-6'>
          <h1>{props.data.Heading}</h1>
          <div>
            <h3>
              {props.data.Quote}
              <span>
                &nbsp;
                <ArrowForward />
              </span>
            </h3>
          </div>
        </div>
        <div className='form_right col-lg-6'>
          <form action='#' className='form_wrapper' method='POST'  onSubmit={user.handleSubmit}>
            <div className='row'>
              <div className='col-sm-6'>
                {/* fullname */}
                <input
                  type='text'
                  name="fullname"
                    value={user.values.fullname}
                    onChange={user.handleChange}
                  autoComplete='off'
                  placeholder='Full Name'
                  className='form_input'
                  // required
                />
                 {user.touched.fullname && user.errors.fullname && (
                    <p id="error-part">{user.errors.fullname}</p>
                  )}
              </div>
              {/* email */}
              <div className='col-sm-6'>
                <input
                  type='email'
                  
                  name="email"
                    value={user.values.email}
                    onChange={user.handleChange}
                  autoComplete='off'
                  placeholder='Email Address'
                  className='form_input'
                  // required
                />
                 {user.touched.email && user.errors.email && (
                    <p id="error-part">{user.errors.email}</p>
                  )}
              </div>
              {/* mobile number */}
              <div className='col-lg-12'>
                <input
                  type='tel'
                
                  name="Phone"
                    value={user.values.Phone}
                    onChange={user.handleChange}
                  placeholder='Phone Number'
                  className='form_input'
                  autoComplete='off'
                  // required
                />
                 {user.touched.Phone && user.errors.Phone && (
                    <p id="error-part">{user.errors.Phone}</p>
                  )}
              </div>
              {/* message */}
              <div className='col-12'>
                <textarea
                  className='form_input'
                
                  name="message"
                  value={user.values.carddetails}
                  onChange={user.handleChange}
                  placeholder='Your Message...'
                  // required
                  autoComplete='off'
                ></textarea>
              </div>
              {/* button */}
              <div className='col-lg-12'>
                <input
                  type='submit'
                  name='submit'
                  value='SUBMIT'
                  className='form_button'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
