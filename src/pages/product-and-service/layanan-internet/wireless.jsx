import * as React from "react"
import Layout from "../../../layouts"

const Wireless = () => {
    return (
        <Layout>
            <div className="w-full h-[300px] flex items-center justify-end m-0 p-0 home-container flex-col">
                <div className="max-w-[1044px] px-8 lg:px-0 flex flex-col items-center">
                    <h1 className="text-[36px] font-semibold mb-4">Wireless Internet</h1>
                    <div className="border-t-[#F18A02] border-t-4 mb-16 w-52"></div>
                </div>
            </div>
            <div className="mx-auto max-w-[1044px] px-8 lg:px-0 bg-white h-auto py-[100px]">
                <p className="text-justify">Merupakan koneksi internet dengan menggunakan media akses berteknologi nirkabel yang dapat diakses selama 24 jam, unlimited dan tanpa batasan quota.</p>
                <p className="text-justify">Dengan jaringan internet wireless pelanggan akan menerima bandwidth dedicated 1:1 sehingga bandwidth yang didapatkan tidak terbagi dengan pelanggan lain.</p>
                <h4 className="font-semibold py-4">Benefit Internet Wireless :</h4>
                <ul className="pl-[18px] list-decimal list-outside">
                    <li className="text-justify">Memberikan jaminan Upload dan Download bandwidth secara simetris.</li>
                    <li className="text-justify">Proses pemasangan cepat dengan hasil yang maksimal.</li>
                    <li className="text-justify">Menjadi solusi terbaik untuk primary link maupun backup link yang paling efisien.</li>
                    <li className="text-justify">Mudah untuk di relokasi atau dipindahkan. Pelanggan dapat membangun Jaringan Interkoneksi untuk menghubungkan kantor pusat dengan kantor cabangnya dimanapun lokasinya.</li>
                    <li className="text-justify">Pelanggan dapat memantau pemakaian internet secara real time melalui online traffic monitoring yang kami sediakan.</li>
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

export default Wireless

export const Head = () => <title>ITCOMNet | Wireless</title>
