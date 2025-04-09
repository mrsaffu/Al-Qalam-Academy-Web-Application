import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { galleryCategories } from '../../../SchoolMemberDetails/galaryData';
import './Gallery.css';
import { Link } from 'react-router-dom';

// type GalleryImage = {
//   id: number;
//   title: string;
//   image: string;
//   category?: string;
// };

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery - Al Qalam Academy';
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [initialImagesCount] = useState(4); // Number of images to show initially
  const [expandedImagesCount] = useState(8); // Number of additional images to show when expanded

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const isSectionExpanded = (sectionId) => {
    return !!expandedSections[sectionId];
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="gallery-title"
            >
              Campus <span className="gallery-title-highlight">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="gallery-subtitle"
            >
              Explore our world-class facilities and vibrant student activities
            </motion.p>
          </div>
          
          {galleryCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="gallery-category"
            >
              <div className="category-header">
                <h2 className="category-title">
                  {category.title}
                </h2>
                <p className="category-description">
                  {category.description}
                </p>
              </div>
              
              {/* Sections */}
              {category.sections.map((section, sectionIndex) => (
                <div key={section.id} className="gallery-section-container">
                  <div className="section-header">
                    <h3 className="section-title">{section.title}</h3>
                    <p className="section-description">{section.description}</p>
                  </div>
                  
                  <div className="gallery-grid">
                    {(isSectionExpanded(section.id) 
                      ? section.images.slice(0, initialImagesCount + expandedImagesCount)
                      : section.images.slice(0, initialImagesCount)
                    ).map((image, index) => (
                      <motion.div 
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        className="gallery-item"
                        onClick={() => openLightbox(image)}
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
                  
                  {section.images.length > initialImagesCount && (
                    <div className="more-images-container">
                      <button 
                        className="more-images-button"
                        onClick={() => toggleSection(section.id)}
                      >
                        {isSectionExpanded(section.id) ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp size={18} />
                          </>
                        ) : (
                          <>
                            <span>View More Images</span>
                            <ChevronDown size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-container"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="lightbox-close"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      <section className="video-section">
        <div className="video-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="video-header"
          >
            <h2 className="video-title">
              Campus <span className="video-title-highlight">Video Tour</span>
            </h2>
            <p className="video-subtitle">
              Take a virtual tour of our state-of-the-art facilities
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="video-player"
          >
            <div className="video-placeholder">
              <span className="video-placeholder-text">Video Tour Coming Soon</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="visit-section"
          >
            <h3 className="visit-title">Want to Visit Our Campus?</h3>
            <p className="visit-text">
              We invite you to visit our campus and experience our facilities in person. Schedule a tour with our admissions office.
            </p>
            <Link to="/contactUs" className="visit-button">
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;