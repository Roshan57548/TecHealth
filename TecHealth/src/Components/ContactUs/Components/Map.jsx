import React from "react";
import "./Style/Map.css";
const Map = () => {
  return (
    <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2997586177814!2d77.2090214150783!3d28.613939590741106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce29f0f00a665%3A0x75b60a389e4c5e18!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2s!4v1625066500162!5m2!1sen!2s"
          title="Embedded Map"
          className="google-map"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default Map;
