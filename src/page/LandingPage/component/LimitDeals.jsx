import { Email } from "../../../assets/assets";

const LimitDeals = () => {
    return(
        <div className="md:px-[100px] py-[50px] px-5 bg-[#FCFAFA]">
            <div className="md:text-[24px] text-[#2F241F]">LIMITED DEALS</div>
            <div className="md:text-[64px] font-[700] text-[#2F241F] mt-5">Become a member and get 10% off of your first purchase</div>
            <div className="pb-[100px] py-5 flex max-w-[600px]">
                <input
                    type="text"
                    placeholder="Enter your email here"
                    className="placeholder-[#553B33] md:text-[20px] px-6 h-[70px] bg-white rounded-l-[20px] w-full focus:outline-none"
                />
                <button
                    className="bg-[#E5F0B6] h-[70px] px-6 rounded-r-[20px] flex items-center justify-center"
                >
                    <img src={Email} alt="email" className="md:w-6 md:h-6" />
                </button>
            </div>
        </div>
    )
}

export default LimitDeals;