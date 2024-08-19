import { Modal } from "antd"


export default function CustomModal({ children, isOpen, onOk, onCancel, title }) {

    return (
        <Modal title={title} open={isOpen} onOk={() => onOk()} onCancel={() => onCancel()}>
            {children}
        </Modal>
    )
}