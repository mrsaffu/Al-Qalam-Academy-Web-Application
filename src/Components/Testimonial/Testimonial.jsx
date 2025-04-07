import React, { useRef } from "react";
import "./testimonial.css";
import Title from "../Title/Title";
import nextbtn from "../../assets/next-icon.png";
import backbtn from "../../assets/back-icon.png";
import img from "../../assets/ariba.jpg"

const Testimonial = () => {
  let slider = useRef();
  console.log(slider.current);
  let tx = 0;
  let sliderForword = () => {
    if (tx > -50) {
      tx -= 16.8;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    console.log(tx);
  };
  let sliderBackword = () => {
    if (tx < 0) {
      tx += 16.8;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    console.log(tx);
  };

  return (
    <div className="container testiCont1">
      <Title subTitle="TESTIMONIALS" title="What Student Says" />

      <div className="testiCont">
        <img src={nextbtn} alt="" className="nextBtn" onClick={sliderForword} />
        <img
          src={backbtn}
          alt=""
          className="backBtn"
          onClick={sliderBackword}
        />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src="https://avatars.githubusercontent.com/u/123302765?v=4"
                    alt=""
                  />
                  <div className="userName">
                    <h3>Safwan Ahmad</h3>
                    <span>Bengalure India</span>
                  </div>
                </div>
                <p className="discription">
                  Al Qalam Academy is a place of excellence, creativity, and
                  growth. The dedicated teachers, engaging curriculum, and
                  vibrant activities create an inspiring learning environment.
                  With a perfect balance of academics and extracurriculars,
                  students thrive here. Proud to be part of this incredible
                  school! Thank you, Thank you, Al Qalam Academy, for making
                  learning extraordinary! 🚀✨
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src={img}
                    alt=""
                  />
                  <div className="userName">
                    <h3>Ariba Riya Karami</h3>
                    <span>Canada US</span>
                  </div>
                </div>
                <p className="discription">
                  Al qalam academy is truly a place where education meets
                  excellence. The supportive teachers, innovative learning
                  methods, and engaging activities make every day exciting. The
                  school fosters creativity, discipline, and leadership, helping
                  students grow into confident individuals. Proud to be part of
                  this amazing institution! Thank you, Al Qalam Academy! 🌟🎓
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHEc7Cx1wMVuQ/profile-displayphoto-shrink_800_800/B4DZRmFbZpHYAc-/0/1736879487036?e=1744243200&v=beta&t=qNFqo1JDjF-4IXW2SVyAs80YpXPdfTCd-sXKEhZ0fdI"
                    alt=""
                  />
                  <div className="userName">
                    <h3>Saad Mohammad Sameer</h3>
                    <span>Darbhanga India</span>
                  </div>
                </div>
                <p className="discription">
                  Al Qalam Academy provides an outstanding environment for
                  learning and growth. The dedicated teachers, well-structured
                  curriculum, and exciting extracurricular activities make
                  education enjoyable and meaningful. The school nurtures
                  talent, builds confidence, and shapes bright futures. I am
                  proud to be part of such an inspiring institution! Thank you,
                  Al Qalam Academy! 🌟📚
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src="https://images.javatpoint.com/top10-technologies/images/top-10-bollywood-actors2.jpg"
                    alt=""
                  />
                  <div className="userName">
                    <h3>Safwan Ahmad</h3>
                    <span>India Darbhanga</span>
                  </div>
                </div>
                <p className="discription">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src="https://images.javatpoint.com/top10-technologies/images/top-10-bollywood-actors2.jpg"
                    alt=""
                  />
                  <div className="userName">
                    <h3>Safwan Ahmad</h3>
                    <span>India Darbhanga</span>
                  </div>
                </div>
                <p className="discription">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img
                    src="https://images.javatpoint.com/top10-technologies/images/top-10-bollywood-actors2.jpg"
                    alt=""
                  />
                  <div className="userName">
                    <h3>Safwan Ahmad</h3>
                    <span>India Darbhanga</span>
                  </div>
                </div>
                <p className="discription">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
