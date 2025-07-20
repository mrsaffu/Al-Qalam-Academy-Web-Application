import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateFacultyForm.css";
import { ToastContainer, toast } from "react-toastify";

const UpdateFacultyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    image: "",
    age: "",
    email: "",
    experience: "",
    expertise: "",
    qualification: "",
    department: "",
    description: "",
    biography: "",
    education: [],
    possition: "",
    socialMedia: {
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
      youtube: "",
      other: ""
    }
  });

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get(`https://alqalam-academy-bakend.onrender.com/api/faculty/getfaculty/${id}`);
        setFormData(res.data.data);
      } catch (error) {
        toast.error("Failed to fetch faculty");
      }
    };

    fetchFaculty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("socialMedia.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [key]: value
        }
      }));
    } else if (name === "education") {
      setFormData((prev) => ({
        ...prev,
        education: value.split(",").map((item) => item.trim())
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:8000/api/faculty/update/${id}`, formData);
  //     toast.success("Faculty updated successfully!");
  //     setTimeout(() => navigate("/admin/editfaculty"), 2000);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Update failed!");
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const form = new FormData();

    // Append normal fields
    form.append("name", formData.name);
    form.append("age", formData.age);
    form.append("email", formData.email);
    form.append("experience", formData.experience);
    form.append("expertise", formData.expertise);
    form.append("qualification", formData.qualification);
    form.append("department", formData.department);
    form.append("description", formData.description);
    form.append("biography", formData.biography);
    form.append("possition", formData.possition);

    formData.education.forEach((edu, i) =>
      form.append(`education[${i}]`, edu)
    );

    Object.entries(formData.socialMedia).forEach(([key, val]) =>
      form.append(`socialMedia[${key}]`, val)
    );

    // Append new image file if selected
    if (imageFile) {
      form.append("image", imageFile);
    }

    await axios.put(
      `https://alqalam-academy-bakend.onrender.com/api/faculty/update/${id}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Faculty updated successfully!");
    setTimeout(() => navigate("/admin/editfaculty"), 1000);
  } catch (error) {
    console.error(error);
    toast.error("Update failed!");
  }
};


  // handle Image 
  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImageFile(file); // Save the file separately
  }
};


  return (
    <div className="update-form-container">
      <ToastContainer />
      <h2>Update Faculty</h2>
      <form className="update-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="file" name="image" accept="image/*" onChange={handleImageUpload} />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" required />
        <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} placeholder="Expertise" required />
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" required />
        <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <textarea name="biography" value={formData.biography} onChange={handleChange} placeholder="Biography" required />
        <input type="text" name="education" value={formData.education.join(", ")} onChange={handleChange} placeholder="Education (comma separated)" required />

        <select name="possition" value={formData.possition} onChange={handleChange} required>
          <option value="">Select Position</option>
          {[
            "Director", "Principal", "Vice principal", "Coordinator", "Primary Teacher", "Assistant Teacher",
            "Mathematics Teacher", "Science Teacher", "Socialscience Teacher", "Librarian", "Computer Teacher",
            "Counselor", "Admin Staff", "Accountant", "Receptionist"
          ].map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>

        <h4>Social Media Links</h4>
        <input type="text" name="socialMedia.linkedin" value={formData.socialMedia.linkedin} onChange={handleChange} placeholder="LinkedIn" />
        <input type="text" name="socialMedia.twitter" value={formData.socialMedia.twitter} onChange={handleChange} placeholder="Twitter" />
        <input type="text" name="socialMedia.facebook" value={formData.socialMedia.facebook} onChange={handleChange} placeholder="Facebook" />
        <input type="text" name="socialMedia.instagram" value={formData.socialMedia.instagram} onChange={handleChange} placeholder="Instagram" />
        <input type="text" name="socialMedia.youtube" value={formData.socialMedia.youtube} onChange={handleChange} placeholder="YouTube" />
        <input type="text" name="socialMedia.other" value={formData.socialMedia.other} onChange={handleChange} placeholder="Other" />

        <button type="submit">Update Faculty</button>
      </form>
    </div>
  );
};

export default UpdateFacultyForm;
