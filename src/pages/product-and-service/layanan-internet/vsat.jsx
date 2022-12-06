import * as React from "react"
import Layout from "../../../layouts"

const Vsat = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] flex items-center justify-end m-0 p-0 home-container flex-col">
                <div className="max-w-[1044px] px-8 lg:px-0 flex flex-col items-center">
                    <h1 className="text-[36px] font-semibold mb-4">VSAT Solution</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
            </div>
            <div className="mx-auto max-w-[1044px] px-8 lg:px-0 bg-white h-auto py-[100px]">
                <p className="text-justify">Layanan VSAT merupakan solusi terbaik bagi anda yang mempunyai bisnis di daerah yang belum terjangkau media wireless maupun fiber optic. Dengan infrastuktur yang kami miliki bisnis anda akan tetap bisa terhubung dengan jaringan internet melalui teknologi VSAT.</p>
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

export default Vsat

export const Head = () => <title>ITCOMNet | VSAT</title>
