import axios from "axios";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import "./Style/NewsCard.css";
const NewsCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_24781300f8a86df7eb37002ee377ba098a91a&q=health&country=in&language=en&category=health "
        )
      .then((response) => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  let table;
  if (data) {
    table = data.map((value) => {
      if (value.image_url) {
        return (
          <div className="col-lg-4 col-md-6 col-12 mt-5 mb-5">
            <Card>
              <Card.Img
                className="news-3"
                variant="top"
                src={value.image_url}
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.description.slice(0, 150)}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
  }

  return (
    <div className="news-1">
      <div className="container">
        <div className="row news-1-1">
          <div className="col-12 news-8 row">{table}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
