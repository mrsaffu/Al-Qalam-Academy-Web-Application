import React from "react";
import Title from "../Title/Title.jsx";
import Card from "../Cards/Card.jsx";
import Card1 from "../Cards/Card1.jsx";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="container  aboutMainSec">
      <Title subTitle="About us" title="Who We Are" />

      <div className="aHeadContent">
        <h4>
          At Bright Star Schools, our mission is to provide holistic, inclusive
          support for all students to achieve academic excellence and grow their
          unique talents so that they find joy and fulfillment in higher
          education, career, and life.
        </h4>
        <h5>
          Here, we have high expectations for all of our students. We believe
          that every student is capable of succeeding in every subject area.
        </h5>
      </div>

      <Card
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/Founder-1200x524.jpg"
        head="Founder  (1959-2009) "
        name="Late Dr. Md Alauddin (M.A.; B.ED.; PH.D.)"
        p1=""
        p2="Who left us for heavenly adobe on 02.08.2009. Your cherished ideal still helps us as a source of success to achieve the mission planned by you in field of academic excellence."
        p3="The school was established by Late Dr. Alauddin Aftab, a visionary and pioneer in field of education. Since opening in 2004, our school adheres to his motto of “Serving the Community in the Spirit of Benevolence” and provides a quality, holistic education."
        p4="Our school aims to provide all students with a multi-faceted, school-based curriculum, that will enable students to develop independent thinking skills, the ability to distinguish between right and wrong, a positive attitude towards life and a thirst for knowledge."
      />

      <Card1
        head=" Principal"
        name="A. K. Malik"
        p1=""
        p2="Welcome to Al Qalam Academy. It’s a great pleasure as the principal of this wonderful school, to introduce you to all it has to offer. The School was founded in 2004 by Late Dr. Alauddin on bed rock of honour & commitment & to this day, the most important quality that is nurtured & cherished at Al Qalam is integrity. Academic Excellence & excellence in all co-curricular spheres is worked for with deliberation & purpose."
        p3="At the best of times, to cope with the rigours of living in an often difficult & unpredictable world is not easy. Honest hard work & the ability to handle pressures make for a small measure of satisfaction. And if you strive to and not reflect on success, you may have a larger collection of blessings to be thankful for. And that is what this school is all about. "
        p4="A.K. Malik Principal Al Qalam Academy"
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/003-600x686.jpg"
      />

      <Card
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/001-800x800.jpg"
        head="Director"
        name="Nikhat Jahan"
        p1="Dear parents, I have always been passionate about the joys of watching my children blossom into adults. I cherish having shared their moments of joy, hardship, and success. I have been there as they played, studied, laughed and learned. They are the joy of my life, the root of my happiness, and the source of my comfort."
        p2="Motivated by the love of our own children and all children, Dr Alauddin Aftab got inspired to establish a school that offers an ideal nurturing environment to provide the richest educational and learning environment for our children. Therefore, we established this school to serve the purpose of raising and educating them in such a perfect environment that gives the best curriculum and teaching methods."
        p3="SincerelyNikhat Jahan Director Al Qalam Academy"
      />
      <Card1
        head="Managing Director"
        name="Kaunain Shahab"
        p1="Our  schools mission is to prepare young people to become active, engaged and  responsible citizens of the local and global community."
        p2="At  Al Qalam Academy we offer an attractive, safe and welcoming learning  environment for all students. Building positive relationships with our families  is at the centre of all our work."
        p3="Our  goal is to create an environment that recognises the unique stages of  development and provides appropriate child-centred experiences based on the  cutting edge Curriculum."
        p4="Er. Kaunain Shahab Managing Director"
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/18-600x801.jpg"
      />
    </div>
  );
};

export default AboutUs;
