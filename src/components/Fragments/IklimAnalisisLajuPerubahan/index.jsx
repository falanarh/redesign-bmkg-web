import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { jenis } from "./data";
import AnalisisLajuPerubahanCurahHujan from "../AnalisisLajuCurah";
import AnalisisLajuPerubahanSuhuUdara from "../AnalisisLajuSuhu";


const AnalisisLajuPerubahan = () => {
    const [jenisValue, setJenisValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedJenis = Array.from(jenisValue).join("");
    const selectedKey = `${selectedJenis}`;

    // Debugging logs
    console.log("Jenis Value:", selectedJenis);
    console.log("Selected Key:", selectedKey);

    return (
        <ContentSection title="Analisis Laju Perubahan">
            <div className="flex">
                <Select
                    items={jenis}
                    label="Jenis"
                    placeholder="Pilih Jenis Analisis"
                    showScrollIndicators={true}
                    selectedKeys={jenisValue}
                    onSelectionChange={setJenisValue}
                    className="max-w-xs font-pt-sans mr-5"
                >
                    {(jenis) => (
                        <SelectItem key={jenis.key} value={jenis.key}>
                            {jenis.label}
                        </SelectItem>
                    )}
                </Select>
            </div>
            {selectedJenis === 'curah' ? (
                <AnalisisLajuPerubahanCurahHujan />
            ) : selectedJenis === 'suhu' ? (
                <AnalisisLajuPerubahanSuhuUdara />
            ) : (
                <p className="text-base font-pt-sans font-bold italic my-10">Silakan pilih jenis analisis yang diinginkan.</p>
            )}

        </ContentSection>
    );
};

export default AnalisisLajuPerubahan;