import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    cityOrTown: '',
    howDidYouHearAboutUs: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/2 mx-4 bg-[#359d7c] mt-10">
      <div className='p-6'>
        <h1 className=' text-center text-2xl py-4 text-white'>Request Your Estimate</h1>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border w-full rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Project Street Address"
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="cityOrTown"
            value={formData.cityOrTown}
            onChange={handleChange}
            placeholder="Project City or Town"
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell Us What You Have On Your Mind"
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
            rows="5"
          />
        </div>
        <div className="mb-4">
          <select
            name="howDidYouHearAboutUs"
            value={formData.howDidYouHearAboutUs}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:border-green-400 focus:outline-none"
          >
            <option value="">How Did You Hear About Us?</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Online Search">Online Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600">
          Send Your Request
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
