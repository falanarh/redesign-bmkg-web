import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { FaEarthAmericas, FaRegBuilding } from 'react-icons/fa6';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import "./index.css";
import IklimHariTanpaHujan from '../components/Fragments/IklimHariTanpaHujan';
import BuletinInformasiIklim from '../components/Fragments/IklimBuletinInfo';
import IklimInformasiHujanBulanan from '../components/Fragments/IklimInfoHujanBulanan';
import IklimDinamikaAtmosfir from '../components/Fragments/IklimDinamikaAtmosfir';
import IndeksPresipitasiTerstandarisasi from '../components/Fragments/IklimIndeksPresipitasiTerstandarisasi';
import AirTersediaBagiTanaman from '../components/Fragments/IklimAirTersediaBagiTanaman';
import PrakiraanIklim from '../components/Fragments/IklimPrakiraanIklim';
import AnalisisLajuPerubahan from '../components/Fragments/IklimAnalisisLajuPerubahan';
import FaktaPerubahanIklim from '../components/Fragments/IklimFaktaPerubahanIklim';
import ProyeksiPerubahanIklim from '../components/Fragments/IklimProyeksiPerubahanIklim';
import AnomaliSuhuUdara from '../components/Fragments/IklimAnomaliSuhuUdara';

const { Header, Sider, Content } = Layout;

const sidebarItems = [
    {
        key: '1',
        icon: <FaRegBuilding className='size-[24px]' />,
        label: 'Monitoring Iklim',
        children: [
            {
                key: '11',
                label: 'Informasi Hari Tanpa Hujan',
                content: <IklimHariTanpaHujan />,
            },
            {
                key: '12',
                label: 'Buletin Iklim',
                content: <BuletinInformasiIklim />,
            },
        ],
    },
    {
        key: '2',
        icon: <FaEarthAmericas className='size-[22px]' />,
        label: 'Analisis Iklim',
        // content: <PrakiraanBerbasisDampak />
        children: [
            {
                key: '21',
                label: 'Informasi Hujan Bulanan',
                content: <IklimInformasiHujanBulanan />,
            },
            {
                key: '22',
                label: 'Dinamika Atmosfir',
                content: <IklimDinamikaAtmosfir />,
            },
            {
                key: '23',
                label: 'Indeks Presipitasi Terstandarisasi',
                content: <IndeksPresipitasiTerstandarisasi />,
            },
            {
                key: '24',
                label: 'Air Tersedia Bagi Tanaman (ATi)',
                content: <AirTersediaBagiTanaman />,
            },
        ],
    },
    {
        key: '3',
        icon: <FaEarthAmericas className='size-[22px]' />,
        label: 'Prakiraan Iklim',
        content: <PrakiraanIklim />
    },
    {
        key: '4',
        icon: <FaEarthAmericas className='size-[22px]' />,
        label: 'Perubahan Iklim',
        // content: <PrakiraanBerbasisDampak />
        children: [
            {
                key: '41',
                label: 'Anomali Suhu Udara',
                content: <AnomaliSuhuUdara />,
            },
            {
                key: '42',
                label: 'Analisis Laju Perubahan',
                content: <AnalisisLajuPerubahan />,
            },
            {
                key: '43',
                label: 'Fakta Perubahan Iklim',
                content: <FaktaPerubahanIklim />,
            },
        ],
    },
    {
        key: '5',
        icon: <FaEarthAmericas className='size-[22px]' />,
        label: 'Proyeksi Perubahan Iklim',
        content: <ProyeksiPerubahanIklim />
    },
];

export default function Iklim() {

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
        { title: 'Iklim' },
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
                <Sider trigger={null} collapsible collapsed={collapsed} width={270}>
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
                        className='relative '
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