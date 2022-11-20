import * as React from "react"
import Layout from "../../../layouts"

const FiberOptic = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] flex items-center justify-end m-0 p-0 home-container flex-col">
                <div className="max-w-[1044px] px-8 lg:px-0 flex flex-col items-center">
                    <h1 className="text-[36px] font-semibold mb-4">Internet Fiber Optic</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
            </div>
            <div className="mx-auto max-w-[1044px] px-8 lg:px-0 bg-white h-auto py-[100px]">
                <p className="text-justify">Layanan Internet Fiber Optic merupakan solusi bisnis yang sempurna karena memiliki keunggulan dibanding media lainnya. Media ini memberikan solusi dalam hal kecepatan, kehandalan, keamanan, dan kestabilan hingga 99,9%. Infrastruktur Fiber Optic dirancang untuk pengiriman data digital berkecepatan tinggi. Pelanggan dapat menggunakan layanan internet fiber optic selama 24 jam, unlimited tanpa batasan quota.</p>
                <h4 className="font-semibold py-4">Benefit Internet Fiber Optic:</h4>
                <ul className="pl-[18px] list-decimal list-outside">
                    <li className="text-justify">Memberikan jaminan Upload dan Download bandwidth secara simetris.</li>
                    <li className="text-justify">Pelanggan dapat membangun Jaringan Interkoneksi untuk menghubungkan kantor pusat dengan kantor cabangnya dimanapun lokasinya.</li>
                    <li className="text-justify">Pelanggan dapat memantau pemakaian internet secara real time melalui online traffic monitoring yang kami sediakan.</li>
                </ul>
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

export default FiberOptic

export const Head = () => <title>ITCOMNet | Fiber Optic</title>
