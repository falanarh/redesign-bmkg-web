/* eslint-disable react/prop-types */
const Section = ({ title, subtitle, children }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-5">
      <div className="mb-10">
        <h2 className="text-3xl text-center text-active font-bold">{title}</h2>
        {subtitle && <h3 className="text-[18px] text-center text-slate-700">{subtitle}</h3>}
      </div>
      <div className="content max-w-[1280px] w-full pl-10 pr-6">
        {children}
      </div>
    </div>
  );
};

export default Section;
