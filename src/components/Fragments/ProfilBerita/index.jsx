import { data } from './data';
import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from '../../Layouts/ContentSection';

const ProfilBerita = () => {
    return (
        <ContentSection title="Berita">
            <div className="flex flex-col gap-6 mb-6">
                {data.map((item, index) => (
                    <>
                        <CustomCardLink
                            key={index}
                            item={item}
                            width={935}
                        />
                    </>
                ))}
            </div>
        </ContentSection>
    );
};

export default ProfilBerita;
