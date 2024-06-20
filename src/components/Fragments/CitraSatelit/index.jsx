/* eslint-disable react/prop-types */
import ContentSection from "../../Layouts/ContentSection";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { FaChevronCircleRight, FaSearch } from "react-icons/fa";
import { citraSatelitList, locations } from "./Data";
import React, { useEffect, useState } from "react";

function getLocationsWithKey(key) {
  return locations.filter((location) => key in location);
}

const CitraSatelitCard = ({
  width,
  height,
  image,
  id,
  title,
  description,
  children,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [locationValue, setLocationValue] = React.useState(new Set());
  const filteredLocations = getLocationsWithKey(id);

  const selectedLocation = Array.from(locationValue).join("");

  const selectedData = filteredLocations.find(
    (location) => location.key === selectedLocation
  );

  console.log("ID:", id);
  console.log("Filtered Locations:", filteredLocations);
  console.log("Selected Data:", selectedData);

  // useEffect(() => {
  //   if (filteredLocations.length > 0 && !locationValue) {
  //     setLocationValue(filteredLocations[0].key);
  //   }
  // }, [filteredLocations, locationValue]);

  return (
    <>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          padding: "24px",
          borderRadius: "10px",
          border: "1px solid rgba(204, 204, 204, 0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={image} alt={title} style={{ width: "100%" }} />
          <h2 className="my-3 text-base font-semibold font-pt-sans">{title}</h2>
          <p className="text-[14px] font-pt-sans">{description}</p>
        </div>
        <Button
          className="text-active text-[14px] font-pt-sans font-semibold hover:bg-active hover:text-white mt-3"
          endContent={<FaChevronCircleRight className="text-base" />}
          onPress={onOpen}
        >
          Selengkapnya
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        isDismissable={false}
        size="5xl"
        className="min-h-[85vh]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold font-pt-sans-caption">
                {title}
              </ModalHeader>
              <ModalBody>
                <Select
                  items={filteredLocations}
                  label="Wilayah citra satelit"
                  placeholder="Pilih wilayah citra satelit"
                  showScrollIndicators={true}
                  selectedKeys={locationValue}
                  onSelectionChange={setLocationValue}
                  className="max-w-xs mr-5 font-pt-sans"
                >
                  {(location) => (
                    <SelectItem key={location.key} value={location.key}>
                      {location.label}
                    </SelectItem>
                  )}
                </Select>
                {selectedLocation ? (
                  selectedData ? (
                    <>
                      <Divider className="mt-3" />
                      <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
                        {title} - {selectedData?.label}
                      </h1>
                      <Divider className="mb-3" />
                      <img
                        src={selectedData[id]}
                        alt={`${title}-${selectedData?.key}`}
                      />
                    </>
                  ) : (
                    <p className="text-base italic font-bold font-pt-sans">
                      Data ditemukan
                    </p>
                  )
                ) : (
                  <p className="text-base font-pt-sans font-bold italic mx-auto mt-[20%]">
                    Gambar akan keluar setelah memilih wilayah citra satelit.
                  </p>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const CitraSatelit = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSatelitList = citraSatelitList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ContentSection
      title="Citra Satelit"
      description="Halaman ini menyajikan berbagai produk citra satelit yang memberikan informasi penting mengenai kondisi cuaca dan atmosfer. Produk-produk ini membantu dalam pengamatan dan analisis cuaca yang akurat dan real-time."
    >
      <div className="flex flex-wrap gap-5">
        <Input
          label="Pencarian"
          radius="lg"
          classNames={{
            label:
              "text-black/50 dark:text-white/90 font-pt-sans-caption",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90 font-pt-sans",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "w-[50%]",
              "shadow-sm",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Ketikkan nama satelit..."
          startContent={<FaSearch className="text-base" />}
          size="md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredSatelitList.map((item) => (
          <CitraSatelitCard
            key={item.key}
            id={item.key}
            width={300}
            height={620}
            image={item.image}
            title={item.title}
            description={item.description}
          ></CitraSatelitCard>
        ))}
      </div>
    </ContentSection>
  );
};

export default CitraSatelit;
