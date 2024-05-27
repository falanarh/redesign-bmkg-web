import { Carousel } from "antd";

const contentStyle = {
  height: "120px",
  color: "#fff",
  lineHeight: "25px",
  textAlign: "center",
  background: "#fb923c",
};

const EarlyWarning = () => {
  return (
    <Carousel autoplay>
      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-center items-start p-5"
        >
          <div className="flex">
            <p className="font-bold text-black mr-2">Peringatan dini: </p>
            <p className="font-bold">Selasa, 12 Mei 2024 | Surabaya</p>
          </div>
          <p className="text-base">
            Diprakirakan berpotensi hujan yang dapat disertai guntur dan angin
            kencang di wilayah Buton, Buton Tengah, Kendari, Kolaka, Konawe
            Utara, Konawe Selatan, Konawe, Kolaka Timur dan Kolaka Utara.
          </p>
        </div>
      </div>

      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-center items-start p-5"
        >
          <div className="flex">
            <p className="font-bold text-black mr-2">
              Peringatan dini gempa bumi:{" "}
            </p>
            <p className="font-bold">Tuesday, May 12, 2024 | Surabaya</p>
          </div>
          <p className="text-base">
            Diprakirakan terjadi gempa bumi dengan magnitudo 7.0 di wilayah
            sekitar Pulau Jawa. Masyarakat diimbau untuk tetap tenang dan
            waspada.
          </p>
        </div>
      </div>

      <div>
        <div
          style={contentStyle}
          className="flex flex-col justify-center items-start p-5"
        >
          <div className="flex">
            <p className="font-bold text-black mr-2">
              Peringatan dini banjir:{" "}
            </p>
            <p className="font-bold">Tuesday, May 12, 2024 | Surabaya</p>
          </div>
          <p className="text-base">
            Diprakirakan terjadi banjir di sebagian wilayah Surabaya. Masyarakat
            diimbau untuk menghindari daerah yang rawan banjir dan mengikuti
            petunjuk dari otoritas setempat.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default EarlyWarning;
