import * as React from "react"
import Layout from "../../../layouts"

const Manage = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] flex items-center justify-end m-0 p-0 home-container flex-col">
                <div className="max-w-[1044px] px-8 lg:px-0 flex flex-col items-center">
                    <h1 className="text-[36px] font-semibold mb-4">Manage Service</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
            </div>
            <div className="mx-auto max-w-[1044px] px-8 lg:px-0 bg-white h-auto py-[100px]">
                <h4 className="font-semibold py-4">Manage Service</h4>
                <p className="text-justify">Kebutuhan Teknologi Informasi yang semakin hari semakin kompleks dapat tertolong dengan solusi Manage Service yang kami tawarkan. Kami menyediakan berbagai macam solusi yang memudahkan pengelolaan kebutuhan IT anda secara efisien serta dapat meningkatkan performa bisnis anda dari sisi Teknologi.</p>
                <h4 className="font-semibold py-4">Layanan :</h4>
                <ul className="pl-[18px] list-decimal list-outside">
                    <li className="text-justify">Manage Access Point / WiFi</li>
                    <li className="text-justify">Manage CCTV</li>
                    <li className="text-justify">Manage Network</li>
                    <li className="text-justify">Manage Mailserver</li>
                </ul>
            </div>
            <style>{`
                .home-container {
                    background: #FBF9F8;
                    background-image: url("https://www.skyline.net.id/wp-content/uploads/2019/03/05-2.png");
                    background-repeat: repeat;
                    background-size: 60%;
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

export default Manage

export const Head = () => <title>ITCOMNet | Manage</title>
