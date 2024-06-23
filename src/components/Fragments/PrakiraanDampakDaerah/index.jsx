import { Divider, Select, SelectItem } from "@nextui-org/react";
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
      <div className="flex flex-col items-center w-full gap-3 sm:flex-row sm:gap-0">
        <Select
          items={provinces}
          label="Wilayah Provinsi"
          placeholder="Pilih Wilayah Provinsi"
          showScrollIndicators={true}
          selectedKeys={wilayahValue}
          onSelectionChange={setWilayahValue}
          className="max-w-xs sm:mr-5 font-pt-sans"
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
          <div className="flex flex-col items-center mt-7">
            <Divider className="mt-3" />
            <h1 className="my-3 text-xl italic font-semibold font-pt-sans-caption">
              Wilayah {selectedProvince?.label} pada {selectedTime?.label}
            </h1>
            <Divider className="mb-3" />
            <img
              key={selectedData.key}
              src={selectedData.src}
              alt={selectedData.key}
              className="mt-3"
            />
          </div>
        ) : (
          <p className="my-10 text-base italic font-bold font-pt-sans">
            Data tidak ditemukan
          </p>
        )
      ) : (
        <p className="mx-auto mt-[10vh] text-base italic font-bold font-pt-sans">
          Gambar akan keluar setelah memilih wilayah dan waktu.
        </p>
      )}
    </div>
  );
};

export default PrakiraanDampakDaerah;
