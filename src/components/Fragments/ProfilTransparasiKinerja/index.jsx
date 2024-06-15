import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const data = [
    {
        id: 1,
        title: "  Rencana Strategis",
        content:
            [
                {
                    id: 1,
                    title: "  Rencana Strategis 2010-2014",
                    link: "https://cdn.bmkg.go.id/Web/RENSTRA-BMKG-TAHUN-2010-2014.pdf",
                },
                {
                    id: 2,
                    title: "  Perubahan RENSTRA BMKG 2014-2015",
                    link: "https://cdn.bmkg.go.id/Web/PERUBAHAN-RENSTRA-BMKG-TAHUN-2010-2014.pdf",
                },
                {
                    id: 3,
                    title: "  Rencana Strategis 2015-2019",
                    link: "https://cdn.bmkg.go.id/Web/RENSTRA-BMKG-TAHUN-2015-2019.pdf",
                },
                {
                    id: 4,
                    title: "  Perubahan RENSTRA BMKG 2015-2019",
                    link: "https://cdn.bmkg.go.id/Web/PERUBAHAN-RENSTRA-BMKG-TAHUN-2015-2019.pdf",
                },
                {
                    id: 5,
                    title: "  Rencana Strategis 2020-2024",
                    link: "https://cdn.bmkg.go.id/Web/RENCANA-STRATEGIS-BMKG-TAHUN-2020-2024.pdf",
                },
            ],
    },
    {
        id: 2,
        title: "  Indikator Kinerja Utama (IKU) BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  Indikator Kinerja Utama (IKU) 2020-2024",
                    link: "https://cdn.bmkg.go.id/Web/IKU-BMKG-2020-2024.pdf",
                },
            ],
    },
    {
        id: 3,
        title: "  Rencana Kerja BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  Rencana Kerja BMKG Tahun 2019",
                    link: "https://cdn.bmkg.go.id/Web/Renja-BMKG-TA-2019.pdf",
                },
                {
                    id: 2,
                    title: "  Rencana Kerja BMKG Tahun 2020",
                    link: "https://cdn.bmkg.go.id/Web/Renja-BMKG-TA-2020.pdf",
                },
                {
                    id: 3,
                    title: "  Rencana Kerja BMKG Tahun 2021",
                    link: "https://cdn.bmkg.go.id/Web/Renja-BMKG-TA-2021.pdf",
                },
                {
                    id: 4,
                    title: "  Rencana Kerja BMKG Tahun 2022",
                    link: "https://cdn.bmkg.go.id/Web/Renja-BMKG-TA-2022-1.pdf",
                },
                {
                    id: 5,
                    title: "  Rencana Kerja BMKG Tahun 2023",
                    link: "https://cdn.bmkg.go.id/Web/Renja-2023.pdf",
                },
            ],
    },
    {
        id: 4,
        title: "  Rencana Kerja dan Anggaran BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  RKA-KL 2022",
                    link: "https://cdn.bmkg.go.id/Web/RKA-KL_PAGU-ANGGARAN_BMKG_TA_2022-1.pdf",
                },
                {
                    id: 2,
                    title: "  RKA-KL 2023",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
            ],
    },
    {
        id: 5,
        title: "  Daftar Isian Pelaksanaan Anggaran (DIPA) BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  DIPA BMKG Tahun 2013",
                    link: "https://cdn.bmkg.go.id/Web/RKA-KL_PAGU-ANGGARAN_BMKG_TA_2022-1.pdf",
                },
                {
                    id: 2,
                    title: "  DIPA BMKG Tahun 2014",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 3,
                    title: "  DIPA BMKG Tahun 2015",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 4,
                    title: "  DIPA BMKG Tahun 2016",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 5,
                    title: "  DIPA BMKG Tahun 2017",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 6,
                    title: "  DIPA BMKG Tahun 2018",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 7,
                    title: "  DIPA BMKG Tahun 2019",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 8,
                    title: "  DIPA BMKG Tahun 2020",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 9,
                    title: "  DIPA BMKG Tahun 2021",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 10,
                    title: "  DIPA BMKG Tahun 2022",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
                {
                    id: 11,
                    title: "  DIPA BMKG Tahun 2023",
                    link: "https://cdn.bmkg.go.id/Web/RKAKL-PAGU-ALOKASI-BMKG-TA-2023-1.pdf",
                },
            ],
    },
    {
        id: 6,
        title: "  Perjanjian Kinerja (PK) BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  Perjanjian Kinerja (PK) KBMKG 2021",
                    link: "https://cdn.bmkg.go.id/Web/PERJANJIAN-KINERJA-KBMKG-2021.pdf",
                },
                {
                    id: 2,
                    title: "  Perjanjian Kinerja (PK) KBMKG 2022",
                    link: "https://cdn.bmkg.go.id/Web/PK-KBMKG-2022.pdf",
                },
                {
                    id: 3,
                    title: "  Perjanjian Kinerja (PK) KBMKG 2023",
                    link: "https://cdn.bmkg.go.id/Web/Perjanjian-Kinerja-2023.pdf",
                },
                {
                    id: 4,
                    title: "  Perjanjian Kinerja (PK) KBMKG 2024",
                    link: "https://drive.google.com/file/d/1UeuDxP7jReQrWCm0wJFEzVqrxhlirlR2/view",
                },
            ],
    },
    {
        id: 7,
        title: "  LAKIP BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  LAKIP BMKG 2014",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2014.pdf",
                },
                {
                    id: 2,
                    title: "  LAKIP BMKG 2015",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2015.pdf",
                },
                {
                    id: 3,
                    title: "  LAKIP BMKG 2016",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2016.pdf",
                },
                {
                    id: 4,
                    title: "  LAKIP BMKG 2017",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2017.pdf",
                },
                {
                    id: 5,
                    title: "  LAKIP BMKG 2018",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2018.pdf",
                },
                {
                    id: 6,
                    title: "  LAKIP BMKG 2019",
                    link: "https://cdn.bmkg.go.id/Web/Lakip-BMKG-2019.pdf",
                },
                {
                    id: 7,
                    title: "  LAKIP BMKG 2020",
                    link: "https://cdn.bmkg.go.id/Web/lakip_bmkg_2020_rev.pdf",
                },
                {
                    id: 8,
                    title: "  LAKIP BMKG 2021",
                    link: "https://cdn.bmkg.go.id/Web/LAKIP_BMKG_2021_WEB.pdf",
                },
                {
                    id: 9,
                    title: "  LAKIP BMKG 2022",
                    link: "https://cdn.bmkg.go.id/Web/LAKIP-BMKG-2022.pdf",
                },
                {
                    id: 10,
                    title: "  LAKIP BMKG 2023",
                    link: "https://drive.google.com/file/d/1aNim-BhMrbPJ3q7ynp-SLKISlU0cENRA/view",
                },
            ],
    },
    {
        id: 8,
        title: "  Laporan Tahunan",
        content:
            [
                {
                    id: 1,
                    title: "  Laporan Tahunan 2017",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2017.pdf",
                },
                {
                    id: 2,
                    title: "  Laporan Tahunan 2018",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2018.pdf",
                },
                {
                    id: 3,
                    title: "  Laporan Tahunan 2019",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2019.pdf",
                },
                {
                    id: 4,
                    title: "  Laporan Tahunan 2020",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2020.pdf",
                },
                {
                    id: 5,
                    title: "  Laporan Tahunan 2022",
                    link: "https://cdn.bmkg.go.id/Web/Laptah-BMKG-2022_lengkap_koreksian-1-agustus-2023.pdf",
                },
                {
                    id: 6,
                    title: "  Laporan Tahunan 2023",
                    link: "https://drive.google.com/file/d/1z1VVZTDMBYz3RcXN8mybkYHUqm0qhDa7/view?%20usp=drive_link",
                },
            ],
    },
    {
        id: 9,
        title: "  Laporan Keuangan",
        content:
            [
                {
                    id: 1,
                    title: "  Laporan Keuangan BMKG TA 2010 (Audited)",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2017.pdf",
                },
                {
                    id: 2,
                    title: " Laporan Keuangan BMKG TA 2011 (Audited)",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2018.pdf",
                },
                {
                    id: 3,
                    title: "  Laporan Keuangan BMKG TA 2012 (Audited)",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2019.pdf",
                },
                {
                    id: 4,
                    title: "  Laporan Keuangan BMKG TA 2013 (Audited)",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-Tahunan-BMKG-2020.pdf",
                },
            ],
    },
    {
        id: 10,
        title: "  Laporan Pengelolaan Barang Milik Negara (BMN)",
        content:
            [
                {
                    id: 1,
                    title: "  Laporan BMN Pengguna Barang BMKG TA 2020 (Audited)",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-BMN-BMKG-Audited-2020.pdf",
                },
                {
                    id: 2,
                    title: " Laporan BMN Pengguna Barang BMKG TA 2021 (Audited)",
                    link: "https://cdn.bmkg.go.id/Web/Laporan-BMN-BMKG-Audited-2021.pdf",
                },
                {
                    id: 3,
                    title: "  Laporan BMN Pengguna Barang BMKG TA 2022 (Audited)",
                    link: "https://cdn.bmkg.go.id/Web/laporan-BMN-audited-2022.pdf",
                },
            ],
    },
    {
        id: 11,
        title: "  Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP)",
        content:
            [
                {
                    id: 1,
                    title: "  Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP) Bulan Januari 2014",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-BMN-BMKG-Audited-2020.pdf",
                },
                {
                    id: 2,
                    title: " Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP) Bulan Februari 2014",
                    // link: "https://cdn.bmkg.go.id/Web/Laporan-BMN-BMKG-Audited-2021.pdf",
                },
                {
                    id: 3,
                    title: "  Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP) Bulan Maret 2014",
                    // link: "https://cdn.bmkg.go.id/Web/laporan-BMN-audited-2022.pdf",
                },
                {
                    id: 4,
                    title: "  Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP) Bulan September 2014",
                    // link: "https://cdn.bmkg.go.id/Web/laporan-BMN-audited-2022.pdf",
                },
                {
                    id: 5,
                    title: "  Laporan Realisasi Penerimaan Negara Bukan Pajak (PNBP) Bulan Desember 2014",
                    // link: "https://cdn.bmkg.go.id/Web/laporan-BMN-audited-2022.pdf",
                },
            ],
    },
    {
        id: 12,
        title: "  CALK BMKG",
        content:
            [
                {
                    id: 1,
                    title: "  CALK BMKG 2022 (Audited)",
                    link: "https://cdn.bmkg.go.id/Web/CALK-22-Audited-1.pdf",
                },
            ],
    },
    {
        id: 13,
        title: "  Program Kegiatan",
        content:
            [
                {
                    id: 1,
                    title: "  Rencana Kegiatan 2023",
                    link: "https://cdn.bmkg.go.id/Web/Data-Renja-2023-BMKG.pdf",
                },
                {
                    id: 2,
                    title: "  Ringkasan Kegiatan 2023",
                    link: "https://cdn.bmkg.go.id/Web/Ringkasan-Kinerja-Beserta-Pagu-Realisasi-2023.pdf",
                },
            ],
    },
];
const ProfilTransparasiKinerja = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active ">Transparansi Kinerja</p>
            {data.map((item) => (
                <Card key={item.id} className="w-full font-pt-sans mt-10" shadow="sm">
                    <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
                        <h2 className="text-[18px] font-semibold text-active">
                            {item.title}
                        </h2>
                    </CardHeader>
                    <Divider />
                    <CardBody className="px-5">
                        <ul className="list-disc ml-6 text-[14px]">
                            {item.content.map((sentence, index) => (
                                <li key={index}><a href={sentence.link} target="_blank">{sentence.title}</a></li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            ))}

        </div>



    );
};

export default ProfilTransparasiKinerja;