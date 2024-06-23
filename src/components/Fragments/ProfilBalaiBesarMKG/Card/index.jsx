import { Card, Button } from '@nextui-org/react';
import ModalTable from '../Tabel';
const ProfilBalaiBesarMKGCard = ({ title, description, data }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>{description}</Card.Body>
                <Card.Footer>
                    <Button onClick={() => setModalVisible(true)}>Selengkapnya</Button>
                </Card.Footer>
            </Card>
            <ModalTable
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                data={data}
            />
        </>
    );
};

export default ProfilBalaiBesarMKGCard;