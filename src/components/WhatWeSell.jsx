import { FaUndo, FaTruck, FaHeadset } from "react-icons/fa";

function WhatWeSell() {
  return (
    <section className="bg-[#EEF1DA] py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaUndo className="text-4xl text-[#ADB2D4] mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Returns</h3>
          <p className="text-sm text-gray-600">30-day hassle-free returns on all orders.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTruck className="text-4xl text-[#ADB2D4] mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-600">Enjoy fast and free delivery on all products.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeadset className="text-4xl text-[#ADB2D4] mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">We're here whenever you need help.</p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeSell;
