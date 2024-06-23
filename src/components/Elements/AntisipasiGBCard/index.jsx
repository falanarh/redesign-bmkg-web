/* eslint-disable react/prop-types */

const AntsipasiGBCard = ({ item }) => {
    return (
        <div className="flex gap-10 relative" >
            <img className="m-5" src={item.image} alt={item.title} />
            <div className="flex flex-col gap-1">
                <p className="font-bold text-[16px] text-active mb-2">{item.title}</p>
                {item.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
            <div className="size-12 absolute bg-active rounded-full flex  justify-center items-center ">

                <p className="text-white font-bold text-xl">{item.id}</p>
            </div>
        </div>
    );
}
export default AntsipasiGBCard;