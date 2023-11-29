"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import ActionButton from "@/components/common/actionbutton";
import React from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes, FaPlus } from "react-icons/fa";
import Image from "next/image";

const AddMenu = ({ closeModal }) => {
  const formValidationSchema = Yup.object().shape({
    image: Yup.string().required("Image is required"),
    name: Yup.string().required("Menu name is required"),
    price: Yup.number().required("Price is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      price: "",
      category: "",
      description: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold">Add Menu</h1>
          <button
            className="bg-black text-white p-3 rounded-full"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl"
        >
          <div className="col-span-2  flex justify-center items-center py-4 gap-2">
            <div className="bg-slate-200 w-32 h-32 p-2 py-4 flex justify-center items-center rounded-full">
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  const selectedImage = e.currentTarget.files[0];
                  formik.setFieldValue("image", selectedImage);

                  // Display the selected image
                  const imageUrl = URL.createObjectURL(selectedImage);
                  const imagePreview = document.getElementById("image-preview");
                  imagePreview.src = imageUrl;
                }}
                className="p-2 py-4 text-sm outline-none active:outline-none w-32 h-32 rounded-full absolute opacity-0 cursor-pointer"
              />
              <BiCamera className=" text-xl" />
              
              <Image
                id="image-preview"
                src=""
                alt="Image Preview"
                className="w-full h-full object-cover rounded-full absolute top-0 left-0"
              />
            </div>
            {formik.touched.image && formik.errors.image && (
              <div className="text-red-500 text-sm">{formik.errors.image}</div>
            )}
          </div>
          <div className="col-span-2">
            <h2 className="text-sm text-slate-600">Menu name</h2>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
            <div className="w-full">
              <h2 className="text-sm text-slate-600">Price</h2>
              <input
                type="text"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
              />
              {formik.touched.price && formik.errors.price && (
                <div className="text-red-500 text-sm">
                  {formik.errors.price}
                </div>
              )}
            </div>
            <div className="w-full">
              <h2 className="text-sm text-slate-600">Category</h2>
              <select
                name="category"
                id=""
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">choose</option>
                <option value="food">Food</option>
                <option value="snacks">Snacks</option>
                <option value="beverages">Beverages</option>
              </select>
              {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-sm">
                  {formik.errors.category}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-sm text-slate-600">Description</h2>
            <textarea
              name="description"
              id=""
              cols="10"
              rows="5"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            )}
          </div>
          <div className="pt-2 flex items-center gap-2">
            <ActionButton
              name="Add menu"
              icon={<FaPlus />}
              type="submit"
              disabled={!formik.isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
