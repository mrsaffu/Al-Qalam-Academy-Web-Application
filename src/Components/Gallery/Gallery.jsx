import React, { useRef, useState } from "react";
import "./Gallery.css";
// import { use } from "react";
// const Gallery = () => {
//   let [expanded, setExpanded] = useState(false);

//   let ref = useRef(null);
//   console.log(ref);

//   const handleClick = () => {
//     if (ref.current) {
//       setExpanded(!expanded);
//       ref.current.className = expanded ? "defaultImg" : "imgExpand";
//     }
//   };
//   return (
//     <div className="gCont">
//       <h1> Science Exhibition (18 February, 2018)</h1>
//       <div className="cardSec">
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//         <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//        <img
//           src="https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg"
//           alt=""
//           ref={ref}
//           onClick={handleClick}
//           className="img" // Default class
//         />
//       </div>
//     </div>
//   );
// };

const Gallery = () => {
  const images = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ObshU2ins98O8AZINR-kjLdMyn2IUmNnkS3CWVW4Nb8j2yuDjUMj0q-luS1YF5pnMbZ0WFyOYxRdNFFxVQrnHQ",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
    "https://www.alqalamdbg.in/wp-content/uploads/2020/04/DSC_0036.jpg",
  ];

  const [expandedImg, setExpandedImg] = useState(null);
  console.log(expandedImg);

  return (
    <div className="gallery-container">
      <h1> Science Exhibition (18 February, 2018)</h1>
      {expandedImg && (
        <div
          className="overlay check"
          onClick={() => setExpandedImg(null)}
        ></div>
      )}
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={expandedImg === src ? "expanded" : ""}
            onClick={() => setExpandedImg(expandedImg === src ? null : src)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// export default Gallery;
