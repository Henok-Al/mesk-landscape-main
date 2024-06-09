import React from 'react';

const BeforeAfterGallery = () => {
  const images = [
    {
      before: '/images/d.jpg',
      after: '/images/b.jpg',
      alt: 'Landscape Transformation 1',
    },
    
    {
      before: '/images/d.jpg',
      after: '/images/c.jpg',
      alt: 'Landscape Transformation 2',
    },
    
    
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-6 bg-[#CEE2B9]" name="before-after-images" id="estimate-form">
      <h1 className="text-3xl font-semibold mb-4 text-center">Before & After Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <React.Fragment key={index}>
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
