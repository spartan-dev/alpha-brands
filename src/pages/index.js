import React from "react";
import Layout from "../components/layout";
import BrandsSection from "../components/brandssection"
import ContactSection from "../components/contactsection";
import InfoSection from "../components/infosection";
import BackGroundImage from "gatsby-background-image";
import { graphql } from "gatsby";

export default function Home({ data }) {
  return (
    <div className="">
      <Layout>
        <BackGroundImage
          className="w-screen flex flex-col justify-center items-center py-24 sm:py-40 lg:py-56"
          fluid={data.heroImage.childImageSharp.fluid}
        >
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-widest">
            MARCAS INNOVADORAS DE LATINOÁMERICA
            </h1>
          <button className="px-4 bg-orange-500 rounded-xl w-24 h-12">
            Go now
            </button>
        </BackGroundImage>
        <BrandsSection />
        <section id='nosotros' className="container mx-auto">
          <InfoSection
            title="NOSOTROS"
            image={data.heroImage}
            position="right"
            text="AlphaBrands es una compañía de confianza, basada en El Salvador, que se enfoca en desarrollar diversas marcas privadas en Latinoámerica."
          />
          <InfoSection
            title="NUESTRO OBJETIVO"
            image={data.heroImage}
            position="left"
            text="Queremos facilitarte la vida. Cada uno de nuestros productos está pensado con funcionalidad, dedicación y pasión porque sabemos que tu familia sólo se merece lo mejor."
          />
          <InfoSection
            title="DÓNDE ESTAMOS"
            image={data.heroImage}
            position="right"
            text="Actualmente vendemos a distribuidores en 
          El Salvador, Honduras, Guatemala y Costa Rica."
          />
        </section>
        <ContactSection />
      </Layout>
    </div>
  );
}

export const hero = graphql`
  query {
    heroImage: file(relativePath: { regex: "/bosque.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }
`;
