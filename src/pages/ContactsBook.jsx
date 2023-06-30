import React, { useState } from "react";
import Button from "../components/UI/button/Button";

import "../assets/styles/ContactsBook.scss";
import Modal from "../components/UI/modal/MOdal";
import Input from "../components/UI/Input/Input";

export default function ContactsBook() {
    const [visible, setVisible] = useState(false);
    const [contacts, setContacts] = useState([]);

    return (
        <div className="contacts-book">
            <Button onClick={() => setVisible(true)}>Add Contact</Button>
            <h2 className="contacts-book__title">Contacts list</h2>
            <div className="contacts-book__list"></div>

            <Modal visible={visible} setVisible={setVisible}>
                <form>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                </form>
            </Modal>
        </div>
    );
}
