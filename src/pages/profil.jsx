/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  FaBookOpenReader,
  FaEarthAmericas,
  FaRegBuilding,
} from "react-icons/fa6";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./index.css";
import ProfilSejarah from "../components/Fragments/ProfilSejarah";
import ProfilLogo from "../components/Fragments/ProfilLogo";
import ProfilVisiMisi from "../components/Fragments/ProfilVisiMisi";
import ProfilTugasFungsi from "../components/Fragments/ProfilTugasFungsi";
import ProfilStrukturOrganisasi from "../components/Fragments/ProfilStrukturOrganisasi";
import ProfilTransparasiKinerja from "../components/Fragments/ProfilTransparasiKinerja";
import ProfilDaftarInfoPublik from "../components/Fragments/ProfilDaftarInfoPublik";
import ProfilInfoDikecualikan from "../components/Fragments/ProfilInfoDikecualikan";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Artikel from "../components/Fragments/Artikel";
import ProfilStasiunMKG from "../components/Fragments/ProfilStasiunMKG";
import ProfilBalaiBesarMKG from "../components/Fragments/ProfilBalaiBesarMKG";
import ProfilSiaranPers from "../components/Fragments/ProfilSiaranPers";
import { useMediaQuery } from "react-responsive";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import ProfilBerita from "../components/Fragments/ProfilBerita";
import { Button } from "@nextui-org/react";

const { Header, Sider, Content } = Layout;

export default function Profil({ endpoint = "sejarah" }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sidebarItems = [
    {
      key: "profil-bmkg",
      icon: <FaRegBuilding className="size-[24px]" />,
      label: "Profil BMKG",
      children: [
        {
          key: "sejarah",
          label: <Link to="/profil/profil-bmkg/sejarah">Sejarah</Link>,
          content: <ProfilSejarah />,
        },
        {
          key: "logo",
          label: <Link to="/profil/profil-bmkg/logo">Logo</Link>,
          content: <ProfilLogo />,
        },
        {
          key: "visi-dan-misi",
          label: (
            <Link to="/profil/profil-bmkg/visi-dan-misi">Visi dan Misi</Link>
          ),
          content: <ProfilVisiMisi />,
        },
        {
          key: "tugas-dan-fungsi",
          label: (
            <Link to="/profil/profil-bmkg/tugas-dan-fungsi">
              Tugas dan Fungsi
            </Link>
          ),
          content: <ProfilTugasFungsi />,
        },
        {
          key: "struktur-organisasi",
          label: (
            <Link to="/profil/profil-bmkg/struktur-organisasi">
              Struktur Organisasi
            </Link>
          ),
          content: <ProfilStrukturOrganisasi />,
        },
        {
          key: "balai-besar-mkg",
          label: (
            <Link to="/profil/profil-bmkg/balai-besar-mkg">
              Balai Besar MKG
            </Link>
          ),
          content: <ProfilBalaiBesarMKG />,
        },
        {
          key: "stasion-mkg",
          label: <Link to="/profil/profil-bmkg/stasion-mkg">Stasiun MKG</Link>,
          content: <ProfilStasiunMKG isMobile={isMobile} />,
        },
      ],
    },
    {
      key: "publikasi-dan-informasi",
      icon: <FaBookOpenReader className="size-[22px]" />,
      label: "Publikasi dan Informasi",
      children: [
        {
          key: "berita",
          label: (
            <Link to="/profil/publikasi-dan-informasi/berita">Berita</Link>
          ),
          content: <ProfilBerita />,
        },
        {
          key: "siaran_pers",
          label: (
            <Link to="/profil/publikasi-dan-informasi/siaran_pers">
              Siaran Pers
            </Link>
          ),
          content: <ProfilSiaranPers />,
        },
        {
          key: "transparansi-kinerja",
          label: (
            <Link to="/profil/publikasi-dan-informasi/transparansi-kinerja">
              Transparasi Kinerja
            </Link>
          ),
          content: <ProfilTransparasiKinerja />,
        },
        {
          key: "daftar-informasi-publik",
          label: (
            <Link to="/profil/publikasi-dan-informasi/daftar-informasi-publik">
              Daftar Informasi Publik
            </Link>
          ),
          content: <ProfilDaftarInfoPublik />,
        },
        {
          key: "informasi-dikecualikan",
          label: (
            <Link to="/profil/publikasi-dan-informasi/informasi-dikecualikan">
              Informasi yang Dikecualikan
            </Link>
          ),
          content: <ProfilInfoDikecualikan />,
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const isBeritaRoute = location.pathname.includes("berita/view");
  const isSiaranPersRoute = location.pathname.includes("siaran_pers/view");

  useEffect(() => {
    if (isBeritaRoute) {
      setSelectedMenu("berita");
    } else if (isSiaranPersRoute) {
      setSelectedMenu("siaran_pers");
    } else {
      setSelectedMenu(endpoint);
    }
  }, [isBeritaRoute, isSiaranPersRoute, endpoint]);

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
    { title: "Profil" },
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
              style={{ borderRadius: "0 0.375rem 0.375rem 0"}} // Mengatur radius di atas kiri dan bawah kiri
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
        <Layout className="w-[0px] bg-white">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="relative"
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
              // margin: "0 0 0 65px",
              margin: isMobile ? "0 0 0 0px" : "0 0 0 65px",
              padding: isMobile ? "25px" : "0 0 55px 0",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {isBeritaRoute || isSiaranPersRoute ? (
              <Artikel />
            ) : (
              selectedSidebarItem?.content || "Content"
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
