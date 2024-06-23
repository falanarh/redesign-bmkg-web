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

const { Header, Sider, Content } = Layout;

export default function Cuaca() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sidebarItems = [
    {
      key: "1",
      icon: <FaCloudSunRain className="size-[24px]" />,
      label: "Prakiraan Cuaca",
      children: [
        {
          key: "11",
          label: "Berdasarkan Lokasi",
          content: <PrakiraanCuacaLokasi />,
        },
        {
          key: "12",
          label: "Berdasarkan Waktu",
          content: <PrakiraanCuacaWaktu />,
        },
        {
          key: "13",
          label: "Berdasarkan Jenis",
          children: [
            {
              key: "131",
              label: "Penerbangan",
              content: <PrakiraanCuacaPenerbangan isMobile={isMobile} />,
            },
            {
              key: "132",
              label: "Maritim",
              content: <PrakiraanCuacaMaritim />,
            },
          ],
        },
        {
          key: "14",
          label: "Berbasis Dampak",
          content: <PrakiraanBerbasisDampak isMobile={isMobile} />,
        },
      ],
    },
    {
      key: "2",
      icon: <FaEarthAmericas className="size-[22px]" />,
      label: "Pengindaraan Jauh",
      children: [
        {
          key: "21",
          label: "Citra Satelit",
          content: <CitraSatelit />,
        },
        {
          key: "22",
          label: "Citra Radar",
          content: <CitraRadar />,
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("11");
  const [mobileCollapsed, setMobileCollapsed] = useState(false);
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
