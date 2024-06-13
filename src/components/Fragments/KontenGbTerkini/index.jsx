import { Chip } from "@nextui-org/react";
import TableComponent from "../../Elements/TableComponent";

const customColumns = [
  {
    uid: "waktu",
    name: "WAKTU GEMPA",
    sortable: true,
    renderCell: (item) => (
      <div className="flex flex-col">
        <p className="text-bold text-sm">{item.jam}</p>
      </div>
    ),
    
  },
  {
    uid: "lintang",
    name: "LINTANG",
    sortable: true,
    renderCell: (item) => item.lintang,
  },
  {
    uid: "bujur",
    name: "BUJUR",
    sortable: true,
    renderCell: (item) => item.bujur,
  },
  {
    uid: "kedalaman",
    name: "KEDALAMAN",
    sortable: true,
    renderCell: (item) => (
      <div className="flex flex-col">
        <p className="text-bold text-sm">{`${item.kedalaman} ${item.satuan}`}</p>
      </div>
    ),
  },
  // {
  //   uid: "kota",
  //   name: "KOTA",
  //   sortable: true,
  //   renderCell: (item) => item.kota,
  // },
  {
    uid: "wilayah",
    name: "WILAYAH",
    sortable: true,
    renderCell: (item) => item.wilayah,
  },
  {
    uid: "magnitudo",
    name: "MAGNITUDO",
    sortable: true,
    renderCell: (item) => item.magnitudo,
  },
  {
    uid: "status",
    name: "STATUS",
    sortable: true,
    renderCell: (item) => (
      <Chip
        className="capitalize"
        color={statusColorMap[item.status]}
        size="sm"
        variant="flat"
      >
        {item.status}
      </Chip>
    ),
  },
];

const statusColorMap = {
  ringan: "success",
  besar: "danger",
  sedang: "warning",
};

const customData = [
  { id: 1, tgl: '09 Juni 2024', jam: '08:04:46 WIB', lintang: 4.88, bujur: 126.24, kedalaman: 54, satuan:'Km',kota:'sby',wilayah: '94 km BaratLaut PULAUKARATUNG-SULUT', magnitudo: 5.1, status: 'besar' },
  { id: 2, tgl: '07 Juni 2024', jam: '23:31:06 WIB', lintang: -2.86, bujur: 139.37, kedalaman: 45, satuan:'Km',kota:'jember',wilayah: '95 km TimurLaut KOBAGMA-PAPUAPGNGN', magnitudo: 5.8, status: 'besar' },
  { id: 3, tgl: '07 Juni 2024', jam: '05:00:52 WIB', lintang: -2.72, bujur: 142.32, kedalaman: 10 , satuan:'Km',kota:'madura',wilayah: '170 km BaratLaut WEWAK-PNG', magnitudo: 5.1, status: 'sedang' },
  { id: 4, tgl: '07 Juni 2024', jam: '01:57:39 WIB', lintang: -7.36, bujur: 121.04, kedalaman: 537 , satuan:'Km',kota:'makasar',wilayah: '133 km Tenggara SELAYAR-SULSEL', magnitudo: 5.3, status: 'ringan' },
  { id: 5, tgl: '06 Juni 2024', jam: '20:15:40 WIB', lintang: -9.11, bujur: 116.94, kedalaman: 10 , satuan:'Km',kota:'pekalongan',wilayah: '40 km Tenggara SUMBAWABARAT-NTB', magnitudo: 5.1, status: 'besar' },
  { id: 6, tgl: '05 Juni 2024', jam: '18:16:14 WIB', lintang: 0.42, bujur: 98.50, kedalaman: 57 , satuan:'Km',kota:'madura',wilayah: '78 km Tenggara NIASSELATAN-SUMUT', magnitudo: 5.7, status: 'besar' },
  { id: 7, tgl: '05 Juni 2024', jam: '09:20:28 WIB', lintang: -3.76, bujur: 100.54, kedalaman: 34 , satuan:'Km',kota:'sby',wilayah: '146 km BaratDaya MUKOMUKO-BENGKULU', magnitudo: 5.7, status: 'ringan' },
  { id: 8, tgl: '03 Juni 2024', jam: '04:43:44 WIB', lintang: -2.77, bujur: 138.89, kedalaman: 31 , satuan:'Km',kota:'madura',wilayah: '77 km Tenggara MAMBERAMOTENGAH-PAPUAPGNGN', magnitudo: 5.0, status: 'besar' },
  { id: 9, tgl: '02 Juni 2024', jam: '16:22:04 WIB', lintang: 2.02, bujur: 127.71, kedalaman: 222 , satuan:'Km',kota:'sby',wilayah: '30 km BaratDaya PULAUDOI-MALUT', magnitudo: 5.1, status: 'sedang' },
  { id: 10, tgl: '01 Juni 2024', jam: '18:01:40 WIB', lintang: -1.51, bujur: 134.53, kedalaman: 11 , satuan:'Km',kota:'madura',wilayah: '41 km Tenggara RANSIKI-PAPUABRT', magnitudo: 5.2, status: 'besar' },
  { id: 11, tgl: '31 Mei 2024', jam: '05:54:38 WIB', lintang: 5.63, bujur: 126.18, kedalaman: 88 , satuan:'Km',kota:'sby',wilayah: '139 km BaratLaut PULAUKARATUNG-SULUT', magnitudo: 5.4, status: 'sedang' },
  { id: 12, tgl: '31 Mei 2024', jam: '00:08:19 WIB', lintang: -2.76, bujur: 122.18, kedalaman: 10 , satuan:'Km',kota:'madura',wilayah: '31 km Tenggara MOROWALI-SULTENG', magnitudo: 5.1, status: 'ringan' },
  { id: 13, tgl: '28 Mei 2024', jam: '18:52:38 WIB', lintang: 2.76, bujur: 95.41, kedalaman: 12 , satuan:'Km',kota:'sby',wilayah: '111 km BaratLaut SINABANG-ACEH', magnitudo: 6.2, status: 'ringan' }
];

const statusOptions = [
  { uid: "ringan", name: "Ringan" },
  { uid: "besar", name: "Besar" },
  { uid: "sedang", name: "Sedang" },
];

const initialVisibleColumns = ["waktu", "lintang","bujur","kedalaman","wilayah", "magnitudo", "status"];

const KontenGbTerkini = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold text-active h-16">Gempa Bumi Terkini</p>
      <p className="">
        Gempa bumi terkini merupakan informasi gempabumi yang{" "}
        <span className="font-bold" style={{ display: "inline-block" }}>
          didiseminasikan dalam waktu kurang dari 5 menit
        </span>{" "}
        setelah kejadian gempa. Informasi ini merupakan informasi gempabumi
        secara cepat dan tidak ada pemutakhiran parameter gempabumi. Parameter
        gempabumi yang final bisa jadi berbeda.
      </p>
      <TableComponent
        columns={customColumns}
        data={customData}
        statusOptions={statusOptions}
        initialVisibleColumns={initialVisibleColumns}
      />
    </div>
  );
};

export default KontenGbTerkini;
