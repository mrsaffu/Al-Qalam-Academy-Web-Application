import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Download 
} from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import './Admissions.css';

// interface AccordionItemProps {
//   title: string;
//   children: React.ReactNode;
//   isOpen: boolean;
//   toggle: () => void;
// }

const AccordionItem = ({ title, children, isOpen, toggle }) => {
    return (
      <div className="accordion-item">
        <div 
          className="accordion-header"
          onClick={toggle}
        >
          <h4 className="accordion-title">{title}</h4>
          {isOpen ? (
            <ChevronUp className="accordion-icon" size={20} />
          ) : (
            <ChevronDown className="accordion-icon" size={20} />
          )}
        </div>
        <div className={`accordion-content ${isOpen ? '' : 'hidden'}`}>
          {children}
        </div>
      </div>
    );
  };

const Admissions = () => {
  useEffect(() => {
    document.title = 'Admissions - Al Qalam Academy';
  }, []);

//   const [openItem, setOpenItem] = useState<string| null>('ageRequirements');
  const [openItem, setOpenItem] = useState('ageRequirements');
  
  const toggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // In a real application, submit the form data to a server
    alert('Enquiry submitted successfully!');
  };

  return (
    <>
      <section className="admissions-section">
        <div className="admissions-container">
          <div className="admissions-header">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="admissions-title"
            >
              Admissions <span className="admissions-title-highlight">Process</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="admissions-subtitle"
            >
              Join our community of learners and begin your journey towards academic excellence and moral growth
            </motion.p>
          </div>
          
          <div className="content-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="requirements-column"
            >
              <h2 className="requirements-title">Admission Requirements</h2>
              
              <div>
                <AccordionItem 
                  title="Age Requirements" 
                  isOpen={openItem === 'ageRequirements'} 
                  toggle={() => toggle('ageRequirements')}
                >
                  <ul className="requirements-list">
                    <li>Pre-Primary (Nursery): 3+ years as of 31st March</li>
                    <li>Primary (Class I): 5+ years as of 31st March</li>
                    <li>For other classes: Appropriate age as per CBSE norms</li>
                  </ul>
                </AccordionItem>
                
                <AccordionItem 
                  title="Required Documents" 
                  isOpen={openItem === 'requiredDocuments'} 
                  toggle={() => toggle('requiredDocuments')}
                >
                  <ul className="requirements-list">
                    <li>Completed application form</li>
                    <li>Birth certificate (original and photocopy)</li>
                    <li>Transfer certificate from previous school (for classes II and above)</li>
                    <li>Report cards of previous academic years</li>
                    <li>Passport size photographs (4 copies)</li>
                    <li>Aadhar card or any other identity proof</li>
                    <li>Residential proof</li>
                  </ul>
                </AccordionItem>
                
                <AccordionItem 
                  title="Selection Process" 
                  isOpen={openItem === 'selectionProcess'} 
                  toggle={() => toggle('selectionProcess')}
                >
                  <ul className="requirements-list">
                    <li>Written assessment (for classes I and above)</li>
                    <li>Interactive session/interview with the child and parents</li>
                    <li>Review of previous academic records</li>
                    <li>Final selection based on overall performance and availability of seats</li>
                  </ul>
                </AccordionItem>
              </div>
              
              <button className="download-button">
                <Download className="download-icon" size={20} />
                Download Application Form
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="enquiry-column"
            >
              <div className="enquiry-form-container">
                <h3 className="enquiry-form-title">Admission Enquiry</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="parentName" className="form-label">Parent's Name *</label>
                    <input 
                      type="text" 
                      id="parentName" 
                      className={`form-input ${errors.parentName ? 'error' : ''}`}
                      placeholder="Enter your full name"
                      {...register('parentName', { required: true })}
                    />
                    {errors.parentName && <p className="error-message">Parent's name is required</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="studentName" className="form-label">Student's Name *</label>
                    <input 
                      type="text" 
                      id="studentName" 
                      className={`form-input ${errors.studentName ? 'error' : ''}`}
                      placeholder="Enter student's full name"
                      {...register('studentName', { required: true })}
                    />
                    {errors.studentName && <p className="error-message">Student's name is required</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                      {...register('email', { 
                        required: true, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                      })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className="error-message">Email is required</p>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <p className="error-message">Please enter a valid email</p>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                      {...register('phone', { 
                        required: true,
                        pattern: /^[0-9]{10}$/
                      })}
                    />
                    {errors.phone?.type === 'required' && (
                      <p className="error-message">Phone number is required</p>
                    )}
                    {errors.phone?.type === 'pattern' && (
                      <p className="error-message">Please enter a valid 10-digit phone number</p>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="grade" className="form-label">Admission for Grade *</label>
                    <select 
                      id="grade" 
                      className={`form-select ${errors.grade ? 'error' : ''}`}
                      {...register('grade', { required: true })}
                    >
                      <option value="">Select Grade</option>
                      <option value="nursery">Nursery</option>
                      <option value="kg">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                    {errors.grade && <p className="error-message">Please select a grade</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      id="message" 
                      className="form-textarea"
                      placeholder="Any specific queries or information"
                      {...register('message')}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="timeline-title"
            >
              Admission <span className="timeline-title-highlight">Timeline</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="timeline-subtitle"
            >
              Key dates for the upcoming academic year admissions process
            </motion.p>
          </div>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-marker">
                  <div className="timeline-number">1</div>
                  <div className="timeline-connector"></div>
                </div>
                <div className="timeline-card">
                  <h3 className="timeline-step-title">Application Period</h3>
                  <p className="timeline-step-date">November 1 - December 31, 2023</p>
                  <p className="timeline-step-description">
                    Parents can download and submit application forms during this period. Online application is also available.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-marker">
                  <div className="timeline-number">2</div>
                  <div className="timeline-connector"></div>
                </div>
                <div className="timeline-card">
                  <h3 className="timeline-step-title">Assessment & Interviews</h3>
                  <p className="timeline-step-date">January 15 - February 15, 2024</p>
                  <p className="timeline-step-description">
                    Shortlisted candidates will be invited for assessments and interviews during this period.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-marker">
                  <div className="timeline-number">3</div>
                  <div className="timeline-connector"></div>
                </div>
                <div className="timeline-card">
                  <h3 className="timeline-step-title">Results & Offer Letters</h3>
                  <p className="timeline-step-date">March 1, 2024</p>
                  <p className="timeline-step-description">
                    Admission results will be announced and offer letters will be sent to selected candidates.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-marker">
                  <div className="timeline-number">4</div>
                </div>
                <div className="timeline-card">
                  <h3 className="timeline-step-title">Fee Payment & Enrollment</h3>
                  <p className="timeline-step-date">March 15 - April 15, 2024</p>
                  <p className="timeline-step-description">
                    Selected candidates must complete fee payment and enrollment formalities during this period.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
