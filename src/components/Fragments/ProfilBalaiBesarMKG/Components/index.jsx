import { Select, SelectItem } from "@nextui-org/react";
import { locations } from "../Data/data";
import React from "react";

function getLocationsWithKey(key) {
    return locations.filter(location => key in location);
}

const Himawari_9_IR_Enhanced = () => {
  const [locationValue, setLocationValue] = React.useState(new Set());
  const filteredLocations = getLocationsWithKey("himawari_9_ir_enhanced");

  // Debugging logs
  console.log("Locations:", filteredLocations);

  return (
    <div className="flex flex-col">
      <Select
        items={filteredLocations}
        label="Wilayah Provinsi"
        placeholder="Pilih Wilayah Provinsi"
        showScrollIndicators={true}
        selectedKeys={locationValue}
        onSelectionChange={setLocationValue}
        className="max-w-xs font-pt-sans mr-5"
      >
        {(location) => (
          <SelectItem key={location.key} value={location.key}>
            {location.label}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

export default Himawari_9_IR_Enhanced;
