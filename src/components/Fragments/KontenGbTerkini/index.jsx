import TblGbTerkini from "../../Elements/TblGbTerkini";

const KontenGbTerkini = () => {

    return (
        <div className="flex flex-col">
            <p className='text-3xl font-bold text-active h-16'>Gempa Bumi Terkini</p>
            <p className=''>
                Gempa bumi terkini merupakan informasi gempabumi yang{' '}
                <span className='font-bold' style={{ display: 'inline-block' }}>
                    didiseminasikan dalam waktu kurang dari 5 menit
                </span> {' '}
                setelah kejadian gempa. Informasi ini merupakan informasi gempabumi secara cepat dan tidak ada pemutakhiran parameter gempabumi. Parameter gempabumi yang final bisa jadi berbeda.
            </p>
            <TblGbTerkini />
        </div>
    );
}

export default KontenGbTerkini;