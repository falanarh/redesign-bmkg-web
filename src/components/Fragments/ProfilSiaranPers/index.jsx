import { dataSiaranPers } from './data';
import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from '../../Layouts/ContentSection';

const ProfilSiaranPers = () => {
    return (
        <ContentSection title="Siaran Pers">
            <div className="flex flex-col gap-6 mb-6">
                {dataSiaranPers.map((item, index) => (
                    <CustomCardLink
                        key={index}
                        item={item}
                        width="100%" // Make width 100% for responsiveness
                    />
                ))}
            </div>
        </ContentSection>
    );
};

export default ProfilSiaranPers;

