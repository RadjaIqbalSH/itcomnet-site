import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
    return(
        <>
        <section id="home" className="w-full min-h-[100vh] flex items-center justify-center m-0 px-8 home-container">
            <div className="w-[1044px] h-auto mt-[120px] mb-[50px] lg:m-auto">
                <div className=" w-full p-8 lg:pr-10 lg:py-16 mx-auto rounded-2xl bg-white shadow hover:shadow-xl transition-all flex flex-col md:flex-row space-y-8 space-x-0 md:space-y-0 md:space-x-8">
                    <div className="w-full">
                        <div className="w-full relative ">
                            <StaticImage class='w-full h-full object-contain' src='../../images/tech-banner.png' alt='banner'/>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center ">
                        <h1 className="font-bold text-[28px] mb-4">We Create Benefits and Benefits is Yours</h1>
                        <p className="font-light text-justify">
                            <b className='font-semibold'>PT. ITCOMNET INDOHADETAMA</b> memberikan berbagai solusi internet yang handal dan berkecepatan tinggi 
                            dengan layanan serta dukungan support service dengan dedikasi dan profesionalisme yang tinggi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <style>{`
            .home-container {
            background-image: url(https://www.skyline.net.id/wp-content/uploads/2019/03/05-3.png);
            background-position: 0px 0px;
            background-repeat: repeat;
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
        </>
    )
}

export default Home