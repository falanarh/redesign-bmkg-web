import React from "react";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import { wilayahCitraRadar } from "./data";

const Wilayah = () => {
  const [locationValue, setLocationValue] = React.useState(new Set());
  const selectedLocation = Array.from(locationValue).join("");

  const selectedData = wilayahCitraRadar.find(
    (location) => location.key === selectedLocation
  );

  return (
    <div>
      <Select
        items={wilayahCitraRadar}
        label="Wilayah Citra Radar"
        placeholder="Pilih Wilayah Citra Radar"
        showScrollIndicators={true}
        selectedKeys={locationValue}
        onSelectionChange={setLocationValue}
        className="max-w-xs font-pt-sans mr-5"
      >
        {(location) => (
          <SelectItem key={location.key} value={location.key}>
            {location.nama}
          </SelectItem>
        )}
      </Select>
      {selectedLocation ? (
        selectedData ? (
          <>
            <Divider className="mt-6" />
            <h1 className="text-xl font-pt-sans font-bold italic ml-2 text-active text-center my-3">
              Citra Radar - {selectedData?.nama}
            </h1>
            <Divider className="mb-3" />
            <img
              src={selectedData?.image}
              alt={`citra-radar-${selectedData?.key}`}
            />
          </>
        ) : (
          <p className="text-base font-pt-sans font-bold italic">
            Data ditemukan
          </p>
        )
      ) : (
        <p className="text-base font-pt-sans font-bold italic text-center mt-[15%]">
          Gambar akan keluar setelah memilih wilayah citra satelit.
        </p>
      )}
    </div>
  );
};

export default Wilayah;
