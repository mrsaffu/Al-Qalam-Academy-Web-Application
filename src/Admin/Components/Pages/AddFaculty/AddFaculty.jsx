import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddFaculty.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddFaculty = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setmessage] = useState(" ");
  let addMessage = (message) => {
    toast(message);
  };

  const onSubmit = async (data) => {
    try {
      console.log("Faculty Submitted:", data);

      const formData = new FormData();

      // Append image file
      formData.append("image", data.image[0]);

      // Append simple text fields
      formData.append("name", data.name);
      formData.append("age", data.age);
      formData.append("email", data.email);
      formData.append("experience", data.experience);
      formData.append("expertise", data.expertise);
      formData.append("qualification", data.qualification);
      formData.append("department", data.department);
      formData.append("description", data.description);
      formData.append("biography", data.biography);
      formData.append("possition", data.possition);

      // Append arrays or objects after stringifying
      formData.append(
        "education",
        JSON.stringify([
          data.education?.[0] || "",
          data.education?.[1] || "",
          data.education?.[2] || "",
        ])
      );

      formData.append(
        "socialMedia",
        JSON.stringify({
          linkedin: data.socialMedia?.linkedin || "",
          twitter: data.socialMedia?.twitter || "",
          facebook: data.socialMedia?.facebook || "",
          instagram: data.socialMedia?.instagram || "",
          youtube: data.socialMedia?.youtube || "",
          other: data.socialMedia?.other || "",
        })
      );
      console.log(formData);

      let response = await axios.post(
        "https://alqalam-academy-bakend.onrender.com/api/faculty/addfaculty",
        formData
      );
      console.log("Faculty added:", response.data);
      let message = response.data.message;
      addMessage(message);
      setmessage(response.data.message);
      reset();
    } catch (error) {
      console.log("React Fetch error ", error);
      setmessage(null);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="form-container">
        <h2>Add Faculty Member</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="faculty-form">
          <div className="form-row">
            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Full Name"
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}

            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "Image is required",
              })}
              className={errors.image ? "input-error" : ""}
            />
            {errors.image && (
              <p className="error-message">{errors.image.message}</p>
            )}
          </div>

          <div className="form-row">
            <input
              {...register("age", {
                required: "Age is required",
              })}
              type="number"
              placeholder="Age"
              className={errors.age ? "input-error" : ""}
            />
            {errors.age && (
              <p className="error-message">{errors.age.message}</p>
            )}
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-row">
            <input
              {...register("experience", {
                required: "Experience is required",
              })}
              placeholder="Experience (e.g. 5 years)"
              className={errors.experience ? "input-error" : ""}
            />
            {errors.experience && (
              <p className="error-message">{errors.experience.message}</p>
            )}
            <input
              {...register("expertise", { required: "Experties is required" })}
              placeholder="Expertise"
              className={errors.expertise ? "input-error" : ""}
            />
            {errors.expertise && (
              <p className="error-message">{errors.expertise.message}</p>
            )}
          </div>

          <div className="form-row">
            <input
              {...register("qualification", {
                required: "Qualification is required",
              })}
              placeholder="Qualification"
              className={errors.qualification ? "input-error" : ""}
            />
            {errors.qualification && (
              <p className="error-message">{errors.qualification.message}</p>
            )}
            <input
              {...register("department", {
                required: "Department is required",
              })}
              placeholder="Department"
              className={errors.department ? "input-error" : ""}
            />
            {errors.department && (
              <p className="error-message">{errors.department.message}</p>
            )}
          </div>

          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 80,
                message: "Minimum length should be at least 80 characters",
              },
              maxLength: {
                value: 100,
                message: "Maximum length should be 100 character",
              },
            })}
            placeholder="Short Description"
            className={errors.description ? "input-error" : ""}
          />
          {errors.description && (
            <p className="error-message">{errors.description.message}</p>
          )}
          <textarea
            {...register("biography", {
              required: "Biography is required",
              minLength: {
                value: 500,
                message: "Minumum length should be at least 500 character",
              },
              maxLength: {
                value: 1000,
                message: "Maximum length should be 1000 character",
              },
            })}
            placeholder="Biography"
            className={errors.biography ? "input-error" : ""}
          />

          {errors.biography && (
            <p className="error-message">{errors.biography.message}</p>
          )}

          <input
            {...register("education.0", {
              required: "Education 1 is required",
            })}
            placeholder="Education Entry 1"
            className={errors.education ? "input-error" : ""}
          />
          {errors.education && (
            <p className="error-message">{errors.education.message}</p>
          )}
          <input
            {...register("education.1", {
              required: "Education 2 is required ",
            })}
            placeholder="Education Entry 2"
            className={errors.education ? "input-error" : ""}
          />
          {errors.education && (
            <p className="error-message">Education 2 is required</p>
          )}

          <input {...register("education.2")} placeholder="Education Entry 3" />

          <select
            {...register("possition", { required: "Position is required" })}
            className={errors.possition ? "input-error" : ""}
          >
            <option value="">Select Position</option>
            <option value="Director">Director</option>
            <option value="Principal">Principal</option>
            <option value="Vice Principal">Vice Principal</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Primary Teacher">Primary Teacher</option>
            <option value="Assistant Teacher">Assistant Teacher</option>
            <option value="Mathematics Teacher">Mathematics Teacher</option>
            <option value="Science Teacher">Science Teacher</option>
            <option value="Socialscience Teacher">Socialscience Teacher</option>
            <option value="Computer Teacher">Computer Teacher</option>
            <option value="Counselor">Counselor</option>
            <option value="Admin Staff">Admin Staff</option>
            <option value="Accountant">Accountant</option>
            <option value="Receptionist">Receptionist</option>
          </select>
          {errors.possition && (
            <p className="error-message">{errors.possition.message}</p>
          )}

          <h4>Social Links</h4>
          <div className="form-row">
            <input
              {...register("socialMedia.linkedin")}
              placeholder="LinkedIn"
            />
            <input {...register("socialMedia.twitter")} placeholder="Twitter" />
          </div>
          <div className="form-row">
            <input
              {...register("socialMedia.facebook")}
              placeholder="Facebook"
            />
            <input
              {...register("socialMedia.instagram")}
              placeholder="Instagram"
            />
          </div>
          <div className="form-row">
            <input {...register("socialMedia.youtube")} placeholder="YouTube" />
            <input {...register("socialMedia.other")} placeholder="Other" />
          </div>

          {message ? (
            <p style={{ color: "green" }}>{message}</p>
          ) : (
            <p style={{ color: "red" }}>Faculty added faild...!</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Faculty"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFaculty;
