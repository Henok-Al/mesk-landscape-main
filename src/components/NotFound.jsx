import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
// import notFoundImage from '../assets/not-found-image.jpg';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">
        <FaExclamationTriangle className="inline text-red-500" /> 404 - Not Found
      </h1>
      <p className="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
      {/* <img src={notFoundImage} alt="Not Found" className="max-w-xs mb-4" /> */}
      <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
