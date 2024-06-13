import { useState } from 'react';
import {
  AppstoreOutlined,
  CloudTwoTone,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { FaCloudSunRain, FaEarthAmericas } from 'react-icons/fa6';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import PrakiraanCuacaLokasi from '../components/Fragments/PrakiraanCuacaLokasi';
import PrakiraanCuacaWaktu from '../components/Fragments/PrakiraanCuacaWaktu';
import PrakiraanCuacaMaritim from '../components/Fragments/PrakiraanCuacaMaritim';
import PrakiraanBerbasisDampak from '../components/Fragments/PrakiraanBerbasisDampak';
import CuacaPenerbangan from '../components/Fragments/CuacaPenerbangan';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: '1',
    icon: <FaCloudSunRain className='size-[24px]' />,
    label: 'Prakiraan Cuaca',
    children: [
      {
        key: '11',
        label: 'Berdasarkan Lokasi',
        content: <PrakiraanCuacaLokasi />,
      },
      {
        key: '12',
        label: 'Berdasarkan Waktu',
        content: <PrakiraanCuacaWaktu />,
      },
      {
        key: '13',
        label: 'Berdasarkan Jenis',
        children: [
          { key: '131', label: 'Penerbangan', content: <CuacaPenerbangan /> },
          { key: '132', label: 'Maritim', content: <PrakiraanCuacaMaritim /> },
        ],
      },
      {
        key: '14',
        label: 'Berbasis Dampak',
        content: <PrakiraanBerbasisDampak />,
      },
    ],
  },
  {
    key: '2',
    icon: <FaEarthAmericas className='size-[22px]' />,
    label: 'Pengindaraan Jauh',
    children: [
      {
        key: '21',
        label: 'Citra Satelit',
        content: 'Konten Citra Satelit',
      },
      {
        key: '22',
        label: 'Citra Radar',
        content: 'Konten Citra Radar',
      },
    ],
  },
];

export default function Cuaca() {

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('11');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    setSelectedMenu(key);
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
    { title: 'Cuaca' },
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
    <div className='flex justify-center w-full mt-[135px]'>
      <Layout className='max-w-[1280px] px-6 bg-white'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['11']}
            selectedKeys={[selectedMenu]}
            onClick={handleMenuClick}
            items={sidebarItems}
            className='w-[110%] h-full pt-2'
          />
        </Sider>
        <Layout className='bg-white'>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className='relative ml-5'
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Breadcrumb
              items={breadcrumbItems}
              className="px-6 mb-4 absolute top-5 left-10 font-pt-sans font-semibold"
            />
          </Header>
          <Content
            style={{
              margin: '0 0 0 84px',
              padding: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedSidebarItem?.content || 'Content'}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}