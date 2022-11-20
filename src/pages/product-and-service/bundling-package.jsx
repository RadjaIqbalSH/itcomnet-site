import * as React from "react"
import Layout from "../../layouts"

const BundlingPackage = () => {
    return (
        <Layout>
            <div className="w-full h-[100vh] bg-[#FBF9F8]">
                <div className="w-full h-[300px] px-8 flex items-center justify-end m-0 p-0 home-container flex-col">
                    <h1 className="text-[36px] font-semibold mb-4">Bundling Package</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
                <div className="w-full bg-[#FBF9F8]">
                    <div className="mx-auto max-w-[1044px] px-8 lg:px-0 h-auto py-[100px] text-center">
                        <h4 className="font-semibold pb-12">kami memberikan solusi yang sesuai dengan kebutuhan pelanggan (customize)</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className='card-custom text-start w-full rounded-lg bg-white p-12 shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <h4 className="font-semibold mb-8 text-[30px] text-blue-500 cursor-default">Silver</h4>
                                <p className='text-justify'>
                                    Bundling Package Silver ini terdiri dari layanan internet dan software yang bisa anda custom sendiri sesuai dengan kebutuhan anda. Paket Silver ini cocok bagi perusahaan Small Medium Business atau yang sedang berkembang untuk memenuhi kebutuhan Teknologi Informasi anda dengan harga yang terjangkau.
                                </p>
                            </div>
                            <div className='card-custom text-start w-full rounded-lg bg-white p-12 shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <h4 className="font-semibold mb-8 text-[30px] text-blue-500">Gold</h4>
                                <p className='text-justify'>
                                    Bundling Package Gold ini terdiri dari layanan internet dan software seperti yang bisa anda custom sendiri sesuai dengan kebutuhan anda. Paket Gold ini cocok untuk perusahaan anda yang membutuhkan bandwidth internet cukup besar serta software yang beragam untuk memenuhi kebutuhan Teknologi Informasi anda
                                </p>
                            </div>
                            <div className='card-custom text-start w-full rounded-lg bg-white p-12 shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <h4 className="font-semibold mb-8 text-[30px] text-blue-500">Platinum</h4>
                                <p className='text-justify'>
                                    Bundling Package Platinum ini exclusive untuk perusahaan Enterprise yang membutuhkan bandwidth internet yang besar dan tersebar di beberapa cabang perusahaan anda dengan disertai software yang sesuai dengan kebutuhan perusahaan dalam jumlah banyak
                                </p>
                            </div>
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
                .card-custom {
                    background-image: url("https://www.skyline.net.id/wp-content/themes/skyline/images/bg/02.png");
                    background-position: right;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            `}</style>
        </Layout>
    )
}

export default BundlingPackage

export const Head = () => <title>ITCOMNet | Bundling Package</title>