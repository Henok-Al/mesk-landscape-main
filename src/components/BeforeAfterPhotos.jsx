import React from 'react';

const BeforeAfterGallery = () => {
  // Define an array of objects representing before and after images
  const images = [
    {
      before: '/images/before-01.jpg',
      after: '/images/after-01.jpg',
      alt: 'Landscape Transformation 1',
    },
    {
      before: '/images/before-02.jpg',
      after: '/images/after-02.jpg',
      alt: 'Landscape Transformation 2',
    },
    {
      before: '/images/before-02.jpg',
      after: '/images/after-02.jpg',
      alt: 'Landscape Transformation 2',
    },
    {
      before: '/images/before-02.jpg',
      after: '/images/after-02.jpg',
      alt: 'Landscape Transformation 2',
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-6 bg-[#CEE2B9]" name="before-after-images">
      <h1 className="text-3xl font-semibold mb-4 text-center">Before & After Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Map over the images array and render each image */}
        {images.map((image, index) => (
          <React.Fragment key={index}>
            {/* Before Image */}
            <div className="relative group">
              <img
                src={image.before}
                alt={image.alt}
                className="w-full rounded-lg overflow-hidden"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Before</p>
              </div>
            </div>
            {/* After Image */}
            <div className="relative group">
              <img
                src={image.after}
                alt={image.alt}
                className="w-full rounded-lg overflow-hidden"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">After</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
