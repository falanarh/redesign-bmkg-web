import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import ActiveMarker from "../../../assets/icons/green_marker.png";
import NonActiveMarker from "../../../assets/icons/black_marker.png";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Card } from "antd";

// Default marker icon
const nonActiveIcon = new L.icon({
  iconUrl: NonActiveMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeIcon = new L.icon({
  iconUrl: ActiveMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const markers = [
  { lat: 4.695135, lng: 96.7493993, name: "ACEH" },
  { lat: 2.1153547, lng: 99.5450974, name: "SUMATERA UTARA" },
  { lat: -0.7399397, lng: 100.8000051, name: "SUMATERA BARAT" },
  { lat: 0.2933469, lng: 101.7068294, name: "RIAU" },
  { lat: -1.4851831, lng: 102.4380581, name: "JAMBI" },
  { lat: -3.3194374, lng: 103.914399, name: "SUMATERA SELATAN" },
  { lat: -3.5778471, lng: 102.3463875, name: "BENGKULU" },
  { lat: -4.5585849, lng: 105.4068079, name: "LAMPUNG" },
  { lat: -2.7410513, lng: 106.4405872, name: "KEPULAUAN BANGKA BELITUNG" },
  { lat: 3.9456514, lng: 108.1428669, name: "KEPULAUAN RIAU" },
  { lat: -6.211544, lng: 106.845172, name: "DKI JAKARTA" },
  { lat: -7.090911, lng: 107.668887, name: "JAWA BARAT" },
  { lat: -7.150975, lng: 110.1402594, name: "JAWA TENGAH" },
  { lat: -7.8753849, lng: 110.4262088, name: "DI YOGYAKARTA" },
  { lat: -7.5360639, lng: 112.2384017, name: "JAWA TIMUR" },
  { lat: -6.4058172, lng: 106.0640179, name: "BANTEN" },
  { lat: -8.4095178, lng: 115.188916, name: "BALI" },
  { lat: -8.6529334, lng: 117.3616476, name: "NUSA TENGGARA BARAT" },
  { lat: -8.6573819, lng: 121.0793705, name: "NUSA TENGGARA TIMUR" },
  { lat: -0.2787808, lng: 111.4752851, name: "KALIMANTAN BARAT" },
  { lat: -1.6814878, lng: 113.3823545, name: "KALIMANTAN TENGAH" },
  { lat: -3.0926415, lng: 115.2837585, name: "KALIMANTAN SELATAN" },
  { lat: 1.6406296, lng: 116.419389, name: "KALIMANTAN TIMUR" },
  { lat: 3.3599, lng: 116.532, name: "KALIMANTAN UTARA" },
  { lat: 0.6246932, lng: 123.9750018, name: "SULAWESI UTARA" },
  { lat: -1.4300254, lng: 121.4456179, name: "SULAWESI TENGAH" },
  { lat: -3.6687994, lng: 119.9740534, name: "SULAWESI SELATAN" },
  { lat: -4.14491, lng: 122.174605, name: "SULAWESI TENGGARA" },
  { lat: 0.6999372, lng: 122.4467238, name: "GORONTALO" },
  { lat: -2.8441371, lng: 119.2320784, name: "SULAWESI BARAT" },
  { lat: -3.2384616, lng: 130.1452734, name: "MALUKU" },
  { lat: 1.5709993, lng: 127.8087693, name: "MALUKU UTARA" },
  { lat: -1.3361154, lng: 133.1747162, name: "PAPUA BARAT" },
  { lat: -4.269928, lng: 138.0803529, name: "PAPUA" },
];

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapCenter = [-0.9296489515222446, 118.43939955595538];
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    // setIsMarkerClicked(true);
  };

  return (
    <div className="">
      <div className="flex">
        <MapContainer
          center={mapCenter}
          zoom={5}
          className="h-[500px] w-[70%] rounded-l-2xl"
          scrollWheelZoom={false}
        >
          <TileLayer
            // url="https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}"
            // attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // maxZoom={22}
            // accessToken="HMvP5SL230PCh3QTEQAGF0TFSmoZ6X7QgHPNjG3gBwsuTzpvAQYG9bwTq1NOzbtt"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
            minZoom={0}
            maxZoom={20}
          />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={[marker.lat, marker.lng]}
              icon={selectedMarker === marker ? activeIcon : nonActiveIcon}
              eventHandlers={{ click: () => handleMarkerClick(marker) }}
            />
          ))}
        </MapContainer>
        <Card className="w-[30%] ml-4 p-4 rounded-l-none rounded-r-2xl border-slate-300/60 shadow ring-offset-[-10px] ring-offset-y-[10px]">
          {selectedMarker ? (
            <div>
              <h3 className="text-lg font-semibold">Informasi Marker</h3>
              <p>Latitude: {selectedMarker.lat}</p>
              <p>Longitude: {selectedMarker.lng}</p>
              <p>{selectedMarker.name}</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold">Informasi Marker</h3>
              <p>Klik pada marker untuk melihat informasinya.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Map;