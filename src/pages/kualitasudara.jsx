/* eslint-disable react/prop-types */
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import "./index.css";
import { Link } from "react-router-dom";
import { MdOutlineTimeline, MdOutlineTroubleshoot } from "react-icons/md";
import SulfurDioksida from "../components/Fragments/SulfurDioksida";
import NitrogenDioksida from "../components/Fragments/NitogenDioksida";
import Partikulat from "../components/Fragments/Partikulat";
import KimiaAirHujan from "../components/Fragments/KimiaAirHujan";
import GasRumahKaca from "../components/Fragments/GasRumahKaca";
import PartikulatPm from "../components/Fragments/PartikulatPm";
import { useMediaQuery } from "react-responsive";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";

const { Header, Sider, Content } = Layout;

export default function KualitasUdara({ endpoint = "partikulat-pm" }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [mobileCollapsed, setMobileCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarItems = [
    {
      key: "pemantauan-kualitas-udara",
      icon: <MdOutlineTroubleshoot className="size-[24px]" />,
      label: "Pemantauan Kualitas Udara",
      children: [
        {
          key: "partikulat-pm",
          label: (
            <Link to="/kualitas-udara/pemantauan-kualitas-udara/partikulat-pm">
              Partikulat (PM2.5)
            </Link>
          ),
          content: <PartikulatPm />,
        },
        {
          key: "gas-rumah-kaca",
          label: (
            <Link to="/kualitas-udara/pemantauan-kualitas-udara/gas-rumah-kaca">
              Gas Rumah Kaca
            </Link>
          ),
          content: <GasRumahKaca />,
        },
      ],
    },
    {
      key: "analisis-kualitas-udara",
      icon: <MdOutlineTimeline className="size-[24px]" />,
      label: "Analisis Kualitas Udara",
      children: [
        // {
        //   key: 'ozon-permukaan',
        //   label: <Link to="/kualitas-udara/analisis-kualitas-udara/ozon-permukaan">Ozon Permukaan</Link>,
        //   content: 'ozon-permukaan',
        // },
        {
          key: "sulfur-dioksida",
          label: (
            <Link to="/kualitas-udara/analisis-kualitas-udara/sulfur-dioksida">
              Sulfur Dioksida
            </Link>
          ),
          content: <SulfurDioksida isMobile={isMobile} />,
        },
        {
          key: "nitrogen-dioksida",
          label: (
            <Link to="/kualitas-udara/analisis-kualitas-udara/nitrogen-dioksida">
              Nitrogen Dioksida
            </Link>
          ),
          content: <NitrogenDioksida isMobile={isMobile} />,
        },
        {
          key: "partikulat",
          label: (
            <Link to="/kualitas-udara/analisis-kualitas-udara/partikulat">
              Partikulat (SPM)
            </Link>
          ),
          content: <Partikulat isMobile={isMobile} />,
        },
        {
          key: "kimia-air-hujan",
          label: (
            <Link to="/kualitas-udara/analisis-kualitas-udara/kimia-air-hujan">
              Kimia Air Hujan
            </Link>
          ),
          content: <KimiaAirHujan isMobile={isMobile} />,
        },
      ],
    },
    // {
    //   key: 'prakiraan-kualitas-udara',
    //   icon: <MdOutlineWaves className='size-[22px]' />,
    //   label: <Link to="/kualitas-udara/prakiraan-kualitas-udara">Prakiraan Kualitas Udara</Link>,
    //   content: 'prakiraan-kualitas-udara',
    //   // children: [
    //   //   {
    //   //     key: '21',
    //   //     label: 'Citra Satelit',
    //   //     content: <CitraSatelit />,
    //   //   },
    //   //   {
    //   //     key: '22',
    //   //     label: 'Citra Radar',
    //   //     content: <CitraRadar />,
    //   //   },
    //   // ],
    // },
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
    { title: "Cuaca" },
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
            <Button
              onClick={handleToggleCollapsed}
              className={`absolute z-10 px-1 m-0 border-none shadow-none bg-active top-4 ${
                mobileCollapsed ? "left-[12px]" : "left-[25px]"
              }`}
            >
              {mobileCollapsed ? (
                <RiMenuFold4Fill className="text-2xl text-white" />
              ) : (
                <RiMenuUnfold4Fill className="text-2xl text-white" />
              )}
            </Button>
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
            className="relative"
          >
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
            <Breadcrumb
              items={breadcrumbItems}
              className="absolute px-6 mb-4 font-semibold top-5 left-10 font-pt-sans"
            />
          </Header>
          <Content
            style={{
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
