import React from 'react';

const EarthquakeTable = () => {
    const data = [
        {
            scale: 'I',
            intensity: 'Tidak dirasakan',
            description: 'Tidak dirasakan atau dirasakan hanya oleh beberapa orang tetapi terekam oleh alat.',
            mmi: 'I-II',
            pga: '< 2.9',
            bgColor: 'bg-gray-200',
        },
        {
            scale: 'II',
            intensity: 'Dirasakan',
            description: 'Dirasakan oleh orang banyak tetapi tidak menimbulkan kerusakan. Benda-benda ringan yang digantung bergoyang dan jendela kaca bergetar.',
            mmi: 'III-V',
            pga: '2.9-88',
            bgColor: 'bg-green-200',
        },
        {
            scale: 'III',
            intensity: 'Kerusakan Ringan',
            description: 'Bagian non struktur bangunan mengalami kerusakan ringan, seperti retak rambut pada dinding, atap bergeser ke bawah dan sebagian berjatuhan.',
            mmi: 'VI',
            pga: '89-167',
            bgColor: 'bg-yellow-200',
        },
        {
            scale: 'IV',
            intensity: 'Kerusakan Sedang',
            description: 'Banyak Retakan terjadi pada dinding bangunan sederhana, sebagian roboh, kaca pecah. Sebagian plester dinding lepas. Hampir sebagian besar atap bergeser ke bawah atau jatuh. Struktur bangunan mengalami kerusakan ringan sampai sedang.',
            mmi: 'VII-VIII',
            pga: '168-564',
            bgColor: 'bg-yellow-400',
        },
        {
            scale: 'V',
            intensity: 'Kerusakan Berat',
            description: 'Sebagian besar dinding bangunan permanen roboh. Struktur bangunan mengalami kerusakan berat. Rel kereta api melengkung.',
            mmi: 'IX-XII',
            pga: '>564',
            bgColor: 'bg-red-500',
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skala SIG</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intensitas</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skala MMI</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PGA(gal)</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index} className={row.bgColor}>
                            <td className="px-6 py-4 whitespace-nowrap text-center font-bold">{row.scale}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.intensity}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.mmi}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.pga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EarthquakeTable;
