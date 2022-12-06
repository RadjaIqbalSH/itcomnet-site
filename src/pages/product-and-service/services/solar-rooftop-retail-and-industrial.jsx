import * as React from "react"
import Layout from "../../../layouts"
import { StaticImage } from "gatsby-plugin-image"

const BundlingPackage = () => {
    return (
        <Layout>
            <div className="w-full h-[100vh] bg-[#FBF9F8]">
                <div className="w-full h-[300px] px-8 flex items-center justify-end m-0 p-0 home-container flex-col">
                    <h1 className="w-full text-center text-[36px] font-semibold mb-4">Solar Rooftop Retail & Industrial</h1>
                    <div className="border-t-[#F18A02] border-t-4 md:mb-16 w-52"></div>
                </div>
                <div className="w-full bg-[#FBF9F8]">
                    <div className="mx-auto max-w-[1044px] px-8 lg:px-0 h-auto py-[50px] pb-[100px] text-center">
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-04.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Rooftop Solar Power untuk Kantor dan Rumah</h4>
                                    <p className='text-sm'>
                                        Memanfaatkan atap kantor dan rumah anda sebagai tempat PLTS menjadi solusi untuk keterbatasan lahan terutama di perkotaan. Selain menjadi sumber energi bersih yang dapat menghemat biaya listrik, PLTS Atap juga dapat diintegrasikan untuk menambah keunikan dan keindahan bangunan.
                                    </p>
                                </div>
                            </div>
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-05.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Kamuflase Pohon Tenaga Surya </h4>
                                    <p className='text-sm'>
                                        Solusi yang tepat untuk penerangan jalan. Bersumber dari energi terbarukan yang tidak akan habis dan bebas polusi. Penggunaan yang mudah dan perawatan yang sangat minim menjadikan PJU tenaga surya pilihan yang tepat untuk penerangan jalan, kini dan nanti.
                                    </p>
                                </div>
                            </div>
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-06.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Umbrella Solar Power</h4>
                                    <p className='text-sm'>
                                        Saung yang dapat menghasilkan listrik tanpa jaringan PLN menggunakan prinsip kerja DC Coupling PLTS Off Grid mengubah energi matahari dengan solar panel tanpa frame dan memanfaatkan baterai sebagai media penyimpanan. Pemanfaatan saung tenaga surya adalah sebagai media promosi dan selain itu tentunya merupakan saung dengan teknologi pengecasan yang bermanfaat untuk keperluan outdoor. Berkapasitas 700 WH ini memiliki 4 output DC dan 1 output AC.
                                    </p>
                                </div>
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

export const Head = () => <title>ITCOMNet | On - Grid, Off Grid & Hybrid Pv System</title>