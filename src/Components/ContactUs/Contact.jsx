import { useState } from "react";
import "./Contact.css";
import Title from "../Title/Title";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArro from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3646f084-d5d8-477a-84ef-d799cdabd731");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container contect">
      <Title subTitle="Contact Us" title="Get in Touch" />
       <div className="cHeadContent">
        <h4>
          Our mission is to change the way education meets the future <br />
          to foster interdisciplinary, integrated thinking and innovative
          leadership. <br /> to engage fully in the global community <br /> and
          to facilitate lifelong learning.
        </h4>
      </div> 
      <div className="contactCont">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msgIcon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mailIcon} alt="" />
              alqalamdbg@gmail.com
            </li>
            <li>
              {" "}
              <img src={phoneIcon} alt="" />
              +91 985-232-7737
            </li>
            <li>
              <img src={locationIcon} alt="" />
              Taleem Nagar, Jamalpura, Chakrahmat, Darbhanga, <br />
              Bihar - 846004
            </li>
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8151673678676!2d85.88428297545573!3d26.13756887711774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9b2600eda05%3A0x1660d1617a382f34!2sAl%20Qalam%20Academy!5e0!3m2!1sen!2sin!4v1738522425560!5m2!1sen!2sin"
                width="400"
                height="250"
                loading="lazy"
              ></iframe>
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="text">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              id="text"
            />
            <label htmlFor="tel">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              id="tel"
            />
            <label htmlFor="mess">Write your message hear !</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              id="mess"
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={whiteArro} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
