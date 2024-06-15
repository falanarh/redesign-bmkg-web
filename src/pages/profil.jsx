import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {  FaEarthAmericas, FaRegBuilding } from 'react-icons/fa6';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import ProfilSejarah from '../components/Fragments/ProfilSejarah';
import ProfilLogo from '../components/Fragments/ProfilLogo';
import ProfilVisiMisi from '../components/Fragments/ProfilVisiMisi';
import ProfilTugasFungsi from '../components/Fragments/ProfilTugasFungsi';
import ProfilStrukturOrganisasi from '../components/Fragments/ProfilStrukturOrganisasi';
import ProfilTransparasiKinerja from '../components/Fragments/ProfilTransparasiKinerja';
import ProfilDaftarInfoPublik from '../components/Fragments/ProfilDaftarInfoPublik';
import ProfilInfoDikecualikan from '../components/Fragments/ProfilInfoDikecualikan';
import ProfilKegiatanInternasional from '../components/Fragments/ProfilKegiatanIntenasional';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: '1',
    icon: <FaRegBuilding className='size-[24px]' />,
    label: 'Profil BMKG',
    children: [
      {
        key: '11',
        label: 'Sejarah',
        content: <ProfilSejarah />,
      },
      {
        key: '12',
        label: 'Logo',
        content: <ProfilLogo/>,
      },
      {
        key: '13',
        label: 'Visi dan Misi',
        content: <ProfilVisiMisi/>,
      },
      {
        key: '14',
        label: 'Tugas dan Fungsi',
        content: <ProfilTugasFungsi />,
      },
      {
        key: '15',
        label: 'Struktur Organisasi',
        content: <ProfilStrukturOrganisasi />,
      },
      {
        key: '16',
        label: 'Balai Besar MKG',
        // content: <PrakiraanBerbasisDampak />,
      },
      {
        key: '17',
        label: 'Stasiun MKG',
        // content: <PrakiraanBerbasisDampak />,
      },
    ],
  },
  {
    key: '2',
    icon: <FaEarthAmericas className='size-[22px]' />,
    label: '  Publikasi dan Informasi',
    children: [
      {
        key: '21',
        label: 'Kegiatan Internasional',
        content: <ProfilKegiatanInternasional />,
      },
      {
        key: '22',
        label: 'Transparasi Kinerja',
        content: <ProfilTransparasiKinerja/>,
      },
      {
        key: '23',
        label: 'Daftar Informasi Publik',
        content: <ProfilDaftarInfoPublik/>,
      },
      {
        key: '24',
        label: 'Informasi yang Dikecualikan',
        content: <ProfilInfoDikecualikan />,
      },
    ],
  },
];

export default function Profil() {

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
    { title: 'Profil' },
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
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['11']}
            selectedKeys={[selectedMenu]}
            onClick={handleMenuClick}
            items={sidebarItems}
            className='w-[125%] h-full pt-2'
          />
        </Sider>
        <Layout className='bg-white'>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className='relative ml-8'
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
              margin: '0 0 0 96px',
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