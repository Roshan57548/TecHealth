import React, { useEffect, useState } from "react";
import "./Style/Form.css";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "yup-phone";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const Booking_Amb_Form = ({ onClose }) => {
  const History = useNavigate();
  const MobileNoRegx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const validate = yup.object({
    fullname: yup.string().min(2).required(),
    MobileNo: yup
      .string()
      .required()
      .matches(MobileNoRegx, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    email: yup.string().email().required(),
    AmbulanceType: yup.string().min(2).required(),
    DropLocation: yup.string().min(2).required(),
    PickupLocation: yup.string().min(2).required(),
  });

  const user = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      MobileNo: "",
      AmbulanceType: "",
      PickupLocation: "",
      DropLocation: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {
        fullname,
        MobileNo,
        email,
        AmbulanceType,
        PickupLocation,
        DropLocation,
      } = values;
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/jQpytAjWMTkeLKBa",
        params: { tabId: "Sheet1" },
        data: [
          [
            fullname,
            MobileNo,
            email,
            AmbulanceType,
            PickupLocation,
            DropLocation,
          ],
        ],
      })
        .then(function (response) {
          // handle success
          console.log(response.data);
          swal("Send", "Your message sent successfully!", "success").then(
            (value) => {
              History("/");
              location.reload();
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
    <div className="popup">
      <div className="popup-content">
        <div className="popup-content-cl-btn">
          <CloseIcon className="form_close_icon" onClick={handleClose} />{" "}
        </div>
        <div className="ContactForm-0">
          <div className="container ContactForm-1">
            <div className="row ContactForm-1">
              <div className="col-lg-6 col-md-12">
                <Form
                  method="POST"
                  onSubmit={user.handleSubmit}
                  className="col-12 takewidth"
                >
                  <h2 className="send">Fill Form to Book Ambulance</h2>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        name="fullname"
                        value={user.values.fullname}
                        onChange={user.handleChange}
                        placeholder="Enter Full Name"
                      />
                      {user.touched.fullname && user.errors.fullname && (
                        <p className="error-part">{user.errors.fullname}</p>
                      )}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridName">
                      <Form.Label>Mobile No</Form.Label>
                      <Form.Control
                        name="MobileNo"
                        value={user.values.MobileNo}
                        onChange={user.handleChange}
                        placeholder="Enter Mobile No"
                      />
                      {user.touched.MobileNo && user.errors.MobileNo && (
                        <p className="error-part">{user.errors.MobileNo}</p>
                      )}
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        value={user.values.email}
                        onChange={user.handleChange}
                        type="email"
                        placeholder="Enter email"
                      />
                      {user.touched.email && user.errors.email && (
                        <p className="error-part">{user.errors.email}</p>
                      )}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridtext">
                      <Form.Label>Ambulance type</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        type="select"
                        name="AmbulanceType"
                        className="dropdown"
                        onChange={user.handleChange}
                      >
                        <option disabled hidden selected>
                          Select Ambulance Type
                        </option>
                        <option value="Basic life support">Basic life support</option>
                        <option value="Advanced life support">Advanced life support</option>
                        <option value="ICU Ambulance">ICU Ambulance</option>
                        <option value="Mortuary">Mortuary</option>
                        <option value="Patient Transfer">Patient Transfer</option>
                      </Form.Select>
                      {user.touched.AmbulanceType && user.errors.AmbulanceType && (
                        <p className="error-part">{user.errors.AmbulanceType}</p>
                      )}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridtext">
                      <Form.Label>Pickup Location</Form.Label>
                      <Form.Control
                        name="PickupLocation"
                        value={user.values.PickupLocation}
                        onChange={user.handleChange}
                        placeholder="Enter Pickup Location."
                        as="textarea"
                        rows={1}
                      />
                      {user.touched.PickupLocation &&
                        user.errors.PickupLocation && (
                          <p className="error-part">
                            {user.errors.PickupLocation}
                          </p>
                        )}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridtext">
                      <Form.Label>Drop Location</Form.Label>
                      <Form.Control
                        name="DropLocation"
                        value={user.values.DropLocation}
                        onChange={user.handleChange}
                        placeholder="Enter Drop Location"
                        as="textarea"
                        rows={1}
                      />
                      {user.touched.DropLocation &&
                        user.errors.DropLocation && (
                          <p className="error-part">
                            {user.errors.DropLocation}
                          </p>
                        )}
                    </Form.Group>
                  </Row>
                  <Button variant="primary" type="submit" id="galllay-button">
                    Submit
                  </Button>
                  <br /> <br />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking_Amb_Form;
