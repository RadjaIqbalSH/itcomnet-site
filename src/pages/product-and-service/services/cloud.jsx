import * as React from "react"
import Layout from "../../../layouts"

const Cloud = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] flex items-center justify-end m-0 p-0 home-container flex-col">
                <div className="max-w-[1044px] px-8 lg:px-0 flex flex-col items-center">
                    <h1 className="text-[36px] font-semibold mb-4">Cloud Services</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
            </div>
            <div className="mx-auto max-w-[1044px] px-8 lg:px-0 bg-white h-auto py-[100px]">
                <h4 className="font-semibold py-4">Cloud Services</h4>
                <p className="text-justify">Cloud Services merupakan layanan penyimpanan data dimana perusahaan anda tidak harus membangun infrastruktur sendiri. Dengan Cloud Services perusahaan anda dapat menyederhanakan dan mempermudah kebutuhan Operasional IT anda, tentunya dengan biaya yang lebih hemat.</p>
                <h4 className="font-semibold py-4">Layanan :</h4>
                <ul className="pl-[18px] list-decimal list-outside">
                    <li className="text-justify">Web Hosting</li>
                    <li className="text-justify">Application</li>
                    <li className="text-justify">Mail Server</li>
                    <li className="text-justify">Virtual Private Server</li>
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

export default Cloud

export const Head = () => <title>ITCOMNet | Cloud</title>
