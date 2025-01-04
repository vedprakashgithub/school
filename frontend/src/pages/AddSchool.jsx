// src/addSchool.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,  // Add the reset function from useForm
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    //console.log("Form Data:", data); // Log the form data

    try {
      await axios.post("http://localhost:5000/api/addSchool", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("School added successfully!");

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error("Error adding school:", error); // Log the error
      alert("Error adding school");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Add School</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border p-2 w-full"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              className="border p-2 w-full"
            />
            {errors.address && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              {...register("city", { required: true })}
              className="border p-2 w-full"
            />
            {errors.city && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              {...register("state", { required: true })}
              className="border p-2 w-full"
            />
            {errors.state && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>Contact</label>
            <input
              type="text"
              {...register("contact", { required: true })}
              className="border p-2 w-full"
            />
            {errors.contact && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email_id", { required: true })}
              className="border p-2 w-full"
            />
            {errors.email_id && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label>Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="border p-2 w-full"
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
            Add School
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddSchool;
