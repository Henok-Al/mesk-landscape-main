// import { FaPhoneAlt, FaPen } from 'react-icons/fa';

// const Info = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center  flex-wrap bg-[#CEE2B9]  px-4 pt-28   gap-2">
//       <div className="flex items-center bg-[#359d7c] text-white py-3 px-4 rounded-sm mb-4 md:mb-0 md:mr-4">
//         <FaPhoneAlt className="text-white mr-2 text-3xl " />
//         <span className='text-xl md:text-2xl'>Tap To Call (317) 902-5411</span>
//       </div>
//       <div className="relative mb-4 md:mb-0 md:mr-4">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center ">
//           <span className="text-[#359d7c] rounded-full p-2 md:p-3 mx-4">Or</span>
//         </div>
//       </div>
//       <div className="flex items-center bg-[#03196A] text-white py-3 px-4 rounded-sm">
//         <FaPen className="text-white mr-2 text-3xl " />
//         <span className='text-xl md:text-2xl'>Request Your Estimate Now!</span>
//       </div>
//     </div>
//   );
// };

// export default Info;



import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon

const Info = ({ phoneNumber }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
        <FaPhone className="text-blue-500 mr-2" />
        <a href={`tel:${phoneNumber}`} className="text-blue-500 font-bold">
          Tap to Call
        </a>
      </div>
    </div>
  );
};

export default Info;

