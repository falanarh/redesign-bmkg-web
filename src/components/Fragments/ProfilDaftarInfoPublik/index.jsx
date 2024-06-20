import ContentSection from "../../Layouts/ContentSection";

// eslint-disable-next-line no-unused-vars
const ProfilDaftarInfoPublik = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1L-1uCaO7cGUpbVRha5igP-ZlsS7xymay/preview"; // Ganti dengan URL PDF yang sebenarnya

  return (
    <ContentSection
      title="Daftar Informasi Publik"
      description={
        <p className="mt-4 text-[14px]">
          Daftar informasi publik dapat dilihat di bawah ini:
        </p>
      }
    >
    <iframe
    className='w-full mt-4'
    src={pdfUrl}
    height="500px"
    style={{ border: 'none'}}
    allowFullScreen
    title="PDF Viewer"
/>
    </ContentSection>
  );
};

export default ProfilDaftarInfoPublik;
