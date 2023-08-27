// ServicesSection.js

import React from "react";

const ServicesSection = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-dashed border-gray-500 w-0 h-12"></div>
        <div className="flex justify-between">
          <div className="w-1/3">{"Text 1"}</div>
          <div className="w-1/3">{"Text 2"}</div>
          <div className="w-1/3">{"Text 3"}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
