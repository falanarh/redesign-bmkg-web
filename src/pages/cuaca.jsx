import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FaCloudSunRain, FaEarthAmericas } from "react-icons/fa6";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import "./index.css";
import PrakiraanCuacaLokasi from "../components/Fragments/PrakiraanCuacaLokasi";
import PrakiraanCuacaWaktu from "../components/Fragments/PrakiraanCuacaWaktu";
import PrakiraanCuacaMaritim from "../components/Fragments/PrakiraanCuacaMaritim";
import PrakiraanBerbasisDampak from "../components/Fragments/PrakiraanBerbasisDampak";
import CitraSatelit from "../components/Fragments/CitraSatelit";
import PrakiraanCuacaPenerbangan from "../components/Fragments/PrakiraanCuacaPenerbangan";
import CitraRadar from "../components/Fragments/CitraRadar";
import { useMediaQuery } from "react-responsive";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Cuaca({ endpoint }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sidebarItems = [
    {
      key: "prakiraan-cuaca",
      icon: <FaCloudSunRain className="size-[24px]" />,
      label: <Link to="/cuaca/prakiraan-cuaca">Prakiraan Cuaca</Link>,
      children: [
        {
          key: "berdasarkan-lokasi",
          label: (
            <Link to="/cuaca/prakiraan-cuaca/berdasarkan-lokasi">
              Berdasarkan Lokasi
            </Link>
          ),
          content: <PrakiraanCuacaLokasi isMobile={isMobile} />,
        },
        {
          key: "berdasarkan-waktu",
          label: (
            <Link to="/cuaca/prakiraan-cuaca/berdasarkan-waktu">
              Berdasarkan Waktu
            </Link>
          ),
          content: <PrakiraanCuacaWaktu />,
        },
        {
          key: "berdasarkan-jenis",
          label: "Berdasarkan Jenis",
          children: [
            {
              key: "penerbangan",
              label: (
                <Link to="/cuaca/prakiraan-cuaca/berdasarkan-jenis/penerbangan">
                  Penerbangan
                </Link>
              ),
              content: <PrakiraanCuacaPenerbangan isMobile={isMobile} />,
            },
            {
              key: "maritim",
              label: (
                <Link to="/cuaca/prakiraan-cuaca/berdasarkan-jenis/maritim">
                  Maritim
                </Link>
              ),
              content: <PrakiraanCuacaMaritim />,
            },
          ],
        },
        {
          key: "berbasis-dampak",
          label: (
            <Link to="/cuaca/prakiraan-cuaca/berbasis-dampak">
              Berbasis Dampak
            </Link>
          ),
          content: <PrakiraanBerbasisDampak isMobile={isMobile} />,
        },
      ],
    },
    {
      key: "pengindaraan-jauh",
      icon: <FaEarthAmericas className="size-[22px]" />,
      label: <Link to="/cuaca/pengindaraan-jauh">Pengindaraan Jauh</Link>,
      children: [
        {
          key: "citra-satelit",
          label: (
            <Link to="/cuaca/pengindaraan-jauh/citra-satelit">
              Citra Satelit
            </Link>
          ),
          content: <CitraSatelit />,
        },
        {
          key: "citra-radar",
          label: (
            <Link to="/cuaca/pengindaraan-jauh/citra-radar">Citra Radar</Link>
          ),
          content: <CitraRadar />,
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
    <div className="flex justify-center w-full mt-[150px] overflow-x-hidden">
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
            className="relative ml-5"
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
              className="absolute mb-4 font-semibold sm:px-6 top-5 left-10 font-pt-sans"
            />
          </Header>
          <Content
            style={{
              // margin: "0 0 0 84px",
              margin: isMobile ? "0 0 0 0px" : "0 0 0 65px",
              padding: isMobile ? "25px" : "0 0 55px 0",
              // padding: 0,
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
