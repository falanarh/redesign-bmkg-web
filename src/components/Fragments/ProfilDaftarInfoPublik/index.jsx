// eslint-disable-next-line no-unused-vars
import { Card } from 'antd';
// import React from 'react';

const ProfilDaftarInfoPublik = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1L-1uCaO7cGUpbVRha5igP-ZlsS7xymay/preview'; // Ganti dengan URL PDF yang sebenarnya

    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active">Daftar Informasi Publik</p>
            {/* <Card className='mt-7' style={{ borderRadius: '15px' }}> */}
                <p className="mt-4 text-[14px]">
                    Daftar informasi publik dapat dilihat di bawah ini:
                </p>
                <iframe 
                    className='mt-4 w-full'
                    src={pdfUrl}
                    height="500px"
                    style={{ border: 'none'}}
                    allowFullScreen
                    title="PDF Viewer"
                />
            {/* </Card> */}

        </div>
    );
};

export default ProfilDaftarInfoPublik;
