import { Vector1, Vector2, Vector3 } from "../../../assets/assets";

const Section1 = () => {
    return(
        <>
        <div className="bg-[#2F241F] md:px-[100px] py-[50px]">
            <p className="text-[#E5F0B6] md:text-left text-center md:text-[24px]  text-[15px] md:my-5 ">WHY CHOOSE US?</p>
            <h1 className="text-[#E5F0B6] md:text-left text-center md:text-[55px] px-[20px] text-[25px] font-black md:m-5 my-5 !mx-0">We care about details and the quality of our products</h1>
            <ul className="text-[#E5F0B6] text-[24px] font-[500] md:flex flex-row justify-center gap-5 my-5">
                <li className="md:w-[400px] md:px-0 px-10 md:text-[24px] text-[15px] flex md:justify-center mt-5 items-center">
                    <img src={Vector2} alt="icon" className="w-10 h-10 mr-2 bg-[#8A8A6A] rounded aspect-square object-contain p-2" />
                    MANUFACTURED WITH QUALITY MATERIALS
                </li>
                <li className="md:w-[400px] md:px-0 px-10 md:text-[24px] text-[15px] flex md:justify-center mt-5 items-center">
                    <img src={Vector3} alt="icon" className="w-10 h-10 mr-2 bg-[#8A8A6A] rounded aspect-square object-contain p-2" />
                    5 YEARS OF WARRANTY FOR EACH PRODUCT
                </li>
                <li className="md:w-[400px] md:px-0 px-10 md:text-[24px] text-[15px] flex md:justify-center mt-5 items-center">
                    <img src={Vector1} alt="icon" className="w-10 h-10 mr-2 bg-[#8A8A6A] rounded aspect-square object-contain p-2" />
                    20 YEARS OF EXPERTISE
                </li>
            </ul>
        </div>
        </>
    )
}

export default Section1;