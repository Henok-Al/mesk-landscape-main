import React from "react";
import ContactForm from "./ContactForm";

const LandscapeDesc = () => {
  return (
    <div name="land-desc" className="flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-2/3">
        {/* <img src={landscapingImage} alt="Landscaping" className="w-full" /> */}
        <div className="inset-0 flex justify-center p-8">
          <div className="">
            <h1 className="text-3xl linh font-bold mb-4">
              Landscaping And Lawn Care Services In Brownsburg Indiana And The
              Surrounding Area
            </h1>
            <p>
              <strong>Silver Lining Landscaping </strong>is here to provide you
              with exceptional customer service for all of your mulching,
              mowing, and landscaping needs.
            </p>
            <p>
              Our goal is to exceed your expectations by delivering the exact
              product and service you desire at a reasonable price.
            </p>
            <p className="my-4">
              <strong>
                We offer Free, No Obligation, No Pressure Quotes:{" "}
              </strong>
              Upon request, I would be delighted to visit you and provide a
              quote for any of our services. I believe in no-pressure quotes -
              you decide when you're ready to move forward.
            </p>

            <p>
              <strong>Our Satisfaction Guarantee: </strong>
              Your satisfaction is our top priority. We won't ask for full
              payment until the job is complete. If there's anything you're not
              happy with, just let us know, and we'll fix it. We stand by our
              work and ensure it's completed to your specifications.
            </p>
            <p className="my-4">
              I'm Owner/Operator Josh Bex, and I'm proud to call Brownsburg,
              Indiana my home. Along with my family, I'm actively involved in
              our community, and I'm passionate about transforming homes through
              landscaping in Hendricks County and beyond. I'd be honored to work
              with you.
            </p>
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
