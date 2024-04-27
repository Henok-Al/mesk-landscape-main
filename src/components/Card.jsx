import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Card = ({ icon, title, description }) => {
  return (
    <div className='bg-[#CEE2B9] w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="mr-4">
              {icon ? (
                React.createElement(icon, {
                  className: 'text-green-500 text-4xl',
                })
              ) : (
                <FaCheckCircle className="text-green-500 text-4xl" />
              )}
            </div>
            <div className="text-xl font-bold text-green-500">{title}</div>
          </div>
          <p className="text-gray-700 text-base mt-2 ml-12">{description}</p>
        </div>
      </div>

      
    </div>
    
  );
};

export default Card;
