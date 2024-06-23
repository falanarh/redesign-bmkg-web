import ContentSection from "../../Layouts/ContentSection";

const data = [
  {
    scale: "I",
    intensity: "Tidak dirasakan",
    description:
      "Tidak dirasakan atau dirasakan hanya oleh beberapa orang tetapi terekam oleh alat.",
    mmi: "I-II",
    pga: "< 2.9",
    color: "bg-gray-200",
  },
  {
    scale: "II",
    intensity: "Dirasakan",
    description:
      "Dirasakan oleh orang banyak tetapi tidak menimbulkan kerusakan. Benda-benda ringan yang digantung bergoyang dan jendela kaca bergetar.",
    mmi: "III-V",
    pga: "2.9-88",
    color: "bg-green-300",
  },
  {
    scale: "III",
    intensity: "Kerusakan Ringan",
    description:
      "Bagian non struktur bangunan mengalami kerusakan ringan, seperti retak rambut pada dinding, atap bergeser ke bawah dan sebagian berjatuhan.",
    mmi: "VI",
    pga: "89-167",
    color: "bg-yellow-300",
  },
  {
    scale: "IV",
    intensity: "Kerusakan Sedang",
    description:
      "Banyak retakan terjadi pada dinding bangunan sederhana, sebagian roboh, kaca pecah. Sebagian plester dinding lepas. Hampir sebagian besar atap bergeser ke bawah atau jatuh. Struktur bangunan mengalami kerusakan ringan sampai sedang.",
    mmi: "VII-VIII",
    pga: "168-564",
    color: "bg-yellow-500",
  },
  {
    scale: "V",
    intensity: "Kerusakan Berat",
    description:
      "Sebagian besar dinding bangunan permanen roboh. Struktur bangunan mengalami kerusakan berat. Rel kereta api melengkung.",
    mmi: "IX-XII",
    pga: ">564",
    color: "bg-red-500",
  },
];

const EarthquakeScaleTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="text-white bg-active">
          <tr>
            <th className="p-2 text-left">Skala SIG</th>
            <th className="p-2 text-left">Intensitas</th>
            <th className="p-2 text-left">Deskripsi</th>
            <th className="p-2 text-left">Skala MMI</th>
            <th className="p-2 text-left">PGA(gal)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.color}>
              <td className="p-2 text-center">{row.scale}</td>
              <td className="p-2 text-center">{row.intensity}</td>
              <td className="p-2">{row.description}</td>
              <td className="p-2 text-center">{row.mmi}</td>
              <td className="p-2 text-center">{row.pga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const GBSkalaIntesitas = () => {
  return (
    <ContentSection
      title="Gempa Bumi Skala Intensitas"
      description="Skala Intensitas Gempabumi (SIG-BMKG) menyatakan dampak yang ditimbulkan akibat terjadinya gempabumi. SIG-BMKG digagas dan disusun dengan mengakomodir keterangan dampak gempabumi berdasarkan tipikal budaya atau bangunan di Indonesia. Skala ini disusun lebih sederhana dengan hanya memiliki lima tingkatan yaitu I-V. SIG-BMKG diharapkan bermanfaat untuk digunakan dalam penyampaian informasi terkait mitigasi gempabumi dan atau respon cepat pada kejadian gempabumi merusak. Skala ini dapat memberikan kemudahan kepada masyarakat untuk dapat memahami tingkatan dampak yang terjadi akibat gempabumi dengan lebih baik dan akurat."
    >
      <EarthquakeScaleTable />
    </ContentSection>
  );
};

export default GBSkalaIntesitas;
