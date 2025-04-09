// import React, { useRef } from "react";
import "./Hulk.css";
import Title from "../../Title/Title.jsx";
import HulkCard from "../../Cards/HulkCard/HulkCard.jsx";
import imgLogo1 from "../../../assets/imgLogo1.svg";
import imgLogo2 from "../../../assets/imgLogo2.svg";
import imgLogo3 from "../../../assets/imgLogo3.svg";
import imgLogo4 from "../../../assets/imgLogo4.svg";
import imgLogo5 from "../../../assets/imgLogo5.svg";
import imgLogo6 from "../../../assets/imgLogo6.svg";
import alLogo from "../../../assets/AlqalamLogo.png";

const Hulk = () => {

  
  return (
    <div className="container hulkMainCont">
      <div className="top">
        <img src={alLogo} alt="" className="allogo" />
        <h1 className="greetHulk"> WELCOME TO AL-QALAM ACADEMY</h1>
      </div>

      <Title title="Your Future is Bright!" className="hulkTitle"></Title>
      <div className="hHeadContent">
        <h5>
          In Bright Star’s free, public, and joyful schools, we provide students
          with strong academics, holistic and inclusive support, and rich life
          opportunities beyond the classroom so they thrive in kindergarten
          through 12th grade … and far beyond!
        </h5>

        <div className="hulkCards">
          <HulkCard
            hcolor="rgba(0, 51, 106, 0.89)"
            img="https://media.istockphoto.com/id/1351416055/photo/two-teachers-teaching-students-in-library.jpg?s=2048x2048&w=is&k=20&c=MaP-B30Pw5x2pBWK5gduAV__yRZdiA3kwvg_4pQEWjg="
            imgLogo={imgLogo1}
            heading="Strong Aademics"
            paragraph="Form their first day at a Bright Star School, br our students are
          prepared for success"
          />
          <HulkCard
            hcolor="rgba(255, 0, 0, 0.83)"
            img="https://media.istockphoto.com/id/504874996/photo/teaching-a-lesson-in-homeschool.jpg?s=2048x2048&w=is&k=20&c=2Us5v4NJ2VoianT2vsb2HpavlbyAYsECQiFD4wxJdXU="
            imgLogo={imgLogo2}
            heading="Talented Teachers"
            paragraph="Honoring our talented teachers who inspire, guide, and empower every student to achieve their dreams!"
          />
          <HulkCard
            hcolor=" rgba(175, 142, 10, 0.85)"
            img="https://media.istockphoto.com/id/1418536580/photo/young-woman-giving-a-lecture-in-an-university-or-group-therapy.jpg?s=2048x2048&w=is&k=20&c=-Tq5lWgWX9rf30QbOSCArxTiMxkBCQWu1cEbRU0lrDE="
            imgLogo={imgLogo3}
            heading="Dedicated Counselors"
            paragraph="Honoring our dedicated counselors who guide, support, and inspire students toward a bright future!"
          />
          <HulkCard
            hcolor="rgba(255, 0, 0, 0.83)"
            img="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgLogo={imgLogo4}
            heading="Inclusive(spacal) Education"
            paragraph="Empowering every learner through inclusive and special education, embracing diversity with care and support!"
          />
          <HulkCard
            hcolor="rgba(175, 142, 10, 0.85)"
            img="https://media.istockphoto.com/id/1146899773/photo/school-children-leaving-for-home.jpg?s=2048x2048&w=is&k=20&c=sXpiiibcqvbNZs1rp12KlFHMWUB4WIZ7FmCy63YW-f0="
            imgLogo={imgLogo5}
            heading="Rich Life Experience"
            paragraph="Providing a rich life experience through learning, growth, and meaningful opportunities for every student!"
          />
          <HulkCard
            hcolor="rgba(0, 51, 106, 0.89)"
            img="https://media.istockphoto.com/id/1444248160/photo/graduation-students-and-education-goal-success-celebration-with-happy-women-excited-victory.jpg?s=2048x2048&w=is&k=20&c=74WaTqjwzWT8BC6tAvoa5riAtTpoSgbas2vNuHzsPoE="
            imgLogo={imgLogo6}
            heading="Higher Education Access & Support"
            paragraph="Ensuring access to higher education with guidance, support, and opportunities for every aspiring student!"
          />
        </div>
      </div>
    </div>
  );
};

export default Hulk;
