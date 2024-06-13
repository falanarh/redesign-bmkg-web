import { Divider, Select, SelectItem } from "@nextui-org/react";
import { prakiraanCuaca, times } from "./data";
import TableComponent from "../../Elements/TableComponent";

const customColumns = [
  {
    uid: "nomor",
    name: "No",
    sortable: false,
    renderCell: (item) => (
      <div className="flex flex-col">
        <p className="text-bold text-sm">{item.key}</p>
      </div>
    ),
  },
  {
    uid: "stasiun",
    name: "Bandara/Stasiun",
    sortable: true,
    renderCell: (item) => item.bandaraStasiun,
  },
  {
    uid: "time",
    name: "Waktu Prakiraan (Local time)",
    sortable: true,
    renderCell: (item) => item.waktuPrakiraan,
  },
  {
    uid: "arah-angin",
    name: "Arah Angin",
    sortable: true,
    renderCell: (item) => item.arahAngin,
  },
  {
    uid: "kecepatan-angin",
    name: "Kecepatan Angin (km/jam)",
    sortable: true,
    renderCell: (item) => item.kecepatanAnginKmJam,
  },
  {
    uid: "jarak-pandang",
    name: "Jarak Pandang (km)",
    sortable: true,
    renderCell: (item) => item.jarakPandangKm,
  },
  {
    uid: "cuaca",
    name: "Cuaca",
    sortable: true,
    renderCell: (item) => item.cuaca,
  },
  {
    uid: "probabilitas",
    name: "Probabilitas",
    sortable: true,
    renderCell: (item) => (item.probabilitas != null ? item.probabilitas : "-"),
  },
];

const initialVisibleColumns = [
  "nomor",
  "stasiun",
  "waktu",
  "cuaca",
  "probabilitas",
];

const PrakiraanCuacaBandara = () => {
  return (
    <div className="flex flex-col">
      <Select
        items={times}
        label="Waktu prakiraan cuaca"
        placeholder="Pilih waktu prakiraan cuaca"
        showScrollIndicators={true}
        //   selectedKeys={wilayahValue}
        //   onSelectionChange={setWilayahValue}
        className="max-w-xs font-pt-sans mr-5"
      >
        {(time) => (
          <SelectItem key={time.key} value={time.key}>
            {time.label}
          </SelectItem>
        )}
      </Select>
      <Divider className="my-4" />
      <TableComponent
        columns={customColumns}
        data={prakiraanCuaca}
        statusOptions={[]}
        initialVisibleColumns={initialVisibleColumns}
      />
    </div>
  );
};

export default PrakiraanCuacaBandara;
