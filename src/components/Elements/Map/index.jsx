/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card } from "antd";
import { delay, easeIn, motion, useInView } from "framer-motion";
// import ActiveMarker from "../../../assets/icons/green_marker.png";
// import NonActiveMarker from "../../../assets/icons/black_marker.png";
import ActiveMarker from "../../../assets/icons/active_marker.png";
import ActiveWarningMarker from "../../../assets/icons/active_warning_marker.png";
import InactiveMarker from "../../../assets/icons/inactive_marker.png";
import InactiveWarningMarker from "../../../assets/icons/inactive_warning_marker.png";
import Cloud from "../../../assets/icons/Cloud.png";
import Water from "../../../assets/icons/Water.png";
import Thermometer from "../../../assets/icons/Thermometer.png";
import Air from "../../../assets/icons/Air.png";
import Pulse from "../../../assets/icons/Pulse.png";
import Location from "../../../assets/icons/Location.png";
import CentrePoint from "../../../assets/icons/Centre_Point.png";
import CenterOfGravity from "../../../assets/icons/Center_of_Gravity.png";
import CentralHeating from "../../../assets/icons/Central_Heating.png";
import Tsunami from "../../../assets/icons/Tsunami.png";
import PinMap from "../../../assets/icons/pin_map.png";
import CenterIcon from "../../../assets/icons/center.png";
import L from "leaflet";
import markers from "./markers.js";
import "./index.css";
import "leaflet/dist/leaflet.css";

const infoContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const infoImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  },
};

const infoTextVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const activeMarker = new L.icon({
  iconUrl: ActiveMarker,
  iconSize: [36, 36],
  iconAnchor: [12.5, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeWarningMarker = new L.icon({
  iconUrl: ActiveWarningMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const inactiveMarker = new L.icon({
  iconUrl: InactiveMarker,
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const inactiveWarningMarker = new L.icon({
  iconUrl: InactiveWarningMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d;
};

const CenterMap = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const cardVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 1 },
  },
};

const getMarkerIcon = (marker, selectedMarker) => {
  const isActive = selectedMarker === marker;
  const hasWarning = marker.earthquake != null;

  if (isActive && hasWarning) return activeWarningMarker;
  if (isActive && !hasWarning) return activeMarker;
  if (!isActive && hasWarning) return inactiveWarningMarker;
  return inactiveMarker;
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    center: [-0.9296489515222446, 118.43939955595538],
    zoom: 5,
  });
  const markerRefs = useRef([]);
  const handleMarkerClick = (marker, index) => {
    setSelectedMarker(marker);
    markerRefs.current[index].openPopup();
  };
  const findNearestMarker = (userLocation) => {
    let nearestMarker = null;
    let minDistance = Infinity;
    markers.forEach((marker) => {
      const distance = getDistance(
        userLocation.lat,
        userLocation.lng,
        marker.lat,
        marker.lng
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearestMarker = marker;
      }
    });
    return nearestMarker;
  };
  const handleCenterButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const nearestMarker = findNearestMarker(userLocation);
        if (nearestMarker) {
          const markerIndex = markers.findIndex(
            (marker) => marker === nearestMarker
          );
          setMapCenter({
            center: [nearestMarker.lat, nearestMarker.lng],
            zoom: 5,
          });
          handleMarkerClick(nearestMarker, markerIndex);
          setTimeout(() => {
            setMapCenter({
              center: [nearestMarker.lat, nearestMarker.lng],
              zoom: 8,
            });
          }, 300);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="">
      <div className="relative flex flex-col justify-between gap-5 sm:flex-row">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 60, duration: 1 }}
          ease="easeIn"
          viewport={{ once: true }}
          className="h-[400px] xxl:h-[420px] w-full sm:w-[65%] shadow-md z-0 relative"
        >
        <Button
          isIconOnly
          size="lg"
          color="warning"
          variant="faded"
          aria-label="Center my location"
          className="m-3 absolute bottom-0 left-0 z-[999]"
          onClick={handleCenterButtonClick}
        >
          <img src={CenterIcon} className="size-6" alt="Center Icon" />
        </Button>
          <MapContainer
            center={mapCenter.center}
            zoom={mapCenter.zoom}
            className="w-full h-full rounded-l-2xl sm:rounded-r-none rounded-r-2xl"
            scrollWheelZoom={false}
          >
            <CenterMap center={mapCenter.center} zoom={mapCenter.zoom} />
            <TileLayer
              // url="https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}"
              // attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // maxZoom={22}
              // accessToken="HMvP5SL230PCh3QTEQAGF0TFSmoZ6X7QgHPNjG3gBwsuTzpvAQYG9bwTq1NOzbtt"
              minZoom={0}
              url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
              // attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
              maxZoom={8}
            />
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={[marker.lat, marker.lng]}
                icon={getMarkerIcon(marker, selectedMarker)}
                eventHandlers={{
                  click: () => handleMarkerClick(marker, index),
                }}
                ref={(el) => (markerRefs.current[index] = el)}
              >
                <Popup
                  offset={[10, 0]}
                  closeOnClick={false}
                  className="font-semibold font-pt-sans-caption"
                >
                  {marker.name}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 60, duration: 1 }}
          ease="easeIn"
          viewport={{ once: true }}
          className="sm:h-[400px] h-[420px] xxl:h-[420px] w-full sm:w-[32%]"
        >
          <Card className="flex flex-col justify-center items-center w-full h-full p-0 sm:rounded-l-none rounded-l-2xl rounded-r-2xl border-slate-300/60 shadow bg-slate-100 ring-offset-[-10px] ring-offset-y-[10px]">
            {selectedMarker ? (
              <>
                <motion.div
                  className="flex flex-col"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <h1 className="text-[14px] underline underline-offset-2 font-bold px-1">
                    Prakiraan Cuaca
                  </h1>
                  <div className="flex flex-wrap items-stretch justify-between px-1 h-34">
                    {[
                      {
                        icon: Cloud,
                        title: "Cuaca",
                        value: selectedMarker.weather.condition,
                      },
                      {
                        icon: Water,
                        title: "Kandungan Air",
                        value: selectedMarker.weather.humidity,
                      },
                      {
                        icon: Thermometer,
                        title: "Suhu",
                        value: selectedMarker.weather.temperature,
                      },
                      {
                        icon: Air,
                        title: "Kecepatan Angin",
                        value: selectedMarker.weather.windSpeed,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`flex justify-between items-center m-1 ${
                          index % 2 === 0 ? "w-[35%]" : "w-[48%]"
                        }`}
                        variants={itemVariants}
                      >
                        <img src={item.icon} className="size-8"></img>
                        <span className="flex flex-col items-start justify-center w-full ml-1">
                          <h3 className="text-[14px] font-pt-sans-caption leading-tight font-bold">
                            {item.title}
                          </h3>
                          <p className="text-[14px] font-pt-sans leading-tight">
                            {item.value}
                          </p>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col my-4"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <h1 className="text-[14px] underline underline-offset-2 font-bold px-1">
                    Kualitas Udara
                  </h1>
                  <div className="flex flex-wrap items-stretch justify-between px-1 h-17">
                    <motion.div
                      className="flex justify-between items-center m-1 w-[50%]"
                      variants={itemVariants}
                    >
                      <img src={CentralHeating} className="size-8"></img>
                      <span className="flex flex-col items-start justify-center w-full ml-1">
                        <h3 className="text-[14px] font-pt-sans-caption leading-tight font-bold">
                          {selectedMarker.airQuality.status}
                        </h3>
                        <p className="text-[14px] font-pt-sans leading-tight">
                          {selectedMarker.airQuality.value} µg/m<sup>3</sup>
                        </p>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <h1 className="text-[14px] underline underline-offset-2 font-bold px-1">
                    Gempa Bumi
                  </h1>
                  <div className="flex flex-wrap items-stretch justify-between px-1 h-34">
                    {[
                      {
                        icon: Pulse,
                        title: "Magnitudo",
                        value: selectedMarker.earthquake
                          ? selectedMarker.earthquake.magnitude
                          : "-",
                      },
                      {
                        icon: Location,
                        title: "Lokasi",
                        value: selectedMarker.earthquake
                          ? selectedMarker.earthquake.location
                          : "-",
                      },
                      {
                        icon: CentrePoint,
                        title: "Kedalaman",
                        value: selectedMarker.earthquake
                          ? selectedMarker.earthquake.depth
                          : "-",
                      },
                      {
                        icon: CenterOfGravity,
                        title: "Jarak",
                        value: selectedMarker.earthquake
                          ? selectedMarker.earthquake.distance
                          : "-",
                      },
                      {
                        icon: Tsunami,
                        title: "Potensi Tsunami",
                        value: selectedMarker.earthquake
                          ? selectedMarker.earthquake.tsunami
                          : "-",
                        width: "w-[70%]",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`flex justify-between items-center m-1  ${
                          item.width ||
                          (index % 2 === 0 ? "w-[35%]" : "w-[48%]")
                        }`}
                        variants={itemVariants}
                      >
                        <img src={item.icon} className="size-8"></img>
                        <span className="flex flex-col items-start justify-center w-full ml-1">
                          <h3 className="text-[14px] font-pt-sans-caption leading-tight font-bold">
                            {item.title}
                          </h3>
                          <p className="text-[14px] font-pt-sans leading-tight">
                            {item.value}
                          </p>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <div className="flex flex-col justify-between items-center h-[300px]">
                <motion.h3
                  className="text-2xl font-semibold font-pt-sans-caption"
                  initial="hidden"
                  animate="visible"
                  variants={infoContainerVariants}
                >
                  Informasi Marker
                </motion.h3>
                <motion.img
                  src={PinMap}
                  className="size-28"
                  initial="hidden"
                  animate="visible"
                  variants={infoImageVariants}
                />
                <motion.p
                  className="text-base font-bold text-center font-pt-sans"
                  initial="hidden"
                  animate="visible"
                  variants={infoTextVariants}
                >
                  Klik pada marker untuk melihat informasinya.
                </motion.p>
                <motion.p
                  className="text-base font-pt-sans"
                  initial="hidden"
                  animate="visible"
                  variants={infoTextVariants}
                >
                  Atau
                </motion.p>
                <motion.span
                  className="text-base font-bold text-center font-pt-sans"
                  initial="hidden"
                  animate="visible"
                  variants={infoTextVariants}
                >
                  Klik tombol
                  <Button
                    isIconOnly
                    color="warning"
                    variant="faded"
                    aria-label="Center my location"
                    className="mx-2 pointer-events-none"
                  >
                    <img
                      src={CenterIcon}
                      className="size-5"
                      alt="Center Icon"
                    />
                  </Button>
                  pada peta untuk memperoleh informasi di sekitar lokasi Anda
                </motion.span>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
