import * as React from "react"
import Layout from "../layouts"
import { HiOutlineLocationMarker, HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";

const ContactUs = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] px-8 flex items-center justify-end m-0 p-0 home-container flex-col">
                <h1 className="text-[36px] font-semibold mb-4">Contact Us</h1>
                <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
            </div>
            <div className="mx-auto max-w-[600px] flex flex-col space-y-6 bg-white h-auto py-[100px]">
                <div className="w-full p-8 bg-white rounded-lg ">
                    <div className="flex space-x-4">
                        <HiOutlineLocationMarker className="text-4xl text-[#8FD1CC] flex-none"/>
                        <div className="flex flex-col mt-2">
                            <p className="mb-4 font-semibold">ADDRESS</p>
                            <p>Jl. Situ Tarate I No. 1 Cibaduyut, Bandung Jawa Barat 40239.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 bg-white rounded-lg ">
                    <div className="flex space-x-4">
                        <HiOutlineMailOpen className="text-4xl text-[#8FD1CC] flex-none"/>
                        <div className="flex flex-col mt-2">
                            <p className="mb-4 font-semibold">EMAIL</p>
                            <p className="mb-2">sales@itcomnet.co.id</p>
                            <p>caroline@itcomnet.co.id</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 bg-white rounded-lg ">
                    <div className="flex space-x-4">
                        <HiOutlinePhone className="text-4xl text-[#8FD1CC] flex-none"/>
                        <div className="flex flex-col mt-2">
                            <p className="mb-4 font-semibold">PHONE</p>
                            <p>022-54418755</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .home-container {
                    background: #FBF9F8;
                    background-image: url("https://www.skyline.net.id/wp-content/uploads/2019/03/05-2.png");
                    background-repeat: repeat;
                    background-size: auto;
                    background-position: center center;
                    animation: animatedBackground 10s linear infinite;
                }

                @keyframes animatedBackground {
                    from {
                        background-position: 0;
                    }
                    to {
                        background-position: 100%;
                    }
                }
            `}</style>
        </Layout>
    )
}

export default ContactUs

export const Head = () => <title>Contact Us</title>
