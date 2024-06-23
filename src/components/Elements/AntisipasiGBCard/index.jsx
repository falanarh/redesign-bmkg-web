/* eslint-disable react/prop-types */
const AntisipasiGBCard = ({ item }) => {
    return (
        <div className="relative flex flex-col gap-4 md:flex-row md:gap-10">
            <img className="w-full m-5 md:w-auto" src={item.image} alt={item.title} />
            <div className="flex flex-col gap-1 p-5 md:p-0">
                <p className="font-bold text-[16px] text-active mb-2">{item.title}</p>
                {item.description.map((desc, index) => (
                    <p key={index} className="text-sm md:text-base">{desc}</p>
                ))}
            </div>
            <div className="absolute top-0 left-0 flex items-center justify-center m-5 rounded-full size-12 bg-active md:m-0">
                <p className="text-xl font-bold text-white">{item.id}</p>
            </div>
        </div>
    );
}
export default AntisipasiGBCard;
