/* eslint-disable react/prop-types */
import React from "react";

const ContentSection = ({ title, description = "", children }) => {
  const renderDescription = () => {
    if (React.isValidElement(description)) {
      return description;
    }

    return <p className="text-[14px] font-pt-sans">{description}</p>;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-pt-sans-caption font-bold text-active mb-3">
        {title}
      </h1>
      {renderDescription()}
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default ContentSection;