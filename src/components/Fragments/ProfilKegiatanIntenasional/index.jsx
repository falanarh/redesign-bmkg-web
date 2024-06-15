import { data } from './data';
import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from '../../Layouts/ContentSection';
import { Route, Router, Routes } from 'react-router-dom';
import Artikel from '../Artikel';

const ProfilKegiatanInternasional = () => {
    return (
        <ContentSection title="Kegiatan Internasional">
            <div className="flex flex-col gap-6 mt-6">
                {data.map((item, index) => (
                    <>
                        <CustomCardLink
                            key={index}
                            item={item}
                            width={935}
                        />
                        <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional/artikel-1" element={<Artikel item={item} />} />
                    </>
                ))}
            </div>
        </ContentSection>
    );
};

export default ProfilKegiatanInternasional;
