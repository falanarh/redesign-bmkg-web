const ProfilStrukturOrganisasi = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active ">Struktur Organisasi</p>
            <p className="mt-4 text-[14px]">
                Gambar berikut adalah struktur organisasi Badan Meteorologi, Klimatologi, dan Geofisika.
            </p>
            <div className='flex justify-center items-center mt-6'>
                <img style={{ width: 1028, height: 709, marginLeft: 100 }} src='https://cdn.bmkg.go.id/Web/Struktur.jpg' alt="Struktur Organisasi" />
            </div>
        </div>
    );
};

export default ProfilStrukturOrganisasi;