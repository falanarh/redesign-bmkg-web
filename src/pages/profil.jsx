/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {  FaBookOpenReader, FaEarthAmericas, FaRegBuilding } from 'react-icons/fa6';
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
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Artikel from '../components/Fragments/Artikel';
import ProfilStasiunMKG from '../components/Fragments/ProfilStasiunMKG';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: 'profil-bmkg',
    icon: <FaRegBuilding className='size-[24px]' />,
    label: 'Profil BMKG',
    children: [
      {
        key: 'sejarah',
        label: <Link to="/profil/profil-bmkg/sejarah">Sejarah</Link>,
        content: <ProfilSejarah />,
      },
      {
        key: 'logo',
        label: <Link to="/profil/profil-bmkg/logo">Logo</Link>,
        content: <ProfilLogo />,
      },
      {
        key: 'visi-dan-misi',
        label: <Link to="/profil/profil-bmkg/visi-dan-misi">Visi dan Misi</Link>,
        content: <ProfilVisiMisi />,
      },
      {
        key: 'tugas-dan-fungsi',
        label: <Link to="/profil/profil-bmkg/tugas-dan-fungsi">Tugas dan Fungsi</Link>,
        content: <ProfilTugasFungsi />,
      },
      {
        key: 'struktur-organisasi',
        label: <Link to="/profil/profil-bmkg/struktur-organisasi">Struktur Organisasi</Link>,
        content: <ProfilStrukturOrganisasi />,
      },
      {
        key: 'balai-besar-mkg',
        label: <Link to="/profil/profil-bmkg/balai-besar-mkg">Balai Besar MKG</Link>,
        // content: <PrakiraanBerbasisDampak />,
      },
      {
        key: 'stasion-mkg',
        label: <Link to="/profil/profil-bmkg/stasion-mkg">Stasiun MKG</Link>,
        // content: <PrakiraanBerbasisDampak />,
      },
    ],
  },
  {
    key: 'publikasi-dan-informasi',
    icon: <FaEarthAmericas className='size-[22px]' />,
    label: 'Publikasi dan Informasi',
    children: [
      {
        key: 'kegiatan-internasional',
        label: <Link to="/profil/publikasi-dan-informasi/kegiatan-internasional">Kegiatan Internasional</Link>,
        content: <ProfilKegiatanInternasional />,
      },
      {
        key: 'transparansi-kinerja',
        label: <Link to="/profil/publikasi-dan-informasi/transparansi-kinerja">Transparasi Kinerja</Link>,
        content: <ProfilTransparasiKinerja />,
      },
      {
        key: 'daftar-informasi-publik',
        label: <Link to="/profil/publikasi-dan-informasi/daftar-informasi-publik">Daftar Informasi Publik</Link>,
        content: <ProfilDaftarInfoPublik />,
      },
      {
        key: 'informasi-dikecualikan',
        label: <Link to="/profil/publikasi-dan-informasi/informasi-dikecualikan">Informasi yang Dikecualikan</Link>,
        content: <ProfilInfoDikecualikan />,
      },
    ],
  },
];

export default function Profil({ endpoint = 'sejarah'}) {
  const sidebarItems = [
    {
      key: 'profil-bmkg',
      icon: <FaRegBuilding className='size-[24px]' />,
      label: 'Profil BMKG',
      children: [
        {
          key: 'sejarah',
          label: <Link to="/profil/profil-bmkg/sejarah">Sejarah</Link>,
          content: <ProfilSejarah />,
        },
        {
          key: 'logo',
          label: <Link to="/profil/profil-bmkg/logo">Logo</Link>,
          content: <ProfilLogo />,
        },
        {
          key: 'visi-dan-misi',
          label: <Link to="/profil/profil-bmkg/visi-dan-misi">Visi dan Misi</Link>,
          content: <ProfilVisiMisi />,
        },
        {
          key: 'tugas-dan-fungsi',
          label: <Link to="/profil/profil-bmkg/tugas-dan-fungsi">Tugas dan Fungsi</Link>,
          content: <ProfilTugasFungsi />,
        },
        {
          key: 'struktur-organisasi',
          label: <Link to="/profil/profil-bmkg/struktur-organisasi">Struktur Organisasi</Link>,
          content: <ProfilStrukturOrganisasi />,
        },
        {
          key: 'balai-besar-mkg',
          label: <Link to="/profil/profil-bmkg/balai-besar-mkg">Balai Besar MKG</Link>,
          // content: <PrakiraanBerbasisDampak />,
        },
        {
          key: 'stasion-mkg',
          label: <Link to="/profil/profil-bmkg/stasion-mkg">Stasiun MKG</Link>,
          content: <ProfilStasiunMKG />,
        },
      ],
    },
    {
      key: 'publikasi-dan-informasi',
      icon: <FaBookOpenReader className='size-[22px]' />,
      label: 'Publikasi dan Informasi',
      children: [
        {
          key: 'kegiatan-internasional',
          label: <Link to="/profil/publikasi-dan-informasi/kegiatan-internasional">Kegiatan Internasional</Link>,
          content: <ProfilKegiatanInternasional />,
        },
        {
          key: 'transparansi-kinerja',
          label: <Link to="/profil/publikasi-dan-informasi/transparansi-kinerja">Transparasi Kinerja</Link>,
          content: <ProfilTransparasiKinerja />,
        },
        {
          key: 'daftar-informasi-publik',
          label: <Link to="/profil/publikasi-dan-informasi/daftar-informasi-publik">Daftar Informasi Publik</Link>,
          content: <ProfilDaftarInfoPublik />,
        },
        {
          key: 'informasi-dikecualikan',
          label: <Link to="/profil/publikasi-dan-informasi/informasi-dikecualikan">Informasi yang Dikecualikan</Link>,
          content: <ProfilInfoDikecualikan />,
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(endpoint);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const isArticleRoute = location.pathname.includes('artikel');

  useEffect(() => {
    if (isArticleRoute) {
      setSelectedMenu('kegiatan-internasional');
    } else {
      setSelectedMenu(endpoint);
    }
  }, [isArticleRoute, endpoint]);

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
        <Sider trigger={null} collapsible collapsed={collapsed} width={242}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['11']}
            selectedKeys={[selectedMenu]}
            onClick={handleMenuClick}
            items={sidebarItems}
            className=' h-full pt-2'
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
            {isArticleRoute ? (
              <Artikel />
            ) : (
              selectedSidebarItem?.content || 'Content'
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}