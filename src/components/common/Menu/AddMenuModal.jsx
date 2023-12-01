"use client";

import React from "react";
import {FaPlus, FaTimes} from "react-icons/fa";
import {Form, Formik} from "formik";
import ActionButton from "@/components/common/actionbutton";
import * as Yup from 'yup';
import FormField from "@/components/common/Form/Field/FormField";
import {useDispatch} from "react-redux";
import {addMenu} from "@/store/restaurant/menu";


const schema = Yup.object().shape({
    name: Yup.string().required().min(3).max(255),
    image: Yup.string().required(),
    price: Yup.number().required(),
    category: Yup.number().required(),
    description: Yup.string().required()
})


const categories = [
    {
        value: 1,
        label: 'food'
    },
    {
        value: 2,
        label: 'snacks'
    },
    {
        value: 3,
        label: 'beverages'
    },
]

const AddMenuModal = ({closeModal}) => {

    const dispatch = useDispatch()

    return (
        <div
            className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
            <div
                className="bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Add Menu</h1>
                    <button
                        className="bg-black text-white p-3 rounded-full"
                        onClick={() => closeModal()}
                    >
                        <FaTimes className="text-lg"/>
                    </button>
                </div>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        image: "",
                        name: "",
                        price: "",
                        category: "",
                        description: ""
                    }}
                    onSubmit={(values) => {
                        const formData = new FormData();
                        formData.append('image', values.image)
                        formData.append('menuName', values.name)
                        formData.append('menuPrice', values.price)
                        formData.append('menuCategory', values.category)
                        formData.append('menuDescription', values.description)
                        dispatch(addMenu(formData))
                    }}
                >
                    {() => <Form
                        className="w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl"
                    >
                        <FormField containerClassName="col-span-2" label={"Image"} type={'file'}
                                   name={'image'}/>
                        <FormField containerClassName="col-span-2" label={"Menu name"} name={'name'}/>
                        <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
                            <FormField label={"Price"} name={'price'} type={'number'}/>
                            <FormField label={"Category"} name={'category'} as="select" options={categories}/>
                        </div>
                        <FormField containerClassName="col-span-2" label={"Description"} name={'description'}
                                   as="textarea" cols="10"
                                   rows="5"/>
                        <div className="pt-2 flex items-center gap-2">
                            <ActionButton type={"submit"} name="Add menu" icon={<FaPlus/>}/>
                        </div>
                    </Form>}
                </Formik>
            </div>
        </div>
    );
};

export default AddMenuModal;
