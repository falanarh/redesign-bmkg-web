import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { FaEarthAmericas, FaHouseCrack, FaHouseFloodWater, FaRegBuilding, FaWater } from 'react-icons/fa6';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import GBAntisipasi from '../components/Fragments/GempaBumiAntisipasi';
import GBSkalaMMI from '../components/Fragments/GempaBumiSkalaMMI';
import GBSkalaIntesitas from '../components/Fragments/GempaBumiSkalaIntesitas';
import GempaBumiTerkini from '../components/Fragments/GempaBumiTerkini';
import GempaBumiRealTime from '../components/Fragments/GempaBumiRealTime';
import GempaBumiDirasakan from '../components/Fragments/GempaBumiDirasakan';
import GempaBumiTsunami from '../components/Fragments/GempaBumiTsunami';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: '1',
    icon: <FaHouseCrack className='size-[24px]' />,
    label: 'Gempa Bumi',
    children: [
      {
        key: '11',
        label: 'Gempa Bumi Terkini',
        content: <GempaBumiTerkini />,
      },
      {
        key: '12',
        label: 'Gempa Bumi Dirasakan',
        content: <GempaBumiDirasakan/>,
      },
      {
        key: '13',
        label: 'Gempa Bumi Real Time',
        content: <GempaBumiRealTime/>,
      },
      {
        key: '14',
        label: 'Antisipasi Gempa Bumi',
        content: <GBAntisipasi />,
      },
      {
        key: '15',
        label: 'Skala Intesitas Gempa Bumi',
        content: <GBSkalaIntesitas />,
      },
      {
        key: '16',
        label: 'Skala MMI',
        content: <GBSkalaMMI />,
      },
    ],
  },
  {
    key: '2',
    icon: <FaHouseFloodWater className='size-[22px]' />,
    label: 'Tsunami',
    content: <GempaBumiTsunami />
  },
];

export default function GempaBumi() {

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
    { title: 'Gempa Bumi & Tsunami' },
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
    <div className='flex justify-center w-full mt-[140px]'>
      <Layout className='max-w-[1280px] px-6 bg-white'>
        <Sider trigger={null} collapsible collapsed={collapsed} width={288}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['11']}
            selectedKeys={[selectedMenu]}
            onClick={handleMenuClick}
            items={sidebarItems}
            className='h-full pt-2'
          />
        </Sider>
        <Layout className='bg-white'>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className='relative'
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
              margin: '0 0 0 65px',
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