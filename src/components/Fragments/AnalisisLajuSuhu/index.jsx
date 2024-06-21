import { Divider } from "antd"

const AnalisisLajuPerubahanSuhuUdara = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <Divider className="mt-3" />
            <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
            Analisis Laju Perubahan Suhu Udara Rata-Rata Tahunan 
            </h1>

            <Divider className="mb-3" />

            <div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">1. Laju Perubahan Suhu Udara Rata-rata</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/Suhu-tahunan-2022.png'
                    />
                    <div className="text-[14px] mb-3">
                        <p>Laju perubahan suhu udara diperoleh dengan menggunakan data observasi BMKG mulai dari tahun 1981-2022 yaitu suhu udara rata-rata, maksimum dan minimum. Laju perubahan suhu udara rata-rata secara nasional di Indonesia meningkat sebesar 0,6°C/30 tahun.</p>
                        <p className="mt-2">Beberapa kota yang mengalami laju perubahan suhu udara rata-rata tertinggi selama periode tahun 1981 - 2022 seperti yang ada pada tabel di bawah ini.</p>
                    </div>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/10-kota-besar-Suhu-Tertinggi-Tahunan.png'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">2. Laju Perubahan Suhu Udara Maksimum</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TMAX.png'
                    />
                    <div className="text-[14px] mb-3">
                        <p>Laju perubahan suhu udara maksimum secara nasional di Indonesia selama periode tahun 1981 - 2022 umumnya meningkat sebesar 0,5°C/30 tahun.</p>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">3. Laju Perubahan Suhu Udara Minimum</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/TMIN.png'
                    />
                    <div className="text-[14px] mb-3">
                        <p>Laju perubahan suhu udara minimum secara nasional di Indonesia selama periode tahun 1981 - 2022 umumnya meningkat sebesar 1,0°C/30 tahun.</p>
                    </div>
                </div>
                
                    <div className="text-[14px] mb-3">
                        <p>Untuk keperluan yang lebih lanjut dan lebih mendetail, dapat dilakukan dengan menghubungi Pusat Informasi Perubahan Iklim BMKG.</p>
                    </div>
            
            </div>

        </div>
    )
}
export default AnalisisLajuPerubahanSuhuUdara;