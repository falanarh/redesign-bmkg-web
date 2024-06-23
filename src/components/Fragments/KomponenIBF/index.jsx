/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import VennDiagram from "../../../assets/images/risk-hazard-vulnerability-exposure.png";
import Table from "../../../assets/images/warning-level-Impact-based-forecast.png";

const KomponenIBF = ({isMobile}) => {
  console.log(isMobile);
  return (
    <div className="flex flex-col">
      <div className={`flex w-full ${isMobile ? "flex-col" : "flex-row"}`}>
        <img src={VennDiagram} className={`${isMobile ? "w-[60%]" : "w-[200px]"} ${isMobile ? "h-auto" : "h-[150px]"} ${isMobile ? "mx-auto" : "mx-0"} ${isMobile ? "" : "mr-10"} ${isMobile ? "my-5" : ""}`}></img>
        <div className="flex flex-col">
          <p className="mb-5">
            Komponen penting dalam sistem IBF adalah risk (risiko), yang
            merupakan irisan antara hazard (bahaya), exposure (keterpaparan),
            dan vulnerability (kerentanan). Besarnya risiko sangat bergantung
            pada besarnya hubungan ketiga komponen tersebut yaitu semakin erat
            hubungan hazard, exposure, dan vulnerability, maka risk akan semakin
            besar, dan sebaliknya.
          </p>
          <p>
            Dalam sistem IBF, risiko dibuat dalam bentuk matriks (risk matrix)
            untuk menentukan warning level. Berdasarkan matriks ini, warning
            level dibuat dengan mempertimbangkan besar kemungkinan (likelihood)
            dan dampak (impact).
          </p>
        </div>
      </div>

      <div className={`flex w-full mt-8 ${isMobile ? "flex-col" : "flex-row"}`}>
        <img src={Table} className={`${isMobile ? "w-[60%]" : "w-[165px]"} ${isMobile ? "h-auto" : "h-[150px]"} ${isMobile ? "mx-auto" : "mx-0"} ${isMobile ? "" : "mr-10"} ${isMobile ? "my-5" : ""}`}></img>
        <div className="flex flex-col justify-between">
          <p className="mb-5">
            Tingkatannya (warning level) terdiri dari sangat rendah (very
            low/minimal), rendah (low/minor), medium (significant), dan tinggi
            (high/severe). Matriks tersebut diberi warna berdasarkan tingkat
            urgensi risiko, yaitu hijau, kuning, oranye, dan merah. Peringatan
            yang dikeluarkan berisi dampak yang mungkin akan ditimbulkan
            berdasarkan warning level dan disesuaikan dengan warna pada matriks.
          </p>
          <p>
            Prakiraan berbasis dampak ini sangat bermanfaat untuk mengurangi
            dampak risiko bencana hidrometeorologi dalam perencanaan suatu
            kegiatan di semua sektor. Sistem IBF ini merupakan wujud BMKG dalam
            mengimplementasikan amanah WMO (WMO Guidelines on Multi-hazard
            Impact-based Forecast and Warning Services, 2015), UN Hyogo
            Framework for Action 2005-2015, dan UN Sendai Framework for Disaster
            Risk Reduction 2015-2030.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KomponenIBF;
