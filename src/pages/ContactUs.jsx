import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 pt-28">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
        {/* Left Side Text */}
        <div className="md:w-1/2 pr-8">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-6">
          Ready to transform your outdoor space? Contact us today to schedule a consultation and discover how we can help you create the landscape of your dreams.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First name*</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">What can we help you with?</label>
              <textarea
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
