import BerandaAtas from "../components/Fragments/BerandaAtas";
import BerandaBawah from "../components/Fragments/BerandaBawah";

export default function Beranda() {

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <BerandaAtas />
            <BerandaBawah />
        </div>
    );
}