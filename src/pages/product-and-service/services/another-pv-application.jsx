import * as React from "react"
import Layout from "../../../layouts"
import { StaticImage } from "gatsby-plugin-image"

const BundlingPackage = () => {
    return (
        <Layout>
            <div className="w-full h-[100vh] bg-[#FBF9F8]">
                <div className="w-full h-[300px] px-8 flex items-center justify-end m-0 p-0 home-container flex-col">
                    <h1 className="w-full text-center text-[36px] font-semibold mb-4">Another PV Application</h1>
                    <div className="border-t-[#F18A02] border-t-4 md:mb-16 w-52"></div>
                </div>
                <div className="w-full bg-[#FBF9F8]">
                    <div className="mx-auto max-w-[1044px] px-8 lg:px-0 h-auto py-[50px] pb-[100px] text-center">
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className='md:flex card-custom text-start w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-default'>
                                <StaticImage class='md:flex-none md:w-[30%] w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src='../../../images/product-04.jpg' alt='banner'/>
                                <div className="p-6 md:p-8">
                                    <h4 className="font-semibold mb-4 text-[24px] cursor-default">Pembangkit Listrik Tenaga Mikro Hidro</h4>
                                    <p className='text-sm'>
                                        Mini/micro Hydro Power Plant adalah pembangkit listrik yang menggunakan air sebagai sumber energinya, biasa disebut PLTM (Pembangkit Listrik Tenaga Minihidro) dan PLTMH (Pembangkit Listrik Tenaga Mikrohidro). Di dalam PLTM/PLTMH terdapat komponen turbin dan generator. Air akan dialirkan melewati turbin sehingga turbin berputar. Putaran Turbin akan memutar generator hingga menghasilkan listrik
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