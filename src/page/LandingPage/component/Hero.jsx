const Hero = ({ randomProduct, handleRandomize }) => {
  return (
    <div className="Hero md:flex !flex-row justify-center container mx-auto mr-0 gap-4">
      <div className="flex-[3]">
        <div className="md:mb-[50px] md:mt-[100px]">
          <h1 className="md:text-5xl md:text-left text-center header_font leading-[80px]">
            The kind of <span className="unique_font"><br />furniture</span> you have been looking for
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
          <input
            placeholder="SEARCH CATALOG"
            className="input_hero py-2 px-4 rounded-[20px] md:w-[344px] w-[200px] md:h-[80px] my-2 text-center font-medium md:text-[28px] placeholder-orange-950"
          />
          <button
            className="bg-transparent md:w-[344px] w-[200px] md:h-[80px] hover:bg-orange-900 text-orange-900 font-medium md:text-[28px] hover:text-white py-2 px-4 my-2 border border-orange-900 hover:border-transparent rounded-[20px]"
          >
            WATCH VIDEOS
          </button>
        </div>
      </div>

      <div className="flex-[2] mr-0">
        {randomProduct ? (
          <div
            onClick={handleRandomize}
            className="cursor-pointer"
          >
            <div className="relative overflow-hidden shadow-lg">
              <img
                src={randomProduct.photo}
                alt={randomProduct.productname}
                className="w-[550px] md:h-[657px] h-[350px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                <p className="text-lg text-center text-[25px] font-medium bg-[rgba(243,244,246,0.8)] w-[80px] rounded-[20px]">
                  ${randomProduct.price}
                </p>
                <h3 className="text-left font-light text-white md:text-[60px] text-[40px]">{randomProduct.productname}</h3>
                <div
                  className="text-[25px] mt-2 bg-[#2F241F] text-white px-4 py-2 rounded w-[220px] text-center"
                >
                  View Details
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
