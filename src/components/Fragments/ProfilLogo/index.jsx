import { Card } from 'antd';

const ProfilLogo = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active ">Logo</p>
            <p className="mt-4 text-[14px]">
                Seluruh peraturan mengenai pembuatan, perubahan, dan pemakaian logo tertuang dalam:
            </p>
            <ul className="list-disc ml-6">
                <li>Keputusan Kepala BMKG Nomor 04 Tahun 2009 tentang: LOGO DAN PENGGUNAAN CAP DINAS</li>
                <li>Keputusan Kepala BMKG Nomor 03 Tahun 2010 tentang : PERUBAHAN LOGO DAN PENGGUNAAN CAP DINAS BMKG</li>
                <li>Peraturan BMKG Nomor 5 Tahun 2018 tentang PEDOMAN TATA NASKAH DINAS DI LINGKUNGAN BMKG</li>
            </ul>

            <Card className='mt-7' style={{ borderRadius: '15px' }}>
                <div className='flex justify-center items-center mt-6'>
                    <img style={{ width: 262, height: 329 }} src='https://cdn.bmkg.go.id/Web/Logo-BMKG-new.png' alt="BMKG Logo" />
                </div>
                <p className='text-[14px]" mt-8'>Logo BMKG berbentuk lingkaran dengan warna dasar biru, putih dan hijau, di tengah-tengah warna putih terdapat satu garis berwarna abu-abu dengan tulisan BMKG pada bagian bawah.</p>
                <div className='mt-4'>
                    <p className="text-xl font-bold text-active ">Makna Logo</p>
                    <p className="mt-1 text-[14px]">
                        Makna dari logo BMKG menggambarkan bahwa BMKG berupaya semaksimal mungkin dapat menyediakan dan memberikan informasi Meteorologi, Klimatologi, dan Geofisika dengan mengaplikasikan perkembangan ilmu pengetahuan dan teknologi terkini dan dapat berkembang secara dinamis sesuai kemajuan jaman. Dalam menjalankan fungsinya, BMKG berupaya memberikan yang terbaik dan penuh keikhlasan berdasarkan Pancasila untuk bangsa dan tanah air Indonesia yang subur yang terletak di garis khatulistiwa.
                    </p>
                </div>
                <div className='mt-4'>
                    <p className="text-xl font-bold text-active ">Arti Logo</p>
                    <ul className="list-disc ml-6 text-[14px]">
                        <li>Bentuk lingkaran melambangkan BMKG sebagai institusi yang dinamis.</li>
                        <li>5 (lima) garis dibagian atas melambangkan dasar negara Indonesia yaitu Pancasila.</li>
                        <li>9 (sembilan) garis dibagian bawah merupakan angka tertinggi yang melambangkan hasil maksimal yang diharapkan.</li>
                        <li>Gumpalan awan warna putih melambangkan meteorologi.</li>
                        <li>Bidang warna biru bergaris melambangkan klimatologi.</li>
                        <li>Bidang berwarna hijau bergaris patah melambangkan geofisika.</li>
                        <li>1(satu) garis melintang ditengah melambangkan garis katulistiwa.</li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <p className="text-xl font-bold text-active ">Warna Logo</p>
                    <ol className="list-decimal ml-6 text-[14px]">
                        <li>Arti warna logo</li>
                        <ul className="list-disc ml-6 text-[14px]">
                            <li>warna biru diartikan keagungan/ketakwaan.</li>
                            <li>warna putih diartikan keikhlasan/suci.</li>
                            <li>warna hijau diartikan kesuburan.</li>
                            <li>warna abu-abu diartikan bebas/tidak ada batas administrasi.</li>
                        </ul>
                        <li>Jenis warna</li>
                        <ul className="list-disc ml-6 text-[14px]">
                            <li>warna biru menggunakan warna biru jenis Blue nomor 0 0 205</li>
                            <li>warna putih menggunakan warna putih jenis White nomor 255; 255; dan 255</li>
                            <li>warna hijau menggunakan warna hijau jenis Green nomor 34; 139; dan 34</li>
                            <li>warna abu-abu menggunakan warna abu-abu jenis Grey nomor 128; 128; dan 128</li>
                        </ul>
                        <li>Penulisan kata "BMKG" dalam logo BMKG menggunakan warna hitam, jenis huruf arial dengan penebalan (bold), dengan ukuran 75% (tujuh lima persen) dari diameter logo.</li>
                    </ol>
                </div>

            </Card>
        </div>
    );
};

export default ProfilLogo;