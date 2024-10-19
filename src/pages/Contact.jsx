import React, { useState } from "react";
import { CONTACT_US_IMAGE_URL } from "../utils/constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextArea] = useState("");

  const [showContactUs, setShowContactUs] = useState(true);

  const handleSubmit = () => {
    setShowContactUs(false);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-2 mt-24 pb-16 ">
      <div className="md:w-4/12 lg:w-3/12 w-6/12">
        <h2 className="text-3xl text-center p-2">Contact Us</h2>
        <img
          src={CONTACT_US_IMAGE_URL}
          alt="contact-image"
          className="w-full "
        />
      </div>

      {showContactUs && (
        <div className="w-full lg:w-5/12 mt-8">
          <form
            action=""
            className="flex flex-col gap-4 w-full "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter your name..."
              className="border p-2 "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email ..."
              className="border p-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={4}
              cols={4}
              placeholder="Type your message here..."
              value={textarea}
              className="border p-2"
              onChange={(e) => setTextArea(e.target.value)}
            />

            <button className="border w-20 p-1 mx-auto" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
