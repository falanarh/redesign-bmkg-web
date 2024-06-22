import { Divider } from "antd"

const ProyeksiPerubahanSuhuUdara = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <Divider className="mt-3" />
            <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
                Proyeksi Perubahan Suhu Udara
            </h1>

            <Divider className="mb-3" />

            <div>
                <div className="text-[14px] mt-2">
                <p className="mb-2">Pusat Informasi Perubahan Iklim BMKG menyediakan informasi berupa peta spasial dari proyeksi perubahan parameter curah hujan dan suhu beserta indeks-indeks turunannya, untuk seluruh wilayah Indonesia dalam resolusi spasial 25 km x 25 km.</p>
                    <p className="mb-2">Peta proyeksi iklim ini merupakan hasil pengolahan data keluaran dari kegiatan pemodelan iklim regional dalam konsorsium internasional pemodelan iklim CORDEX-SEA, dimana BMKG menjadi salah satu bagian didalamnya. Data yang didapat dari keluaran kegiatan pemodelan CORDEX-SEA terdiri atas ensemble dari hasil proses downscaling enam jenis model proyeksi iklim global (GCM) dalam dua skenario RCP. Data ini disajikan dalam bentuk peta perubahan rata-rata normal / rata-rata komposit dari dua periode yang dibandingkan untuk parameter-parameter iklim terkait curah hujan dan suhu. Periode yang dibandingkan adalah periode hasil simulasi historis model (1976-2005) dengan periode proyeksi dengan skenario kenaikan gas rumah kaca dalam jangka waktu near-future (2020-2049). Dua skenario kenaikan gas rumah kaca yang digunakan adalah RCP4.5 dan RCP8.5.</p>
                    <p className="mb-2">Peta-peta ini dirangkum dalam bentuk buku atlas fisik dan/atau dokumen elektronik yang dapat diakses dengan menghubungi Pelayanan Terpadu Satu Pintu BMKG (PTSP-BMKG), dengan jumlah PNBP yang dapat dilihat pada laman: Produk dan Tarif PTSP atau laman: PTSP-BMKG pada bagian Layanan -{'>'} Jenis Layanan dan Tarif, pada item nomor I.B.3.a.2.a.</p>
                    <p className="mb-2">Untuk layanan yang lebih spesifik (semisal untuk kebutuhan binary raw-data atau shapefile dari peta-peta yang ada) dan/atau lebih detail (semisal untuk kebutuhan skala administrasi yang lebih spesifik) dan/atau hal-hal yang sifatnya customized lainnya, yang ditujukan untuk keperluan yang bersifat non-komersil (semisal untuk penelitian akademik, pengembangan masyarakat, kegiatan di lingkungan lembaga pemerintah, dan lain-lain), dapat dilakukan dengan menghubungi Pusat Informasi Perubahan Iklim BMKG untuk pengajuan dan pembahasan kerjasama terkait aktivitas yang dilakukan.</p>
                    <p className="mb-2">Terkait atlas yang telah disebutkan diatas (Peta Proyeksi Iklim Indonesia), berikut ditampilkan beberapa contoh (dalam resolusi gambar yang terbatas) sebagai etalase dari produk atlas yang utuh:</p>
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">1. Peta Proyeksi Perubahan Suhu Rata-rata Tahunan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/A-07-min-1024x723.jpg'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">2. Peta Proyeksi Perubahan Suhu Maksimum Tahunan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/A-08-min-1024x723.jpg'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">3. Peta Proyeksi Perubahan Suhu Minimum Tahunan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/A-09-min-1024x723.jpg'
                    />
                </div>
                <div className="mb-5">
                    <p className="text-[20px] font-bold text-active mt-3">4. Peta Proyeksi Perubahan Variasi Suhu Diurnal Tahunan</p>
                    <img className="mt-2"
                        src='https://cdn.bmkg.go.id/Web/A-10-min-1-1024x723.jpg'
                    />
                </div>
            </div>

        </div>
    )
}
export default ProyeksiPerubahanSuhuUdara;