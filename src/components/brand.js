import React, { useState } from "react";
import Catalog from "./catalog"
import Modal from "./modal"
import PrimaryButton from "./primary-button"
import Title from "./title"

const Brand = ({ title, description, imgs }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      {showModal &&
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
        />
      }
      <div className="w-full md:w-1/2 flex flex-wrap justify-center">
        {imgs.map((img, i) => (
          <img key={i} src={img} className="w-2/5 p-4" />
        ))}
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-6">
        <Title text={title} />
        <p className="text-sm my-4">{description}</p>
        <p className="font-semibold text-sm my-6">
          Para ver todos los productos disponibles de esta marca, descarga nuestro catálogo completo.
        </p>
        <PrimaryButton
          className="flex h-16 w-64 items-center "
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowModal(true)}
        />
      </div>
    </div>
  )
}

export default Brand;