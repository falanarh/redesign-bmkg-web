import { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import KontenGbTerkini from '../components/Fragments/KontenGbTerkini';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Gempa Bumi',
    children: [
      {
        key: '11',
        label: 'Gempa Bumi Dirasakan',
      },
      {
        key: '12',
        label: 'Gempa Bumi Real Time',
      },
      {
        key: '13',
        label: 'Antisipasi Gempa Bumi',
      },
      {
        key: '14',
        label: 'Skala Intesitas Gempa Bumi',
      },
      {
        key: '15',
        label: 'Data Gempa Bumi',
      },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Tsunami',
    children: [
      {
        key: '21',
        label: 'Option 1',
      },
      {
        key: '22',
        label: 'Option 2',
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Seismologi Teknik',
    children: [
      {
        key: '31',
        label: 'Option 1',
      },
      {
        key: '32',
        label: 'Option 2',
      },
      {
        key: '33',
        label: 'Option 3',
      },
      {
        key: '34',
        label: 'Option 4',
      },
    ],
  },
  {
    key: '4',
    icon: <SettingOutlined />,
    label: 'Geofisika Potensial & Tanda Waktu',
    children: [
      {
        key: '41',
        label: 'Option 1',
      },
      {
        key: '42',
        label: 'Option 2',
      },
      {
        key: '43',
        label: 'Option 3',
      },
      {
        key: '44',
        label: 'Option 4',
      },
    ],
  },
];

const breadcrumbItem = [
  {
    title: <a href="">Gempa Bumi & Tsunami</a>,
  },
  {
    title: <a href="">Gempa Bumi</a>,
  },
  {
    title: 'Gempa Bumi Terkini',
  },
];

export default function GempaBumi() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className='flex justify-center w-full'>
      <Layout className='max-w-[1280px] px-6 bg-white'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
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
              items={breadcrumbItem}
              className="px-6 mb-4 absolute top-5 left-10 font-pt-sans font-semibold"
            />
          </Header>
          <Content
            style={{
              margin: '8px 64px',
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className=''
          >
            <KontenGbTerkini />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}