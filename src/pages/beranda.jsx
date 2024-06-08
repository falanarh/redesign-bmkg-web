import BerandaAtas from "../components/Fragments/BerandaAtas";
import BerandaBawah from "../components/Fragments/BerandaBawah";
import BerandaTengah from "../components/Fragments/BerandaTengah";

export default function Beranda() {

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <BerandaAtas />
            <BerandaTengah />
            <BerandaBawah />
        </div>
    );
}