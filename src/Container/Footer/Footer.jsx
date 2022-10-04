import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper/Index";
import { client } from "../../client";
import { Images } from "../../Constants/Index";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log("form data", formData);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      console.log("working");
      setLoading(false);
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text"> Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:hello@gmail.com" className="p-text">
            hello@gagan.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="mobile" />
          <a href="tel: +91 (123456789)" className="p-text">
            +91 (123456789)
          </a>
        </div>
      </div>
      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="your name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="your email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "sending" : "Send message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for get in touch with me</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
