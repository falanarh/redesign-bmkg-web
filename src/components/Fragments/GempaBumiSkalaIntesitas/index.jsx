import EarthquakeTable from "../../Elements/EarthquakeTable";

const GBSkalaIntesitas = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active ">Struktur Organisasi</p>
            <p className="mt-4 text-[14px]">
                Gambar berikut adalah struktur organisasi Badan Meteorologi, Klimatologi, dan Geofisika.
            </p>
            <EarthquakeTable />
        </div>
    );
};

export default GBSkalaIntesitas;