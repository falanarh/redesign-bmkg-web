const markers = [
    {
      lat: 4.695135,
      lng: 96.7493993,
      name: "ACEH",
      weather: {
        condition: "Berawan",
        humidity: "80%",
        temperature: "25 °C",
        windSpeed: "25 km/jam",
      },
      airQuality: { status: "Baik", value: "9.7" },
      earthquake: {
        magnitude: "5.0",
        location: "0.84 LU - 131.67 BT",
        depth: "10 km",
        distance: "175 km Timur Laut Manado",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: 2.1153547,
      lng: 99.5450974,
      name: "SUMATERA UTARA",
      weather: {
        condition: "Cerah",
        humidity: "70%",
        temperature: "30 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Sedang", value: "20" },
      earthquake: {
        magnitude: "4.5",
        location: "2.10 LU - 99.50 BT",
        depth: "15 km",
        distance: "100 km Barat Laut Medan",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -0.7399397,
      lng: 100.8000051,
      name: "SUMATERA BARAT",
      weather: {
        condition: "Hujan",
        humidity: "90%",
        temperature: "24 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Baik", value: "12" },
      earthquake: {
        magnitude: "5.2",
        location: "0.70 LS - 100.75 BT",
        depth: "20 km",
        distance: "150 km Selatan Padang",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: 0.2933469,
      lng: 101.7068294,
      name: "RIAU",
      weather: {
        condition: "Mendung",
        humidity: "85%",
        temperature: "28 °C",
        windSpeed: "20 km/jam",
      },
      airQuality: { status: "Baik", value: "10" },
      earthquake: {
        magnitude: "4.0",
        location: "0.30 LU - 101.70 BT",
        depth: "25 km",
        distance: "80 km Utara Pekanbaru",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -1.4851831,
      lng: 102.4380581,
      name: "JAMBI",
      weather: {
        condition: "Cerah",
        humidity: "60%",
        temperature: "32 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Sedang", value: "25" },
      earthquake: {
        magnitude: "3.8",
        location: "1.50 LS - 102.40 BT",
        depth: "30 km",
        distance: "90 km Barat Jambi",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -3.3194374,
      lng: 103.914399,
      name: "SUMATERA SELATAN",
      weather: {
        condition: "Hujan",
        humidity: "95%",
        temperature: "22 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "8" },
      earthquake: {
        magnitude: "4.9",
        location: "3.30 LS - 103.90 BT",
        depth: "18 km",
        distance: "120 km Tenggara Palembang",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -3.5778471,
      lng: 102.3463875,
      name: "BENGKULU",
      weather: {
        condition: "Berawan",
        humidity: "80%",
        temperature: "26 °C",
        windSpeed: "18 km/jam",
      },
      airQuality: { status: "Baik", value: "11" },
      earthquake: {
        magnitude: "5.1",
        location: "3.50 LS - 102.35 BT",
        depth: "22 km",
        distance: "100 km Barat Bengkulu",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -4.5585849,
      lng: 105.4068079,
      name: "LAMPUNG",
      weather: {
        condition: "Cerah Berawan",
        humidity: "75%",
        temperature: "29 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Sedang", value: "15" },
      earthquake: {
        magnitude: "5.3",
        location: "4.55 LS - 105.40 BT",
        depth: "35 km",
        distance: "150 km Selatan Bandar Lampung",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -2.7410513,
      lng: 106.4405872,
      name: "KEPULAUAN BANGKA BELITUNG",
      weather: {
        condition: "Mendung",
        humidity: "85%",
        temperature: "27 °C",
        windSpeed: "20 km/jam",
      },
      airQuality: { status: "Baik", value: "9" },
      earthquake: {
        magnitude: "3.9",
        location: "2.75 LS - 106.44 BT",
        depth: "25 km",
        distance: "70 km Utara Pangkal Pinang",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: 3.9456514,
      lng: 108.1428669,
      name: "KEPULAUAN RIAU",
      weather: {
        condition: "Cerah",
        humidity: "70%",
        temperature: "30 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Sedang", value: "18" },
      earthquake: {
        magnitude: "4.2",
        location: "3.94 LU - 108.14 BT",
        depth: "20 km",
        distance: "80 km Barat Laut Tanjung Pinang",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -6.211544,
      lng: 106.845172,
      name: "DKI JAKARTA",
      weather: {
        condition: "Berawan",
        humidity: "75%",
        temperature: "31 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Sedang", value: "30" },
      earthquake: null,
    },
    {
      lat: -7.090911,
      lng: 107.668887,
      name: "JAWA BARAT",
      weather: {
        condition: "Cerah Berawan",
        humidity: "70%",
        temperature: "28 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Sedang", value: "22" },
      earthquake: {
        magnitude: "4.8",
        location: "7.09 LS - 107.66 BT",
        depth: "40 km",
        distance: "150 km Barat Daya Bandung",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -7.150975,
      lng: 110.1402594,
      name: "JAWA TENGAH",
      weather: {
        condition: "Berawan",
        humidity: "80%",
        temperature: "29 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "14" },
      earthquake: null,
    },
    {
      lat: -7.8753849,
      lng: 110.4262088,
      name: "DI YOGYAKARTA",
      weather: {
        condition: "Hujan",
        humidity: "90%",
        temperature: "24 °C",
        windSpeed: "18 km/jam",
      },
      airQuality: { status: "Baik", value: "10" },
      earthquake: null,
    },
    {
      lat: -7.5360639,
      lng: 112.2384017,
      name: "JAWA TIMUR",
      weather: {
        condition: "Cerah",
        humidity: "60%",
        temperature: "32 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Sedang", value: "20" },
      earthquake: null,
    },
    {
      lat: -8.4095178,
      lng: 115.188916,
      name: "BALI",
      weather: {
        condition: "Berawan",
        humidity: "80%",
        temperature: "28 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "12" },
      earthquake: null,
    },
    {
      lat: -8.6573819,
      lng: 121.0793705,
      name: "NUSA TENGGARA TIMUR",
      weather: {
        condition: "Cerah",
        humidity: "65%",
        temperature: "30 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Sedang", value: "18" },
      earthquake: null,
    },
    {
      lat: -8.652933,
      lng: 118.8825964,
      name: "NUSA TENGGARA BARAT",
      weather: {
        condition: "Berawan",
        humidity: "70%",
        temperature: "27 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "11" },
      earthquake: null,
    },
    {
      lat: -3.3347378,
      lng: 114.590752,
      name: "KALIMANTAN SELATAN",
      weather: {
        condition: "Cerah Berawan",
        humidity: "70%",
        temperature: "30 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Sedang", value: "17" },
      earthquake: null,
    },
    {
      lat: -2.2136,
      lng: 113.9108,
      name: "KALIMANTAN TENGAH",
      weather: {
        condition: "Berawan",
        humidity: "75%",
        temperature: "29 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "13" },
      earthquake: null,
    },
    {
      lat: 0.5386566,
      lng: 116.419389,
      name: "KALIMANTAN TIMUR",
      weather: {
        condition: "Hujan",
        humidity: "85%",
        temperature: "25 °C",
        windSpeed: "18 km/jam",
      },
      airQuality: { status: "Baik", value: "10" },
      earthquake: {
        magnitude: "5.0",
        location: "0.53 LU - 116.41 BT",
        depth: "30 km",
        distance: "160 km Barat Samarinda",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -0.03194,
      lng: 109.325,
      name: "KALIMANTAN BARAT",
      weather: {
        condition: "Berawan",
        humidity: "70%",
        temperature: "28 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Baik", value: "14" },
      earthquake: null,
    },
    {
      lat: 2.8375,
      lng: 117.36528,
      name: "KALIMANTAN UTARA",
      weather: {
        condition: "Cerah",
        humidity: "65%",
        temperature: "31 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Sedang", value: "20" },
      earthquake: null,
    },
    {
      lat: -2.7915793,
      lng: 119.32443,
      name: "SULAWESI BARAT",
      weather: {
        condition: "Berawan",
        humidity: "75%",
        temperature: "29 °C",
        windSpeed: "14 km/jam",
      },
      airQuality: { status: "Baik", value: "12" },
      earthquake: {
        magnitude: "4.4",
        location: "2.79 LS - 119.32 BT",
        depth: "20 km",
        distance: "130 km Barat Mamuju",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -3.6687996,
      lng: 119.9740534,
      name: "SULAWESI SELATAN",
      weather: {
        condition: "Hujan",
        humidity: "85%",
        temperature: "26 °C",
        windSpeed: "18 km/jam",
      },
      airQuality: { status: "Baik", value: "11" },
      earthquake: null,
    },
    {
      lat: -1.4300419,
      lng: 120.4357728,
      name: "SULAWESI TENGAH",
      weather: {
        condition: "Cerah Berawan",
        humidity: "70%",
        temperature: "30 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Sedang", value: "18" },
      earthquake: null,
    },
    {
      lat: 1.4276688,
      lng: 125.204282,
      name: "SULAWESI UTARA",
      weather: {
        condition: "Berawan",
        humidity: "75%",
        temperature: "28 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "10" },
      earthquake: null,
    },
    {
      lat: 0.6246935,
      lng: 122.455841,
      name: "GORONTALO",
      weather: {
        condition: "Cerah",
        humidity: "70%",
        temperature: "29 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Sedang", value: "17" },
      earthquake: null,
    },
    {
      lat: -4.14491,
      lng: 122.174605,
      name: "SULAWESI TENGGARA",
      weather: {
        condition: "Hujan",
        humidity: "80%",
        temperature: "25 °C",
        windSpeed: "16 km/jam",
      },
      airQuality: { status: "Baik", value: "9" },
      earthquake: null,
    },
    {
      lat: -3.6755589,
      lng: 128.1791001,
      name: "MALUKU",
      weather: {
        condition: "Berawan",
        humidity: "70%",
        temperature: "28 °C",
        windSpeed: "15 km/jam",
      },
      airQuality: { status: "Baik", value: "11" },
      earthquake: {
        magnitude: "4.6",
        location: "3.67 LS - 128.17 BT",
        depth: "30 km",
        distance: "100 km Barat Ambon",
        tsunami: "Tidak berpotensi tsunami",
      },
    },
    {
      lat: -1.3375157,
      lng: 127.503975,
      name: "MALUKU UTARA",
      weather: {
        condition: "Cerah",
        humidity: "65%",
        temperature: "30 °C",
        windSpeed: "10 km/jam",
      },
      airQuality: { status: "Sedang", value: "19" },
      earthquake: null,
    },
    {
      lat: -2.548926,
      lng: 133.8460108,
      name: "PAPUA BARAT",
      weather: {
        condition: "Hujan",
        humidity: "85%",
        temperature: "26 °C",
        windSpeed: "18 km/jam",
      },
      airQuality: { status: "Baik", value: "9" },
      earthquake: null,
    },
    {
      lat: -4.269928,
      lng: 138.080352,
      name: "PAPUA",
      weather: {
        condition: "Cerah Berawan",
        humidity: "70%",
        temperature: "30 °C",
        windSpeed: "12 km/jam",
      },
      airQuality: { status: "Baik", value: "11" },
      earthquake: null,
    },
  ];

  export default markers;