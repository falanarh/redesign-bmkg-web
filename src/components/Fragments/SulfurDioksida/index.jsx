/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";

const SulfurDioksida = () => {
  return (
    <ContentSection
      title="Monitoring Sulfur Dioksida (SO2) (Mei 2024)"
      description={
        <div>
          <p className="mb-2">
            Pemantauan Sulfur Dioksida (SO2) di wilayah DKI-Jakarta dilakukan di
            9 (sembilan) lokasi yaitu: Ancol, Bandengan (Delta), Bivak, Glodok,
            Grogol, Kemayoran, Kementan, TMII, dan Monas. Di wilayah Sumatera
            Barat dan Kalimantan dilakukan di masing-masing 1 (satu) lokasi
            yaitu : Kototabang dan Siantan.
          </p>
          <p className="mb-2">
            Pengukuran kadar SO2 dilakukan dengan metode passive gas menggunakan
            alat passive sampler. Analisis sampel dilakukan di laboratorium
            kualitas udara BMKG, menggunakan alat ion chromatography.
          </p>
          <p>
            Hasil pengukuran kadar SO2 pada bulan ini dapat dilihat pada Grafik
            di bawah ini.
          </p>
        </div>
      }
    >
        
    </ContentSection>
  );
};

export default SulfurDioksida;
