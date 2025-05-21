import { Gusto, Stripe, Treework, Upwork } from "../../../assets/assets";

const Section2 = () => {
    return(
        <>
        <div className="bg-[#FCFAFA] md:px-[100px] py-[50px] flex flex-col md:flex-row items-center md:justify-between gap-10">
            <div className="text-center md:text-left">
                <h1 className="text-[60px] md:text-[96px] font-[600] text-[#2F241F] leading-none">25+</h1>
                <p className="text-[20px] md:text-[30px] text-[#2F241F]">PARTNERED BRAND</p>
            </div>

            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-5">
                <li>
                <img src={Gusto} alt="Gusto" className="w-[50px] md:w-[90px] md:mx-5" />
                </li>
                <li>
                <img src={Stripe} alt="Stripe" className="w-[40px] md:w-[80px] md:mx-5" />
                </li>
                <li>
                <img src={Treework} alt="Treework" className="w-[100px] md:w-[140px] md:mx-5" />
                </li>
                <li>
                <img src={Upwork} alt="Upwork" className="w-[60px] md:w-[100px] md:mx-5" />
                </li>
            </ul>
        </div>

        </>
    )
}

export default Section2;