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
    <footer className="flex flex-col items-center justify-center">
      <div
        className="max-w-[1280px] px-4 sm:px-6 md:px-10 py-7 bg-white text-black container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        style={{ fontSize: "14px" }}
      >
        {/* Kolom Pertama */}
        <div>
          <div className="flex items-center mb-4">
            <img className="w-12 mr-4 h-14" src={BMKGLogo} alt="BMKG Logo" />
            <div>
              <h5 className="mb-2 font-bold" style={{ fontSize: "14px" }}>
                BMKG
              </h5>
              <p style={{ fontSize: "12px" }}>
                Badan Meteorologi, Klimatologi, dan Geofisika
              </p>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <img
              className="w-6 h-6 mr-2"
              src={LocationSign}
              alt="Location Icon"
            />
            <ul>
              <li>
                <span className="font-bold">Kantor Pusat</span>
              </li>
              <li>Jl. Angkasa I No.2 Kemayoran</li>
              <li>Jakarta Pusat, DKI Jakarta 10610</li>
              <li>PO Box 3540 Jkt.</li>
            </ul>
          </div>

          <div className="flex items-start mt-4">
            <img
              className="w-6 h-6 mr-2"
              src={Telephone}
              alt="Telephone Icon"
            />
            <ul>
              <li>
                <span className="font-bold">Telepon & Fax</span>
              </li>
              <li>Call Center (021) 196</li>
              <li>Fax (021) 4246703</li>
            </ul>
          </div>

          <div className="flex items-start mt-4">
            <img className="w-6 h-6 mr-2" src={Email} alt="Email Icon" />
            <ul>
              <li>
                <span className="font-bold">Email</span>
              </li>
              <li>cci196@bmkg.go.id</li>
            </ul>
          </div>
        </div>

        {/* Kolom Kedua */}
        <div>
          <h5 className="mb-2 font-bold" style={{ fontSize: "14px" }}>
            Informasi BMKG
          </h5>
          <ul>
            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://web.meteo.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Cloud}
                    alt="Cloud Rainy Icon"
                  />
                  <li>Informasi Cuaca</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://aviation.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img className="w-6 h-6 mr-2" src={Air} alt="Air Icon" />
                  <li>Kualitas Udara</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://cews.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img className="w-6 h-6 mr-2" src={CEWS} alt="CEWS Icon" />
                  <li>CEWS (Climate Early Warning System)</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://inatews.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img className="w-6 h-6 mr-2" src={ITEWS} alt="ITEWS Icon" />
                  <li>InaTEWS (Indonesia Tsunami Early Warning System)</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://dataonline.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={DataOnline}
                    alt="Data Online Icon"
                  />
                  <li>Data Online BMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="http://jdih.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img className="w-6 h-6 mr-2" src={JDIH} alt="JDIH Icon" />
                  <li>JIDH BMKG</li>
                </a>
              </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Ketiga */}
        <div>
          <ul>
            <div className="flex items-start -mt-5 sm:mt-9">
              <ul>
                <a
                  href="http://inspektorat.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Inpektorat}
                    alt="Inspektorat BMKG Icon"
                  />
                  <li>Inspektorat BMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="http://pusdiklat.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img className="w-6 h-6 mr-2" src={JDIH} alt="JDIH Icon" />
                  <li>Pusdiklat BMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a href="https://stmkg.ac.id/" target="_blank" className="flex">
                  <img className="w-6 h-6 mr-2" src={STMKG} alt="STMKG Icon" />
                  <li>STMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="http://perpustakaan.bmkg.go.id/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Library}
                    alt="Library Icon"
                  />
                  <li>E-Perpustakaan BMKG</li>
                </a>
              </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Keempat */}
        <div>
          <h5 className="mb-2 font-bold" style={{ fontSize: "14px" }}>
            Ikuti Kami
          </h5>
          <ul>
            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://www.facebook.com/InfoBMKG/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Facebook}
                    alt="Facebook Icon"
                  />
                  <li>InfoBMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://x.com/infoBMKG"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Twitter}
                    alt="Twitter Icon"
                  />
                  <li>infoBMKG</li>
                </a>
              </ul>
            </div>

            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://www.instagram.com/infoBMKG/"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={Instagram}
                    alt="Instagram Icon"
                  />
                  <li>infobmkg</li>
                </a>
              </ul>
            </div>
            <div className="flex items-start mt-4">
              <ul>
                <a
                  href="https://www.youtube.com/@InfoBMKGIndonesia"
                  target="_blank"
                  className="flex"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={YouTube}
                    alt="Youtube Icon"
                  />
                  <li>infoBMKGIndonesia</li>
                </a>
              </ul>
            </div>
          </ul>
        </div>

        {/* Kolom Kelima */}
        <div className="relative">
          <h5 className="mb-2 font-bold">Aplikasi Mobile</h5>
          <p className="text-blue-500" style={{ fontSize: "14px" }}>
            Info BMKG - Cuaca, Iklim, dan Gempabumi Indonesia
          </p>
          <p style={{ fontSize: "13px" }}>
            Semua informasi mengenai Prakiraan Cuaca, Iklim, Kualitas Udara, dan
            Gempabumi yang terjadi di berbagai wilayah di Indonesia tercakup
            dalam satu aplikasi mobile.
          </p>
          <div className="flex mt-2">
            <a
              href="https://apps.apple.com/id/app/info-bmkg/id1114372539?l=id"
              target="_blank"
            >
              <img
                className="w-[110px] h-[40px] mr-2"
                src={AppStore}
                alt="App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.Info_BMKG&hl=en_US&pli=1"
              target="_blank"
            >
              <img
                className="w-[110px] h-[40px]"
                src={GooglePlay}
                alt="Google Play"
              />
            </a>
          </div>
          <img
            className="w-[100px] h-[100px] sm:w-[145px] sm:h-[145px] absolute right-[-20px] bottom-[-55px]"
            src={LiveChat}
            alt="Live Chat Button"
          />
        </div>
      </div>

      {/* Hak Cipta dan Desain */}
      <div
        className="flex justify-center w-full py-4 mt-8 text-center text-white bg-blue-800 border-t border-gray-700"
        style={{ height: "48px", display: "flex", alignItems: "center" }}
      >
        <div
          className="flex justify-center max-w-[1280px] px-4 sm:px-6 md:px-10 w-full"
          style={{ fontSize: "13px", width: "100%" }}
        >
          <p>Hak Cipta © 2024 Kelompok 4 3SI3 Politeknik Statistika STIS</p>
        </div>
      </div>
    </footer>
  );
};

export default SideFooter;
