/* eslint-disable react/prop-types */
import React from "react";

const ContentSection = ({ title, description = "", children }) => {
  const renderDescription = () => {
    if (React.isValidElement(description)) {
      return description;
    }

    return <p className="text-[14px] font-pt-sans">{description}</p>;
  };

  const renderTitle = () => {
    if (React.isValidElement(title)) {
      return title;
    }

    return <span className="mb-3 text-2xl font-bold font-pt-sans-caption text-active">{title}</span>;
  };

  return (
    <div className="flex flex-col min-h-screen mb-16 font-pt-sans">
      {renderTitle()}
      {renderDescription()}
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default ContentSection;