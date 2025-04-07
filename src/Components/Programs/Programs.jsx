import "./program.css";
import Title from "../Title/Title.jsx";
import Card from "../Cards/Card.jsx";
import Card1 from "../Cards/Card1.jsx";

const Programs = () => {
  return (
    <div className="container  ourProgram">
      <Title subTitle="Our Program" title="What we Offer" />
      <div className="pHeadContent">
        <h4>
          hello
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
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0145.jpg"
        head="Core Instructional Program"
        p1="Our core instructional program focuses on building students’ foundational language, math, science, and history skills, as well as focusing on critical thinking and collaboration in every subject area."
        p2="Students also take courses in Spanish, physical education, and the arts. In addition to their content-based classes, students are supported through an interactive, differentiated English Language Arts and math intervention program to ensure students grow continually and make at least one year’s growth in their learning each year."
        p3="Technology is infused across all classroom learning environments, and students are provided opportunities to regularly make real world applications and connections."
      />
      <Card1
        head="Our Educators"
        p1="Our teachers are talented, passionate, and dedicated educators who focus on the whole child so that all students succeed. They meet our students where they are and provide them with resources and support they need."
        p2="Additionally, our educators know our students individually and understand and support our students’ social and emotional needs so that our students can thrive in all aspects of their lives."
        p3="Bright Star’s holistic approach to education also extends to our educators. We support our teachers to thrive and grow in their craft with robust professional development each year, as well as one-on-one, job-embedded instructional mentoring and coaching."
        img="https://images.indianexpress.com/2020/10/teacher-1.jpg?w=389"
      />
      <Card
        img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0087.jpg"
        head="Inclusive Support at Bright Star Schools"
        p1="Bright Star's Inclusive Education Department ensures that students cultivate strategic ways to improve their academic, social, language, and environmental challenges through self-advocacy, community awareness, and involvement to propel them to higher education and career opportunities of their choosing."
        p2="As a Bright Star parent said, The teachers, the staff, and my family, we all work together as a team for my daughter's success. I wouldn’t be able to do it without their support. "
      >
        {" "}
      </Card>
    </div>
  );
};

export default Programs;
