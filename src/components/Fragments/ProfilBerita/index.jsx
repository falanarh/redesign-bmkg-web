import React, { useState, useEffect } from 'react';
import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from "../../Layouts/ContentSection";
import { dataBerita } from "./data";

const ProfilBerita = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentSection title="Berita">
      <div className="flex flex-col gap-6 mb-6">
        {dataBerita.map((item, index) => (
          <CustomCardLink
            key={index}
            item={item}
            width="100%" // Make width 100% for responsiveness
            loading={loading} // Pass loading state
          />
        ))}
      </div>
    </ContentSection>
  );
};

export default ProfilBerita;
