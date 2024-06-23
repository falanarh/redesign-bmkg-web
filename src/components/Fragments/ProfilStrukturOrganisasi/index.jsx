import ContentSection from "../../Layouts/ContentSection";

const ProfilStrukturOrganisasi = () => {
  return (
    <ContentSection
      title="Struktur Organisasi"
      description={
        <p className="text-[14px]">
          Gambar berikut adalah struktur organisasi Badan Meteorologi,
          Klimatologi, dan Geofisika.
        </p>
      }
    >
      <div className="flex items-center justify-center sm:mb-16 sm:mt-6">
        <img
          // style={{ width: 1028, height: 709, marginLeft: 100 }}
          src="https://cdn.bmkg.go.id/Web/Struktur.jpg"
          alt="Struktur Organisasi"
          className="w-full h-auto ml-8 sm:ml-16"
        />
      </div>
    </ContentSection>
  );
};

export default ProfilStrukturOrganisasi;
