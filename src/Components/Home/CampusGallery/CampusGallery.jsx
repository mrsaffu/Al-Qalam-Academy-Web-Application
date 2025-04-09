import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../../../SchoolMemberDetails/sclMemDetails.js";
import { Link } from "lucide-react";
import { ArrowRight, Medal, Heart, Lightbulb, X, Contact } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import "./CampusGallery.css"

const CampusGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Al Qalam Academy - CBSE Board School";
  }, []);

  const navigate = useNavigate();
  const navigateToAbout = () => {
    console.log("navigate sucess fully");

    navigate("/aboutus");
  };

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="gallery-title"
            >
              Campus <span className="gallery-title-highlight">Gallery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="gallery-subtitle"
            >
              Explore our world-class facilities and vibrant student activities
            </motion.p>
          </div>

          <div className="gallery-grid">
            {galleryImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay"></div>
                <div className="gallery-caption">
                  <span className="gallery-caption-text">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="gallery-view-all">
            <NavLink to="/gallery" className="gallery-view-all-btn">
              View Full Gallery
              <ArrowRight className="gallery-view-all-icon" size={16} />
            </NavLink>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-container">
            <button
              onClick={() => setSelectedImage(null)}
              className="modal-close-btn"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-caption">
              <h3 className="modal-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampusGallery;
