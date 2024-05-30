import React from 'react';
import BMKGLogo from "../../../assets/images/bmkg_logo.png";
import AppStore from "../../../assets/images/app_store.png";
import GooglePlay from "../../../assets/images/google_play.png";
import LocationSign from "../../../assets/icons/Location.png";
import Telephone from "../../../assets/icons/Phone.png";
import Email from "../../../assets/icons/Envelope.png";
import Cloud from "../../../assets/icons/Rain Cloud.png";
import Air from "../../../assets/icons/Air.png";
import CEWS from "../../../assets/icons/Greenhouse Effect.png";
import ITEWS from "../../../assets/icons/Tsunami.png";
import DataOnline from "../../../assets/icons/Statistics.png";
import JDIH from "../../../assets/icons/Opened Folder.png";
import Inpektorat from "../../../assets/icons/Museum.png";
import STMKG from "../../../assets/icons/University Building.png";
import Library from "../../../assets/icons/Book Reading.png";
import Facebook from "../../../assets/icons/Facebook F.png";
import Twitter from "../../../assets/icons/Twitter.png";
import Instagram from "../../../assets/icons/Instagram.png";
import YouTube from "../../../assets/icons/YouTube.png";
import LiveChat from "../../../assets/images/button-image 1.png";


const SideFooter = () => {
  return (
    <footer>
      <div className="max-w-[1280px] px-10 py-7 bg-white text-black container grid grid-cols-5 gap-8" style={{ fontSize: '14px' }}>
        {/* Kolom Pertama */}
        <div>
          <div className="flex items-center mb-4">
            <img className="w-12 h-14 mr-4" src={BMKGLogo} alt="BMKG Logo" />
            <div>
              <h5 className="font-bold mb-2" style={{ fontSize: '14px' }}>BMKG</h5>
              <p style={{ fontSize: '12px' }}>Badan Meteorologi, Klimatologi, dan Geofisika</p>
            </div>
          </div>
          
          <div className="flex items-start mt-4">
            <img className="w-6 h-6 mr-2" src={LocationSign} alt="Location Icon" />
            <ul>
              <li><span className="font-bold">Kantor Pusat</span></li>
              <li>Jl. Angkasa I No.2 Kemayoran</li>
              <li>Jakarta Pusat, DKI Jakarta 10610</li>
              <li>PO Box 3540 Jkt.</li>
            </ul>
          </div>

          <div className="flex items-start mt-4">
            <img className="w-6 h-6 mr-2" src={Telephone} alt="Telephone Icon" />
            <ul>
              <li><span className="font-bold">Telepon & Fax</span></li>
              <li>Call Center (021) 196</li>
              <li>Fax (021) 4246703</li>
            </ul>
          </div>

          <div className="flex items-start mt-4">
            <img className="w-6 h-6 mr-2" src={Email} alt="Email Icon" />
            <ul>
              <li><span className="font-bold">Email</span></li>
              <li>cci196@bmkg.go.id</li>
            </ul>
          </div>
        </div>

        {/* Kolom Kedua */}
        <div>
          <h5 className="font-bold mb-2" style={{ fontSize: '14px' }}>Informasi BMKG</h5>
          <ul>
            
            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={Cloud} alt="Cloud Rainy Icon" />
              <ul>
                <li>Informasi Cuaca</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={Air} alt="Air Icon" />
              <ul>
                <li>Kualitas Udara</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={CEWS} alt="CEWS Icon" />
              <ul>
                <li>CEWS (Climate Early Warning System)</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={ITEWS} alt="ITEWS Icon" />
              <ul>
                <li>InaTEWS (Indonesia Tsunami Early Warning System)</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={DataOnline} alt="Data Online Icon" />
              <ul>
                <li>Data Online BMKG</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={JDIH} alt="JDIH Icon" />
              <ul>
                <li>JIDH BMKG</li>
              </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Ketiga */}
        <div>
          <ul>
            <div className="flex items-start mt-9">
                <img className="w-6 h-6 mr-2" src={Inpektorat} alt="Inspektorat BMKG Icon" />
                <ul>
                  <li>Inspektorat BMKG</li>
                </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={JDIH} alt="JDIH Icon" />
              <ul>
                <li>Pusdiklat BMKG</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={STMKG} alt="STMKG Icon" />
              <ul>
                <li>STMKG</li>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <img className="w-6 h-6 mr-2" src={Library} alt="Library Icon" />
              <ul>
                <li>E-Perpustakaan BMKG</li>
              </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Keempat */}
        <div>
          <h5 className="font-bold mb-2" style={{ fontSize: '14px' }}>Ikuti Kami</h5>
          <ul>
            <div className="flex items-start mt-4">
                <img className="w-6 h-6 mr-2" src={Facebook} alt="Facebook Icon" />
                <ul>
                  <li>www.bmkg.go.id</li>
                </ul>
            </div>

            <div className="flex items-start mt-4">
                <img className="w-6 h-6 mr-2" src={Twitter} alt="Twitter Icon" />
                <ul>
                  <li>infoBMKG</li>
                </ul>
            </div>

            <div className="flex items-start mt-4">
                <img className="w-6 h-6 mr-2" src={Instagram} alt="Instagram Icon" />
                <ul>
                  <li>infobmkg</li>
                </ul>
            </div>

            <div className="flex items-start mt-4">
                <img className="w-6 h-6 mr-2" src={YouTube} alt="Youtube Icon" />
                <ul>
                  <li>infoBMKGIndonesia</li>
                </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Kelima */}
        <div className="relative">
          <h5 className="font-bold mb-2" >Aplikasi Mobile</h5>
          <p className='text-blue-500' style={{ fontSize: '14px' }}>Info BMKG - Cuaca, Iklim, dan Gempabumi Indonesia</p>
          <p style={{ fontSize: '13px' }}>Semua informasi mengenai Prakiraan Cuaca, Iklim, Kualitas Udara, dan Gempabumi yang terjadi di berbagai wilayah di Indonesia tercakup dalam satu aplikasi mobile.</p>
          <div className="flex mt-2">
            <img className='w-[110px] h-[40px] mr-2' src={AppStore} alt="App Store" />
            <img className='w-[110px] h-[40px]' src={GooglePlay} alt="Google Play" />
          </div>
          <img className='w-[145px] h-[145px] absolute right-[-20px] bottom-[-55px]' src={LiveChat} alt="Live Chat Button" />
        </div>
      </div>
      
      {/* Hak Cipta dan Desain */}
      
      <div className="bg-blue-800 text-white text-center py-4 border-t border-gray-700 mt-8" style={{ padding: '0 100px', height: '48px', display: 'flex', alignItems: 'center' }}>
  <div className="flex justify-between" style={{ fontSize: '13px', width: '100%' }}>
    <p>Profil / Informasi / Publik / Sarana Teknis</p>
    <p>Hak Cipta © 2024 Badan Meteorologi, Klimatologi, dan Geofisika</p>
  </div>
</div>
      
    </footer>
  );
}

export default SideFooter;
