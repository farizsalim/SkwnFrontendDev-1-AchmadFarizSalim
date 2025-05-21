import { Logo } from "../../../assets/assets";

const Footer = () => {
    return(
        <>
        <div className="md:mx-[100px] mx-[50px] md:flex md:flex-row gap-50">
            <div className="flex-[2] text-[#667085] md:text-left text-center justify-center">
                <img src={Logo} alt="logo" className="h-[30px] my-[30px] mx-auto md:mx-0" />
                <p className="my-[30px]">
                Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
                </p>
                <p className="mt-[50px]">©Copyright 2022 Dekoor</p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap gap-5 text-[#667085]">
                <div className="flex flex-row justify-center md:justify-start gap-5 w-full md:w-auto">
                    <div className="md:text-left text-center mt-2">
                    <ul>
                        <li><p className="text-[20px] font-[500] my-5 text-black">Support</p></li>
                        <li><p className="my-3 text-[15px]">FAQ</p></li>
                        <li><p className="my-3 text-[15px]">Shipping & Returns</p></li>
                        <li><p className="my-3 text-[15px]">Care guide</p></li>
                        <li><p className="my-3 text-[15px]">Redeem warranty</p></li>
                    </ul>
                    </div>
                    <div className="md:text-left text-center mt-2">
                    <ul>
                        <li><p className="text-[20px] font-[500] my-5 text-black">Social Media</p></li>
                        <li><p className="my-3">Instagram</p></li>
                        <li><p className="my-3">Facebook</p></li>
                        <li><p className="my-3">Twitter</p></li>
                        <li><p className="my-3">TikTok</p></li>
                    </ul>
                    </div>
                </div>
                <div className="md:text-left text-center mt-2 w-full md:w-auto">
                    <ul>
                    <li><p className="text-[20px] font-[500] my-5 text-black">About Us</p></li>
                    <li><p className="my-3">Our Story</p></li>
                    <li><p className="my-3">Designer</p></li>
                    <li><p className="my-3">Craftmanship</p></li>
                    <li><p className="my-3">Sustainability</p></li>
                    </ul>
                </div>
            </div>

        </div>

        </>
    )
}

export default Footer;