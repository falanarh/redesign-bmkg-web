import { Divider } from "antd"

const AnalisisLajuPerubahanCurahHujan = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <Divider className="mt-3" />
            <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
                Analisis Laju Perubahan Curah Hujan Tahunan
            </h1>

            <Divider className="mb-3" />

            <div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">1. Laju Perubahan Curah Hujan Tahunan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/PRCPTOT.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">2. Laju Perubahan Curah Hujan Maksimum Harian</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/Hujan-Maksimum-Harian-2022.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">3. Laju Perubahan Curah Hujan Maksimum 5 Harian</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-Rx5d-fix.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">4. Laju Perubahan Curah Hujan Persentil 95</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-R95p-fix.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">5. Laju Perubahan Curah Hujan Persentil 99</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-R99p-fix.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">6. Laju Perubahan Hari Hujan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-HH.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">7. Laju Perubahan Hari Hujan {'>'}20 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-HH20MM.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">8. Laju Perubahan Hari Hujan {'>'}50 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-HH50.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">9. Laju Perubahan Hari Hujan {'>'}100 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TREN-HH100.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">10. Laju Perubahan Fraksi Curah Hujan {'>'}20 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/FH20.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">11. Laju Perubahan Fraksi Curah Hujan {'>'}50 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/FH50.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">12. Laju Perubahan Fraksi Curah Hujan {'>'}100 mm/hari</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/FH100.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">13. Laju Perubahan Consecutive Wet Days (CWD)</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/CWD.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">14. Laju Perubahan Consecutive Dry Days (CDD)</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/CDD.png'
                    />
                </div>
                <div className="text-[14px] mb-3">
                <p >ISTILAH :</p>
                <ul className="list-disc ml-6">
                    <li>CDD (Consecutive Dry Days) : Jumlah maksimum hari kering berturut-turut atau nilai maksimum hari berturut-turut dengan curah hujan lebih kecil dari 1 mm dalam setahun, atau disebut deret hari kering (dry spell)</li>
                    <li>CWD (Consecutive Wet Days) : Jumlah maksimum hari hujan berturut-turut atau nilai maksimum hari berturut-turut dengan curah hujan lebih besar atau sama dengan 1 mm dalam 1 tahun, atau disebut deret hari hujan (wet spell)</li>
                    <li>Fraksi Hujan {'>'}NN mm : Persentase kejadian hujan lebih dari NN(nilai tertentu) mm terhadap Hari Hujan</li>
                    <li>Curah Hujan Maksimum Harian : Jumlah total curah hujan harian tertinggi dalam periode waktu tertentu</li>
                    <li>Curah Hujan Tahunan : Jumlah total curah hujan tahunan dengan curah hujan lebih atau sama dengan 1 mm</li>
                    <li>Hari Hujan : Jumlah hari dengan curah hujan {'>'}=1 mm dalam periode waktu tertentu</li>
                    <li>Hari Hujan {'>'}NN mm : Jumlah hari dengan curah hujan {'>'}=NN(nilai tertentu) mm dalam periode waktu tertentu</li>
                    <li>Curah Hujan Persentil NN : Jumlah total curah hujan tahunan dengan curah hujan di atas NN(nilai tertentu) persentil dalam satuan mm</li>
                    <li>Curah Hujan Maksimum 5 harian : Jumlah maksimum curah hujan lima hari berturut-turut dalam setahun (mm)</li>
                </ul>
                </div>
            </div>

        </div>
    )
}
export default AnalisisLajuPerubahanCurahHujan;