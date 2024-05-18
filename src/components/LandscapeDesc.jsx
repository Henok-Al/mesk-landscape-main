import React from "react";
import ContactForm from "./ContactForm";

const LandscapeDesc = () => {
  return (
    <div name="land-desc" className="flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-2/3">
        {/* <img src={landscapingImage} alt="Landscaping" className="w-full" /> */}
        <div className="inset-0 flex justify-center p-8">
          <div className="">
            <h1 className="text-3xl  font-bold mb-4">
              Welcome to Mesk Landscaping
            </h1>
            <h2 className="text-xl  font-bold mb-4">
              Your Premier Landscaping Service Provider
            </h2>
            <div className="space-y-4">

            
            <p>
              At <strong>Mesk Landscaping</strong>, we specialize in transforming outdoor
              spaces into stunning, functional, and sustainable landscapes. With
              over 10 years of experience in the industry, our team of experts
              is committed to delivering exceptional craftsmanship and
              outstanding service to every client.
            </p>
            <p>
              We pride ourselves on our attention to detail, innovative designs,
              and use of eco-friendly practices. Whether you need garden design,
              lawn care, or a complete landscape renovation, we ensure every
              project reflects your vision and enhances the beauty of your
              property.
            </p>

            <p>
              Our mission is to create outdoor environments that bring joy, add
              value, and promote sustainability. Trust us to turn your
              landscaping dreams into reality.
            </p>

            <p>
              At <strong>Mesk Landscaping</strong>, we understand that each client has unique
              needs and preferences. That's why we offer personalized
              consultations to tailor our services to your specific
              requirements. From initial design concepts to final execution, we
              work closely with you to ensure every aspect of your project meets
              your expectations.
            </p>

            <p>
              In addition to our core landscaping services, we also offer
              maintenance packages to keep your outdoor spaces looking their
              best year-round. Our team is equipped with the latest tools and
              techniques to manage all aspects of garden and lawn care, ensuring
              your landscape remains healthy and vibrant.
            </p>

            <p>
              We believe that a well-designed landscape not only enhances the
              aesthetic appeal of your property but also contributes to a
              healthier environment. Our commitment to sustainability includes
              using native plants, conserving water, and implementing organic
              gardening practices.
            </p>

            <p>
              Thank you for considering <strong>Mesk Landscaping</strong> for your
              landscaping needs. We look forward to working with you to create a
              beautiful and sustainable outdoor space that you can enjoy for
              years to come.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <ContactForm />
      </div>
    </div>
  );
};

export default LandscapeDesc;
