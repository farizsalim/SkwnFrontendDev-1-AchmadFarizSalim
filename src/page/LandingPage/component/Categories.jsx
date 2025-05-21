import { useState } from "react";

const Categories = ({ categories }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // tampilkan data pertama dulu

  if (!categories || categories.length === 0) {
    return <p>Loading...</p>;
  }

  const selectedCategory = categories[selectedIndex];

  return (
    <div className="flex md:flex-row-reverse flex-col md:pl-0 px-[20px] md:pr-[100px] ml-0 ">
        <div className="flex flex-col justify-start md:items-start md:w-2/5 ml-0 md:p-0 w-full">
            <h1 className="text-center md:text-left text-[15px] md:text-[24px] text-[#2F241F]">Categories</h1>
            <h2 className="text-center md:text-left text-[20px] md:text-[48px] font-[700] md:mt-[30px] text-[#2F241F]">Furniture Sets Recommendations</h2>
            {categories.map((item, index) => (
                <div key={index} className="w-full bg-[#FCFAFA]">
                    <button
                        onClick={() => setSelectedIndex(index)}
                        className={`w-full text-left  px-4 py-2 font-bold bg-[#E5F0B6] ${
                        selectedIndex === index
                            ? "bg-[#E5F0B6] "
                            : "bg-transparent hover:bg-[#E5F0B6]"
                        }`}
                    >
                        {item.nameCategories}

                    {selectedIndex === index && (
                        <p className="text-gray-600 mb-6 font-medium ">{item.details}</p>
                    )}
                    </button>
                </div>
            ))}
        </div>
        <div className="flex  md:items-start justify-center flex-row gap-2 md:flex-wrap md:w-3/5 mt-3">
            <img src={selectedCategory.photo3} alt="Photo 3" className="md:w-[400px] w-[100px] md:h-[500px] h-[100px]  object-cover rounded" />
            <img src={selectedCategory.photo2} alt="Photo 2" className="md:w-[150px] w-[100px] md:h-[500px] h-[100px]  object-cover rounded" />
            <img src={selectedCategory.photo1} alt="Photo 1" className="md:w-[150px] w-[100px] md:h-[500px] h-[100px]  object-cover rounded" />
        </div>
    </div>
  );
};

export default Categories;
