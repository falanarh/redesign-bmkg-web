import { data } from './data';
import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from '../../Layouts/ContentSection';

const ProfilArtikel = () => {
    return (
        <ContentSection title="Artikel">
            <div className="flex flex-col gap-6 mb-6">
                {data.map((item, index) => (
                    console.log(item),
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

export default ProfilArtikel;
