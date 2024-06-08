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

const { Header, Sider, Content } = Layout;

const items = [
    {
      key: '1',
      icon: <MailOutlined />,
      label: 'Navigation One',
      children: [
        {
          key: '11',
          label: 'Option 1',
        },
        {
          key: '12',
          label: 'Option 2',
        },
        {
          key: '13',
          label: 'Option 3',
        },
        {
          key: '14',
          label: 'Option 4',
        },
      ],
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Navigation Two',
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
      label: 'Navigation Three',
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
                        items={items}
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
                            items={[
                                {
                                    title: 'Home',
                                },
                                {
                                    title: <a href="">Application Center</a>,
                                },
                                {
                                    title: <a href="">Application List</a>,
                                },
                                {
                                    title: 'An Application',
                                },
                            ]}
                            className="px-6 mb-4 absolute top-5 left-10 font-pt-sans font-semibold"
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}