import React, {FC} from 'react';
import DaumPostcode from 'react-daum-postcode';
import {Modal} from "antd";

interface DaumProps {
    isModalVisible: boolean;
    setModalVisible: (data: boolean) => void;
    setAddress: any;
}

const DaumPostModal: FC<DaumProps> = ({
                           isModalVisible,
                           setModalVisible,
                           setAddress
                       }) => {
    return (
        <Modal
            visible={isModalVisible}
            closable={false}
            footer={null}
            onCancel={() => setModalVisible(false)}
        >
            <DaumPostcode
                autoClose={false}
                onComplete={(data) => {
                    const {zonecode, address, buildingName} = data;
                    const addressBuilding = buildingName ? `${address} (${buildingName})` : address;

                    setAddress({
                        postcode: zonecode,
                        address: addressBuilding
                    })
                    setModalVisible(false);
                }}
            />
        </Modal>
    );
};

export default DaumPostModal;