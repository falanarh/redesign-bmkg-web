import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  FaCloudMoonRain,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaEarthAmericas,
  FaRegBuilding,
  FaWatchmanMonitoring,
  FaWind,
} from "react-icons/fa6";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import "./index.css";
import IklimHariTanpaHujan from "../components/Fragments/IklimHariTanpaHujan";
import BuletinInformasiIklim from "../components/Fragments/IklimBuletinInfo";
import IklimInformasiHujanBulanan from "../components/Fragments/IklimInfoHujanBulanan";
import IklimDinamikaAtmosfir from "../components/Fragments/IklimDinamikaAtmosfir";
import IndeksPresipitasiTerstandarisasi from "../components/Fragments/IklimIndeksPresipitasiTerstandarisasi";
import AirTersediaBagiTanaman from "../components/Fragments/IklimAirTersediaBagiTanaman";
import PrakiraanIklim from "../components/Fragments/IklimPrakiraanIklim";
import AnalisisLajuPerubahan from "../components/Fragments/IklimAnalisisLajuPerubahan";
import FaktaPerubahanIklim from "../components/Fragments/IklimFaktaPerubahanIklim";
import ProyeksiPerubahanIklim from "../components/Fragments/IklimProyeksiPerubahanIklim";
import AnomaliSuhuUdara from "../components/Fragments/IklimAnomaliSuhuUdara";
import { useMediaQuery } from "react-responsive";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Iklim({ endpoint }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarItems = [
    {
      key: "monitoring-iklim",
      icon: <FaWatchmanMonitoring className="size-[24px]" />,
      label: "Monitoring Iklim",
      children: [
        {
          key: "informasi-hari-tanpa-hujan",
          label: (
            <Link to="/iklim/monitoring-iklim/informasi-hari-tanpa-hujan">
              Informasi Hari Tanpa Hujan
            </Link>
          ),
          content: <IklimHariTanpaHujan />,
        },
        {
          key: "buletin-iklim",
          label: (
            <Link to="/iklim/monitoring-iklim/buletin-iklim">
              Buletin Iklim
            </Link>
          ),
          content: <BuletinInformasiIklim />,
        },
      ],
    },
    {
      key: "analisis-iklim",
      icon: <FaCloudShowersHeavy className="size-[22px]" />,
      label: "Analisis Iklim",
      children: [
        {
          key: "informasi-hujan-bulanan",
          label: (
            <Link to="/iklim/analisis-iklim/informasi-hujan-bulanan">
              Informasi Hujan Bulanan
            </Link>
          ),
          content: <IklimInformasiHujanBulanan />,
        },
        {
          key: "dinamika-atmosfir",
          label: (
            <Link to="/iklim/analisis-iklim/dinamika-atmosfir">
              Dinamika Atmosfir
            </Link>
          ),
          content: <IklimDinamikaAtmosfir />,
        },
        {
          key: "indeks-presipitasi-terstandarisasi",
          label: (
            <Link to="/iklim/analisis-iklim/indeks-presipitasi-terstandarisasi">
              Indeks Presipitasi Terstandarisasi
            </Link>
          ),
          content: <IndeksPresipitasiTerstandarisasi />,
        },
        {
          key: "air-tersedia-bagi-tanaman",
          label: (
            <Link to="/iklim/analisis-iklim/air-tersedia-bagi-tanaman">
              Air Tersedia Bagi Tanaman (ATi)
            </Link>
          ),
          content: <AirTersediaBagiTanaman />,
        },
      ],
    },
    {
      key: "prakiraan-iklim",
      icon: <FaCloudMoonRain className="size-[22px]" />,
      label: <Link to="/iklim/prakiraan-iklim">Prakiraan Iklim</Link>,
      content: <PrakiraanIklim />,
    },
    {
      key: "perubahan-iklim",
      icon: <FaWind className="size-[22px]" />,
      label: "Perubahan Iklim",
      children: [
        {
          key: "anomali-suhu-udara",
          label: (
            <Link to="/iklim/perubahan-iklim/anomali-suhu-udara">
              Anomali Suhu Udara
            </Link>
          ),
          content: <AnomaliSuhuUdara />,
        },
        {
          key: "analisis-laju-perubahan",
          label: (
            <Link to="/iklim/perubahan-iklim/analisis-laju-perubahan">
              Analisis Laju Perubahan
            </Link>
          ),
          content: <AnalisisLajuPerubahan />,
        },
        {
          key: "fakta-perubahan-iklim",
          label: (
            <Link to="/iklim/perubahan-iklim/fakta-perubahan-iklim">
              Fakta Perubahan Iklim
            </Link>
          ),
          content: <FaktaPerubahanIklim />,
        },
      ],
    },
    {
      key: "proyeksi-perubahan-iklim",
      icon: <FaCloudSunRain className="size-[22px]" />,
      label: (
        <Link to="/iklim/proyeksi-perubahan-iklim">
          Proyeksi Perubahan Iklim
        </Link>
      ),
      content: <ProyeksiPerubahanIklim />,
    },
  ];

  const handleMenuClick = ({ key }) => {
    setSelectedMenu(key);
  };

  const handleMenuClickMobile = ({ key }) => {
    console.log("menu clicked!");
    setSelectedMenu(key);
    console.log(mobileCollapsed);
    setMobileCollapsed(!mobileCollapsed);
    console.log(mobileCollapsed); // Output yang sama dengan nilai sebelumnya
  };

  const handleToggleCollapsed = () => {
    console.log(mobileCollapsed);
    setMobileCollapsed(!mobileCollapsed);
  };

  const generateBreadcrumb = (menuKey, items, breadcrumb = []) => {
    for (let item of items) {
      if (item.key === menuKey) {
        breadcrumb.push({ title: item.label });
        return breadcrumb;
      } else if (item.children) {
        const childBreadcrumb = generateBreadcrumb(menuKey, item.children, []);
        if (childBreadcrumb.length > 0) {
          breadcrumb.push({ title: item.label });
          breadcrumb.push(...childBreadcrumb);
          return breadcrumb;
        }
      }
    }
    return breadcrumb;
  };

  const breadcrumbItems = [
    { title: "Iklim" },
    ...generateBreadcrumb(selectedMenu, sidebarItems),
  ];

  const findSelectedMenu = (menuKey, items) => {
    for (let item of items) {
      if (item.key === menuKey) {
        return item;
      } else if (item.children) {
        const found = findSelectedMenu(menuKey, item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedSidebarItem = findSelectedMenu(selectedMenu, sidebarItems);

  return (
    <div className="flex justify-center w-full mt-[140px] overflow-x-hidden">
      <Layout className="max-w-[1280px] sm:px-6 bg-white">
        {isMobile ? (
          <>
            <div
              onClick={handleToggleCollapsed}
              className={`absolute z-10 p-0 m-0 border-none shadow-none bg-active top-4 left-0`}
              style={{ borderRadius: "0 0.375rem 0.375rem 0" }} // Mengatur radius di atas kiri dan bawah kiri
            >
              {mobileCollapsed ? (
                <RiMenuFold4Fill className="m-2 text-2xl text-white" />
              ) : (
                <RiMenuUnfold4Fill className="m-2 text-2xl text-white" />
              )}
            </div>
            <Sider
              className={mobileCollapsed ? "sider-collapsed" : "sider"}
              width="100%"
              collapsible
              collapsed={collapsed}
              // breakpoint="xs"
            >
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["11"]}
                selectedKeys={[selectedMenu]}
                onClick={handleMenuClickMobile}
                items={sidebarItems}
                className="w-full h-full pt-2 mt-12"
                hidden={mobileCollapsed}
              />
            </Sider>
          </>
        ) : (
          <Sider trigger={null} collapsible collapsed={collapsed} width={242}>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["11"]}
              selectedKeys={[selectedMenu]}
              onClick={handleMenuClick}
              items={sidebarItems}
              className="h-full pt-2"
            />
          </Sider>
        )}
        <Layout className="bg-white">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="relative "
          >
            {!isMobile ? (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            ) : null}
            <Breadcrumb
              items={breadcrumbItems}
              className="absolute px-6 mb-4 font-semibold top-5 left-10 font-pt-sans"
            />
          </Header>
          <Content
            style={{
              //   margin: "0 0 0 65px",
              margin: isMobile ? "0 0 0 0px" : "0 0 0 65px",
              padding: isMobile ? "25px" : "0 0 55px 0",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedSidebarItem?.content || "Content"}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
