"use client";

import ActionButton from "@/components/common/actionbutton";
import React from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormField from "@/components/common/Form/Field/FormField";
import { updateMenu } from "@/store/restaurant/menu";

const schema = Yup.object().shape({
  name: Yup.string().required().min(3).max(255),
  image: Yup.string().required(),
  price: Yup.number().required(),
  category: Yup.string().required(),
  description: Yup.string().required(),
});

const categories = [
  {
    value: "Food",
    label: "Food",
  },
  {
    value: "Snacks",
    label: "Snacks",
  },
  {
    value: "Beverages",
    label: "Beverages",
  },
];

const EditMenu = ({ closeModal, menu }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-0 rounded-3xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400 flex flex-col justify-center items-center duration-150">
        <div className="w-full flex justify-end items-center p-4">
          <button
            className="bg-slate-300 hover:bg-black duration-150 text-white p-3 rounded-full relative z-20"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <Formik
          initialValues={{
            image: "",
            menuName: menu?.name,
            menuPrice: menu?.price,
            menuCategory: menu?.category,
            menuDescription: menu?.desc,
          }}
          onSubmit={(values) => {
            dispatch(updateMenu(menu.id, values));
            closeModal();
          }}
        >
          {() => (
            <Form className="w-full flex flex-col gap-4 justify-center items-center p-4">
              <FormField label={"Image"} type={"file"} name={"image"} />
              <FormField label={"Name"} name={"menuName"} />
              <div className="col-span-2 grid grid-cols-2 gap-2 py-4 w-full">
                <FormField label={"Price"} name={"menuPrice"} type={"number"} />
                <FormField
                  label={"Category"}
                  name={"menuCategory"}
                  as="select"
                  options={categories}
                />
              </div>
              <FormField
                containerClassName="w-full"
                label={"Description"}
                name={"menuDescription"}
                as="textarea"
                cols="10"
                rows="5"
              />
              <ActionButton
                type={"submit"}
                name="Update menu"
                icon={<MdModeEdit />}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditMenu;
