import * as React from "react"
import Layout from "../../../layouts"
import { StaticImage } from "gatsby-plugin-image"

const BundlingPackage = () => {
    return (
        <Layout>
            <div className="w-full h-[100vh] bg-[#FBF9F8]">
                <div className="w-full h-[300px] px-8 flex items-center justify-end m-0 p-0 home-container flex-col relative">
                    <h1 className="w-full text-center text-[36px] font-semibold mb-4">On - Grid, Off Grid & Hybrid Pv System</h1>
                    <div className="border-t-[#F18A02] border-t-4 md:mb-16 w-52"></div>
                </div>
                <div className="w-full bg-[#FBF9F8]">
                    <div className="mx-auto max-w-[1044px] px-8 lg:px-0 h-auto py-[50px] pb-[100px] text-center">
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-01.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Solar On-Grid PV Systems</h4>
                                    <p className='text-sm'>
                                        PLTS Terkoneksi Jaringan adalah PLTS yang terhubung dengan jaringan listrik operator. Bekerja pada siang hari, energi yang dihasilkan dapat memenuhi kebutuhan energi yang ramah lingkungan sekaligus menghemat pemakaian listrik dari jaringan operator. Sistem ini dapat digunakan untuk bisnis IPP.
                                    </p>
                                </div>
                            </div>
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-02.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Solar Off-Grid PV Systems</h4>
                                    <p className='text-sm'>
                                    Off grid PV Systems pembangkit listrik tenaga surya mandiri adalah solusi energi terbarukan untuk daerah yang tidak terjangkau oleh jaringan listrik operator. Terdiri dari panel surya, charge controller, inverter, dan penyimpan energi. Energi yang dihasilkan akan disimpan dalam media penyimpanan kemudian disalurkan ke pengguna melalui sistem jaringan tersendiri.
                                    </p>
                                </div>
                            </div>
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-03.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Solar Power Hybrid System</h4>
                                    <p className='text-sm'>
                                    Hybrid System atau Pembangkit Listrik Tenaga Hibrida (PLTH) merupakan salah satu alternatif sistem pembangkit yang tepat diaplikasikan pada daerah-daerah yang sukar dijangkau oleh sistem pembangkit besar seperti jaringan PLN atau PLTD. PLTH ini memanfaatkan renewable energy sebagai sumber utama (primer) yang dikombinasikan dengan Diesel Generator sebagai sumber energi cadangan (sekunder).
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