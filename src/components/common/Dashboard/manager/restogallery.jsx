import Image from "next/image";
import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";

const RestoGallery = ({ updateProfile, setUpdateProfile }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const renderGalleryImages = () => {
    return selectedImages.map((image, index) => (
      <Image
        layout="responsive"
        key={index}
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="w-full rounded-lg"
      />
    ));
  };

  return (
    <div className="flex flex-col gap-4 border border-slate-300 border-dashed rounded-xl mt-4 p-4 w-full">
      <h2 className="font-bold">Gallery</h2>
      <div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-2 duration-100">
        {updateProfile ? (
          renderGalleryImages()
        ) : (
          <>
            {renderGalleryImages()}
            <div className="w-full h-[140px]  border border-dashed rounded-lg flex justify-center items-center">
              <input
                type="file"
                name="image"
                className="min-h-full w-full opacity-0"
                onChange={handleImageChange}
                multiple
              />
              <FiCamera className="absolute text-slate-500" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestoGallery;
