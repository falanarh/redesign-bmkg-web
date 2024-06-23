import { Table, ConfigProvider } from 'antd';
import { Modal } from '@nextui-org/react';
import { FaBuilding, FaEnvelope, FaSquarePhone } from 'react-icons/fa6';

const ModalTable = ({ visible, onClose, data }) => {
    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            ellipsis: false,
            width: 6,
        },
        {
            title: "Stasiun / UPT",
            dataIndex: "stasiun",
            key: "stasiun",
            render: (stasiun) => (
                <>
                    {stasiun.map((s, index) => (
                        s && <p key={index}>{s}</p>
                    ))}
                </>
            ),
            ellipsis: false,
            width: 10,
        },
        {
            title: "Alamat",
            dataIndex: "alamat",
            key: "alamat",
            render: (object) => (
                <div>
                    <p className="flex items-center gap-2"><FaBuilding />{object.jalan}</p>

                    {Array.isArray(object.telp) ? (
                        object.telp.map((telpItem, index) => (
                            telpItem && (
                                <p key={index} className="flex items-center gap-2">
                                    {telpItem && <FaSquarePhone />}{telpItem}
                                </p>
                            )
                        ))
                    ) : (
                        object.telp && (
                            <p className="flex items-center gap-2">
                                {object.telp && <FaSquarePhone />}{object.telp}
                            </p>
                        )
                    )}
                    {object.email && (
                        <p className="flex items-center gap-2"><FaEnvelope />{object.email}</p>
                    )}
                </div>
            ),
            ellipsis: false,
            width: 12,
        },
        {
            title: "Kepala",
            dataIndex: "kepala",
            key: "kepala",
            ellipsis: false,
            width: 10,
        },
    ];

    return (
        <Modal open={visible} onClose={onClose} width="70%" closeButton>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            colorPrimary: "#FFFFFF",
                            colorBgContainer: "#EDF2F7",
                            headerBg: "#1C2B78",
                            headerSplitColor: "#1C2B78",
                            headerSortHoverBg: "#1C2B78",
                            headerSortActiveBg: "#1C2B78",
                            fixedHeaderSortActiveBg: "#1C2B78",
                            headerColor: "#ffffff",
                            rowHoverBg: "#ced2d7",
                            borderColor: "#FFFFFF",
                            bodySortBg: "#fdfefe",
                            fontFamily: "PT Sans",
                            algorithm: true, // Enable algorithm
                            cellPaddingBlock: 8,
                        },
                    },
                }}
            >
                <Table columns={columns} dataSource={[data]} pagination={false} />
            </ConfigProvider>
        </Modal>
    );
};

export default ModalTable;
