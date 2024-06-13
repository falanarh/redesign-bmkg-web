import { Select, SelectItem } from "@nextui-org/react";
import { provinces, times, daftarDataPrakiraan } from "./data";
import React from "react";

const PrakiraanDampakDaerah = () => {
  const [wilayahValue, setWilayahValue] = React.useState(new Set());
  const [waktuValue, setWaktuValue] = React.useState(new Set());

  // Konversi Set menjadi string
  const selectedWilayah = Array.from(wilayahValue).join("");
  const selectedWaktu = Array.from(waktuValue).join("");
  const selectedKey = `${selectedWilayah}+${selectedWaktu}`;

  // Debugging logs
  console.log("Wilayah Value:", selectedWilayah);
  console.log("Waktu Value:", selectedWaktu);
  console.log("Selected Key:", selectedKey);

  const selectedProvince = provinces.find(
    (province) => province.key === selectedWilayah
  );

  const selectedTime = times.find((time) => time.key === selectedWaktu);

  const selectedData = daftarDataPrakiraan.find(
    (data) => data.key === selectedKey
  );

  // Log hasil pencarian
  console.log("Selected Data:", selectedData);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Select
          items={provinces}
          label="Wilayah Provinsi"
          placeholder="Pilih Wilayah Provinsi"
          showScrollIndicators={true}
          selectedKeys={wilayahValue}
          onSelectionChange={setWilayahValue}
          className="max-w-xs font-pt-sans mr-5"
        >
          {(province) => (
            <SelectItem key={province.key} value={province.key}>
              {province.label}
            </SelectItem>
          )}
        </Select>
        <Select
          items={times}
          label="Waktu"
          placeholder="Pilih Waktu"
          showScrollIndicators={true}
          selectedKeys={waktuValue}
          onSelectionChange={setWaktuValue}
          className="max-w-xs font-pt-sans"
        >
          {(time) => (
            <SelectItem key={time.key} value={time.key}>
              {time.label}
            </SelectItem>
          )}
        </Select>
      </div>
      {selectedWilayah && selectedWaktu ? (
        selectedData ? (
          <div className="flex flex-col items-center mt-10">
            <p className="text-xl font-pt-sans-caption font-semibold italic">
              Wilayah {selectedProvince?.label} pada {selectedTime?.label}
            </p>
            <img
              key={selectedData.key}
              src={selectedData.src}
              alt={selectedData.key}
              className="mt-6 rounded-2xl"
            />
          </div>
        ) : (
          <p className="mt-6 font-pt-sans-caption font-bold">
            Data tidak ditemukan
          </p>
        )
      ) : null}
    </div>
  );
};

export default PrakiraanDampakDaerah;
