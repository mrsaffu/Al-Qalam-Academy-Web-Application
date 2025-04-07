import React from "react";
import "./Events.css";
import Title from "../Title/Title";
import EventCard from "../Cards/EventCard";
const Events = () => {
  return (
    <div className="container eventsMainCont">
      <Title subTitle="Events " title=" Where Memories Are Made" />
      <p>
        At Al Qalam Academy, we believe in learning beyond the classroom! Our
        school hosts a variety of engaging events throughout the year, fostering
        creativity, teamwork, and school spirit. From academic competitions to
        cultural celebrations, every event is an opportunity for students to
        showcase their talents and build unforgettable memories.
      </p>

      <div className="eventsCard">
        <EventCard
          img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC0220.jpg"
          heading="Annual Function 2016"
          paragraph="We want to extend our deepest thanks for your generosity and support in
        making Pre…"
          hoeverText=" possible. Your kindness and contributions have made a meaningful impact, and we are truly grateful. We look forward to continuing this journey together and creating even more positive change.Let me know if you’d like any adjustments! 😊"
        />
        <EventCard
          img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0252.jpg"
          heading="Science Exhibition"
          paragraph="Explore innovation at our Science exhibition with exciting projects, experiments, and creative student ideas.."
          hoeverText=" Witness breakthroughs, interactive displays, and inspiring discoveries! Experience hands-on activities, engage with experts, and ignite curiosity in science."
        />
        <EventCard
          img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC0434.jpg"
          heading="Independence Day"
          paragraph="Join us as we celebrate the spirit of freedom and patriotism at Al Qalam Academy's Independence Celebration! ..."
          hoeverText="This year, we honor the courage, sacrifices, and unity that shaped our nation's history. It’s a day to reflect on our shared values and celebrate the pride of being India.   
          🎉 Flag Hoisting Ceremony,
          🎤 Cultural Performances,
          📜 Speeches & Recitations,
          🏆 Patriotic Competitions,
          🎆 Grand Finale 
          "
        />
        <EventCard
          img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNQB9Q0Vryafj-8Un-cC2oImlj1TkCu-kyDghpjThLvqXeUqixjab-roZ8Zt2Tbz6EPCVOGAMeO-dDsTElbiCZZww7rDNu7v5yS1Aq7ZDTGL0N9Mu3WGAhd6tFDJXz3Vd4YosLJ8TNMZLi/s400/27pcs-sports2.jpg"
          heading="Sports Events"
          paragraph="We believe in nurturing not just academic excellence but also physical fitness, teamwork, and sportsmanship..."
          hoeverText="Every year, we organize a series of exciting sports events to encourage students to stay active, compete healthily, and showcase their talents. From traditional games to modern sports, there’s something for everyone to enjoy and participate in!

        Kabaddi 🤼‍♂️,Cricket 🏏Basketball 🏀,Tennis 🎾 ,Athletics 🏃‍♀️,Football ⚽,Volleyball 🏐.
        
        "
        />
        <EventCard
          img="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC0197.jpg"
          heading="Alumni Meet"
          paragraph="At Al Qalam Academy, we cherish the bond that connects us to our alumni. Every year, we host our Alumni Meet, ..."
          hoeverText=" a special event that brings together former students, faculty, and staff to celebrate our shared history, accomplishments, and the ongoing journey of our school community. 🌟 Reconnect, Reflect, and Relive the Memories The Alumni Meet is an incredible opportunity for graduates to reconnect with old friends, share their experiences, and witness the growth and achievements of their alma mater. Whether you’ve been away for a year or decades, your presence is a vital part of our vibrant school legacy. 📅 "
        />
        <EventCard
          img="https://www.dscebed.co.in/img/pta22-7.jpg"
          heading="Parent-Teacher Collaboration Day "
          paragraph="We believe that the partnership between parents and teachers ..."
          hoeverText=" is essential for the success and well-being of our students Our Parent-Teacher Collaboration Day is a special event designed to strengthen this vital connection, ensuring we work together to support and guide each child's academic and personal growth. 🤝📚"
        />
      </div>
    </div>
  );
};

export default Events;
