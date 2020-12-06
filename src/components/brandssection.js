import React, { useState, useEffect } from "react";
import Brand from "./brand";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import Title from "./title";
import DownImg from "../images/svg/chevron-down.svg";
import UpImg from "../images/svg/chevron-up.svg";
import Catalog from "./catalog";
import Img from "gatsby-image";
const BrandsSection = ({ brands }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [element, setElement] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const brandClick = (element) => {
    setElement(element);
    setShowModal(true);
  };

  return (
    <section id="brand-section" className="px-2 flex justify-center">
      {(showModal || showCatalog) && (
        <Modal
          show={showModal || showCatalog}
          onClick={() => {
            setShowModal(false);
            setShowCatalog(false);
          }}
          children={
            showModal ? <Brand {...element} /> : showCatalog ? <Catalog /> : ""
          }
        />
      )}
      <div className="md:py-16 w-full xl:w-desktopsize flex-col flex items-center md:block">
        <PrimaryButton
          className="md:hidden w-buttonBrandMobile h-buttonBrandMobile my-10"
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowCatalog(true)}
        />
        <div className="flex items-center sm:block mt-9">
          <Title text="NUESTRAS MARCAS" id="nuestras-marcas" />
          <div className="flex justify-end">
            <button
              className="my-7 text-blueBright text-xl"
              onClick={() => setToggle(!toggle)}
            >
              <span className="font-opensans hidden hover:text-blue sm:block">
                {toggle ? "Ver menos" : "Ver todas"}
              </span>
              {toggle ? (
                <UpImg className="sm:hidden ml-2 text-content" />
              ) : (
                <DownImg className="sm:hidden ml-2 text-content" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex my-8 sm:mt-0 justify-center lg:justify-start sm:-mx-4 ${
            toggle && "flex-wrap flex-brands"
          }`}
        >
          {brands.edges.map((element, i) => (
            <button
              key={i}
              onClick={() => brandClick(element)}
              className={`mx-1.5 lg:mx-brandMargin w-brandIcon md:w-brandIconTablet xl:w-brandImage card-shadow h-brandIcon md:h-brandIconTablet  xl:h-brandImage bg-white
              ${!toggle &&
                (i > slideIndex + (width > 768 ? 3 : 2) || i < slideIndex) &&
                "hidden"
              }`}
            >
              <div className="flex justify-center items-center w-full h-full">
                <Img
                  fluid={element.node.imagen[0].fluid}
                  style={{ height: "80%", width: "80%" }}
                  imgStyle={{
                    objectFit: "cover",
                  }}
                  alt={element.node.titulo}
                />
              </div>
            </button>
          ))}
        </div>
        {!toggle && (
          <input
            className="hidden sm:block w-full"
            onChange={(e) => setSlideIndex(Number(e.target.value))}
            value={slideIndex}
            type="range"
            min={0}
            max={brands.edges.length - 4}
          />
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
