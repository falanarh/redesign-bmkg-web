/* eslint-disable react/no-unescaped-entities */
import ContentSection from "../../Layouts/ContentSection";

const GasRumahKaca = () => {
  return (
    <ContentSection
      title="Informasi Gas Rumah Kaca"
      description={
        <div>
          <p className="mb-2">
            Sejak tahun 2004, Badan Meteorologi Klimatologi dan Geofisika (BMKG)
            telah melakukan pengukuran gas rumah kaca di stasiun{" "}
            <span className="italic">Global Atmosphere Watch (GAW)</span> yang
            berlokasi di Bukit Kototabang Sumatra Barat, terletak pada 0.20 LS
            100.32 BT dengan ketinggian 864.5 m dpl. Pengukuran konsentrasi gas
            rumah kaca menggunakan peralatan otomatis{" "}
            <span className="italic">(direct method)</span> dan peralatan manual{" "}
            <span className="italic">(sampling method)</span>. Peralatan
            otomatis menggunakan{" "}
            <span className="italic">Analizer Picarro G2401</span> dengan metoda
            <span className="italic">
              {" "}
              Cavity Ring-Down Spectroscopy (CRDS)
            </span>
            . Peralatan manual menggunakan "Air Kit Flask Sampling" dan sampel
            tersebut dikirim ke laboratorium NOAA - USA untuk di analisis.
          </p>
          <p>
            Grafik tren konsentrasi GRK di Stasiun GAW-Bukit Kototabang dapat
            dilihat di bawah ini:
          </p>
        </div>
      }
    >
      <h2 className="text-[16px] font-pt-sans-caption font-bold mb-6">
        Tren Konsentrasi Gas Rumah Kaca Hasil Pengukuran di Bukit Kototabang dan
        Perbandingan dengan tren konsentrasi GRK Global
      </h2>
      <h3 className="text-[16px] font-pt-sans font-bold italic text-center my-2">
        Grafik Konsentrasi CO<sub>2</sub>
      </h3>
      <img
        className="mb-10"
        src="https://cdn.bmkg.go.id/Web/co2_apr_timeseries_bkt.png"
        alt="Grafik CO2"
      />
      <h3 className="text-[16px] font-pt-sans font-bold italic text-center my-2">
        Grafik Konsentrasi CH<sub>4</sub>
      </h3>
      <img
        className="mb-10"
        src="https://cdn.bmkg.go.id/Web/ch4_apr_timeseries_bkt.png"
        alt="Grafik CH4"
      />
      <h3 className="text-[16px] font-pt-sans font-bold italic text-center my-2">
        Grafik Konsentrasi N<sub>2</sub>O
      </h3>
      <img
        className="mb-10"
        src="https://cdn.bmkg.go.id/Web/n2o_apr_timeseries_bkt.png"
        alt="Grafik N2O"
      />
      <h3 className="text-[16px] font-pt-sans font-bold italic text-center my-2">
        Grafik Konsentrasi SF<sub>6</sub>
      </h3>
      <img
        className="mb-10"
        src="https://cdn.bmkg.go.id/Web/sf6_apr_timeseries_bkt.png"
        alt="Grafik SF6"
      />
    </ContentSection>
  );
};

export default GasRumahKaca;
