import { useParams } from "react-router-dom";
import { data } from "../ProfilArtikel/data.js"; // pastikan Anda menyesuaikan jalur impor sesuai dengan struktur proyek Anda
import { FaCalendarDays, FaPen } from "react-icons/fa6";

const Artikel = () => {
  const { id } = useParams();
  const item = data.find((article) => article.id === parseInt(id));
  console.log(item);

  if (!item) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col font-pt-sans">
      <h1 className="text-2xl font-bold text-active">{item.title}</h1>
      <div className="flex items-center gap-2 mt-4 mb-6">
        <p className="flex items-center gap-2 text-[14px] text-graytext">
          <FaCalendarDays />
          {item.tgl}
        </p>
        <p className="flex items-center gap-2 text-[14px] text-graytext">
          <FaPen /> {item.penulis}
        </p>
      </div>
      <img src={item.image} alt={`image-${item.id}`} className="mb-5"/>
      {item.paragraf?.map((paragraph, index) => {
  // Gabungkan paragraf pertama dan kedua
  if (index === 0 && item.paragraf.length > 1) {
    return (
      <p key={index} className="mb-3">
        <span className="font-bold">{paragraph}</span> {item.paragraf[1]}
      </p>
    );
  }

  // Lewatkan paragraf kedua karena sudah digabungkan dengan yang pertama
  if (index === 1) {
    return null;
  }

  // Tampilkan paragraf lainnya seperti biasa
  return (
    <p key={index} className="mb-3">
      {paragraph}
    </p>
  );
})}

      {item.dokumentasi && (
        <>
          <h2 className="text-[18px] font-bold text-center mb-3 text-active font-pt-sans-caption">Dokumentasi</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {item.dokumentasi.map((doc, index) => (
              <img src={doc} key={index} className="" alt="" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Artikel;
