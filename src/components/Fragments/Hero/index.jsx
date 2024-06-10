import HeroBMKG from "../../../assets/images/hero_bmkg.gif";

const Hero = () => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <img src={HeroBMKG} className="size-[400px]" alt="Hero BMKG"></img>
        </div>
    );
}

export default Hero;