/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import { Link } from 'react-router-dom';
import { MdOutlineTimeline, MdOutlineTroubleshoot } from 'react-icons/md';
import SulfurDioksida from '../components/Fragments/SulfurDioksida';
import NitrogenDioksida from '../components/Fragments/NitogenDioksida';
import Partikulat from '../components/Fragments/Partikulat';
import KimiaAirHujan from '../components/Fragments/KimiaAirHujan';
import GasRumahKaca from '../components/Fragments/GasRumahKaca';
import PartikulatPm from '../components/Fragments/PartikulatPm';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: 'pemantauan-kualitas-udara',
    icon: <MdOutlineTroubleshoot className='size-[24px]' />,
    label: 'Pemantauan Kualitas Udara',
    children: [
      {
        key: 'partikulat-pm',
        label: <Link to="/kualitas-udara/pemantauan-kualitas-udara/partikulat-pm">Partikulat (PM2.5)</Link>,
        content: <PartikulatPm />,
      },
      {
        key: 'gas-rumah-kaca',
        label: <Link to="/kualitas-udara/pemantauan-kualitas-udara/gas-rumah-kaca">Gas Rumah Kaca</Link>,
        content: <GasRumahKaca />,
      },
    ],
  },
  {
    key: 'analisis-kualitas-udara',
    icon: <MdOutlineTimeline className='size-[24px]'/>,
    label: 'Analisis Kualitas Udara',
    children: [
      // {
      //   key: 'ozon-permukaan',
      //   label: <Link to="/kualitas-udara/analisis-kualitas-udara/ozon-permukaan">Ozon Permukaan</Link>,
      //   content: 'ozon-permukaan',
      // },
      {
        key: 'sulfur-dioksida',
        label: <Link to="/kualitas-udara/analisis-kualitas-udara/sulfur-dioksida">Sulfur Dioksida</Link>,
        content: <SulfurDioksida />,
      },
      {
        key: 'nitrogen-dioksida',
        label: <Link to="/kualitas-udara/analisis-kualitas-udara/nitrogen-dioksida">Nitrogen Dioksida</Link>,
        content: <NitrogenDioksida />,
      },
      {
        key: 'partikulat',
        label: <Link to="/kualitas-udara/analisis-kualitas-udara/partikulat">Partikulat (SPM)</Link>,
        content: <Partikulat />,
      },
      {
        key: 'kimia-air-hujan',
        label: <Link to="/kualitas-udara/analisis-kualitas-udara/kimia-air-hujan">Kimia Air Hujan</Link>,
        content: <KimiaAirHujan />,
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

export default function KualitasUdara({ endpoint = 'partikulat-pm'}) {

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
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
    <div className='flex justify-center w-full mt-[130px]'>
      <Layout className='max-w-[1280px] px-6 bg-white'>
        <Sider trigger={null} collapsible collapsed={collapsed} width={280}>
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
              className="absolute px-6 mb-4 font-semibold top-5 left-10 font-pt-sans"
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