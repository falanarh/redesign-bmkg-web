import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataBerita } from "../ProfilBerita/data"; 
import { dataSiaranPers } from "../ProfilSiaranPers/data"; 
import { FaCalendarDays, FaPen } from "react-icons/fa6";

const Artikel = () => {
  const { id } = useParams();
  const item = dataBerita.find((article) => article.id === id) || dataSiaranPers.find((article) => article.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return <div className="py-10 text-center">Artikel tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto font-pt-sans">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl text-active">{item.title}</h1>
      <div className="flex items-start gap-4 mb-6 text-sm md:flex-row md:items-center text-graytext md:text-base">
        <p className="flex items-center gap-2">
          <FaCalendarDays />
          {item.tgl}
        </p>
        <p className="flex items-center gap-2">
          <FaPen /> {item.penulis}
        </p>
      </div>
      <img src={item.image} alt={`image-${item.id}`} className="object-cover w-full mb-6 rounded-lg" />
      <div className="mb-6 space-y-4">
        {item.paragraf?.map((paragraph, index) => {
          // Combine the first and second paragraphs
          if (index === 0 && item.paragraf.length > 1) {
            return (
              <p key={index} className="text-base leading-relaxed md:text-lg">
                <span className="font-bold">{paragraph}</span> {item.paragraf[1]}
              </p>
            );
          }

          // Skip the second paragraph because it's combined with the first
          if (index === 1) {
            return null;
          }

          // Display other paragraphs as usual
          return (
            <p key={index} className="text-base leading-relaxed md:text-lg">
              {paragraph}
            </p>
          );
        })}
      </div>
      {item.dokumentasi && (
        <>
          <h2 className="mb-4 text-2xl font-bold text-center text-active">Dokumentasi</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {item.dokumentasi.map((doc, index) => (
              <img src={doc} key={index} className="object-cover w-full h-auto rounded-lg" alt="" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Artikel;
