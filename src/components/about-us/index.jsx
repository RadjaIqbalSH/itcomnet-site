import React from 'react'

const AboutUs = () => {

    return(
        <>
            <section id="about-us" className="w-full h-[100vh] m-0 p-0 bg-[#FBF9F8]">
                <div className="max-w-[1044px] px-8 lg:px-0 pt-[200px] mx-auto text-center ">
                    <h1 className="text-[36px] font-semibold mb-4">About Us</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52 mx-auto"></div>
                    {/* <h1 className="text-[36px] font-semibold mb-12 border-b-[#F18A02] border-b-4 w-fit mx-auto">About Us</h1> */}
                    <p className='text-justify'>
                        PT.ITCOMNET INDOHADETAMA adalah perusahaan yang bergerak dibidang informasi, komunikasi dan teknologi semenjak tahun 2018
                        Didukung oleh sumber daya yang memiliki kompetensi tinggi, PT.ITCOMNET INDOHADETAMA memberikan berbagai solusi layanan informasi, 
                        komunikasi dan terknologi dalam suatu bentuk kerjasama, dimana kepuasan costumer adalah tujuan utama dari bisnis ini.
                        Kami menyakini bahwa kami dapat memberikan kualitas, konsistensi dan layanan service terbaik untuk costumer.
                    </p>
                </div>
                <div className="max-w-[1044px] px-8 lg:px-0 pt-[100px] pb-[200px] mx-auto text-center">
                <h1 className="text-[36px] font-semibold mb-4">Visi & Misi</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52 mx-auto"></div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='card-custom w-full text-start rounded-lg bg-white p-12 shadow-lg'>
                            <h4 className="font-semibold mb-8 text-[30px] text-blue-500">Visi</h4>
                            <p className='text-justify'>
                                Visi kami adalah menjadi perusahaan penyedia dibidang teknologi infromasi komunikasi 
                                dan juga teknologi terkemuka dengan pelayanan terbaik dalam memberikan solusi terpercaya 
                                dan bernilai tambah bagi pelanggan dan stakeholder.
                            </p>
                        </div>
                        <div className='card-custom text-start w-full rounded-lg bg-white p-12 shadow-lg'>
                            <h4 className="font-semibold mb-8 text-[30px] text-blue-500">Misi</h4>
                            <p className='text-justify'>
                                Misi kami adalah mengembangkan perusahaan dengan kultur professional, integritas dan berorientasi 
                                bisnis. Mengembangkan ragam produk dan teknologi berdaya guna. Meningkatkan manfaat dan nilai bagi 
                                pelanggan dan stakeholder secara berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>
                <style>{`
                    #about-us {
                        background-image: url("https://www.skyline.net.id/wp-content/themes/skyline/images/pattern/05.png");
                        background-position: 0px 0px;
                        background-repeat: repeat;
                        animation: animatedBackground 10s linear infinite;
                    }
                    .card-custom {
                        background-image: url("https://www.skyline.net.id/wp-content/themes/skyline/images/bg/02.png");
                        background-position: right;
                        background-size: contain;
                        background-repeat: no-repeat;
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
            </section>
        </>
    )

}

export default AboutUs;