import { useState } from "react";

const OurProducts = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = products?.length || 0;
  const visibleCount = 4;
  const activeOffset = 1; 

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const items = [];
    if (!products || products.length === 0) return items;

    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex - activeOffset + i + total) % total;
      const item = products[index];
      if (item) items.push(item);
    }

    return items;
  };

  const visibleItems = getVisibleItems();

  if (!products || products.length === 0) {
    return (
      <div className="bg-[#2F241F] py-10 text-center text-white">
        No products available.
      </div>
    );
  }

  return (
    <div className="bg-[#2F241F] py-10 overflow-hidden mt-[100px]">
      <div className="relative">
        <div className="md:px-[100px] px-5 flex justify-between items-center mb-10">
          <div>
            <h1 className="md:text-[24px] text-[14px] text-[#E5F0B6]">Our Products</h1>
            <h1 className="md:text-[48px] text-[18px] md:font-bold text-[#E5F0B6]">
              This Month Best Seller
            </h1>
          </div>
          <button className="text-[#2F241F] md:text-[16px] text-[15px] px-[10px] bg-[#E5F0B6] md:px-[30px] md:py-[15px] rounded">
            See More
          </button>
        </div>
        <div className="flex gap-4 md:px-[100px] px-5 justify-center">
          {visibleItems.map((product, i) => {
            const isActive = i === activeOffset;

            return (
              <div
                key={product.id}
                className={`relative flex-shrink-0 rounded-lg transition-all duration-500 ${
                  isActive
                    ? "md:w-[354px] md:h-[472px] w-[185px] h-[256px] opacity-100"
                    : "opacity-50"
                } md:w-[300px] md:h-[400px] w-[163px] h-[217px]`}
              >
                <img
                  src={product.photo}
                  alt={product.productname}
                  className="w-full h-full object-cover rounded-lg"
                />
                {isActive && (
                  <div className="absolute bottom-0 left-0 p-4 w-full rounded-b-lg text-white">
                    <span className="bg-[rgba(243,244,246,0.5)] md:text-[24px] text-[15px] px-5 py-1 rounded font-[400] text-black">
                      ${product.price}
                    </span>
                    <h2 className="md:text-[48px] text-[20px] font-[400] mt-2">
                      {product.productname}
                    </h2>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 left-0 right-0 mt-[200px] z-10 flex justify-between px-5 md:hidden">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#E5F0B6] text-black hover:bg-[#d4e27e] flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#E5F0B6] text-black hover:bg-[#d4e27e] flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
        <div className="md:px-[100px] md:gap-4 md:mt-6 md:justify-end justify-between hidden md:flex">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#E5F0B6] text-black hover:bg-[#d4e27e] flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#E5F0B6] text-black hover:bg-[#d4e27e] flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
