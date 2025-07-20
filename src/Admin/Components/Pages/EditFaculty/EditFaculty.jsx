import React, { Fragment, useEffect } from "react";

import "./EditFaculty.css";
import Button from "../../Cards/button";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import profile from "../../../../../public/facultyDefaultImg.jpg";
import { useState } from "react";
import axios from "axios";
import ViewFaculty from "../ViewFaculty/ViewFaculty";
import { ToastContainer, toast } from "react-toastify";

const EditFaculty = () => {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [error, setError] = useState(false);
  let [notFound, setNotFound] = useState(false);

  let fetchMessage = (message) => {
    toast(message);
  };

  let fetchData = async () => {
    try {
      let response = await axios.get(
        "https://alqalam-academy-bakend.onrender.com/api/faculty/getfaculty"
      );
      console.log(response);
      let data = response.data;
      setData(data.data);
    } catch (error) {
      setError("Something else went wrong (network error, etc.)");
      console.log(error);
      console.log(error.message);
      console.log(error.response.data.message);
      setNotFound(error.response.data.message);
    }
  };
  // fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(data);
  let handleAdd = () => {
    console.log("add working");
    navigate("/admin/editfaculty/add");
  };

  let handleView = async (id) => {
    // setViewFaculty(true);
    navigate(`view/${id}`);
  };

  // ! Update
  let handleUpdate = (id) => {
    navigate(`update/${id}`);
  };

  // ! Delete faculty !

  const deletepopup = (message) => toast(message);

  let handleDelete = async (id) => {
    try {
      let response = await axios.delete(
        `https://alqalam-academy-bakend.onrender.com/api/faculty/deletefaculty/${id}`
      );
      console.log(response);
      let message = response.data.message;
      console.log(message);
      deletepopup(message);
      fetchData();
      console.log(refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="edtFacSec">
        <div className="adminBtn">
          <Button name="Add" addClass="addClass" onClick={handleAdd} />
          <Button name="Delete" addClass="deleteBtn" />
        </div>
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Qualification</th>
                <th>Experience</th>

                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((m, index) => {
                return (
                  <Fragment key={m._id}>
                    <tr key={m._id}>
                      <td>{index + 1}</td>
                      <td>{m.name}</td>
                      <td>{m.department}</td>
                      <td>{m.qualification}</td>
                      <td>{m.experience}</td>

                      <td>
                        <Button
                          name="View"
                          addClass="view"
                          onClick={() => handleView(m._id)}
                        />
                      </td>
                      <td>
                        <Button
                          name="Update"
                          addClass="addClass"
                          onClick={() => handleUpdate(m._id)}
                        />
                      </td>
                      <td>
                        <Button
                          name="Delete"
                          addClass="deleteBtn"
                          onClick={() => {
                            handleDelete(m._id);
                          }}
                        />
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        <Routes>
          <Route path="view/:id" element={<ViewFaculty />} />
        </Routes>
      </div>
    </>
  );
};

export default EditFaculty;
