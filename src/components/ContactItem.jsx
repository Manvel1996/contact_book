import React, { useState } from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";

import ContactForm from "./ContactForm";
import ModalConfirm from "./UI/confirmModal/ModalConfirm";
import Modal from "./UI/modal/Modal";
import { removeContact } from "../redux/features/contacts/ContactsActions";

import "../assets/styles//components/ContactItem.scss";

export default function ContactItem({ contact }) {
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const dispatch = useDispatch();

  const id = contact?.id;

  function closeModal() {
    setVisible(false);
  }

  function confirmFunc() {
    dispatch(removeContact(id));
  }

  return (
    <div className="contact-item">
      <div className="contact-info">
        <img
          className="contact-info__img"
          src={
            contact.photoUrl
              ? contact.photoUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHNVV96RD44x7AcrTyk1kCptNtJOgvD8Hwg&usqp=CAU"
          }
        />

        <div
          className={`contact-info__status ${
            contact.status === "true"
              ? "contact-info__status--green"
              : "contact-info__status--red"
          }`}
        />
      </div>

      <p className="contact-item__name">{contact.userName}</p>
      <p className="contact-item__surname">{contact.surname}</p>
      {contact.email && <p className="contact-item__email">{contact.email}</p>}
      <p className="contact-item__phone">{contact.phone}</p>

      <div className="contact-buttons">
        <AiFillEdit
          className="contact-buttons__button"
          onClick={() => setVisible(true)}
        />
        <AiFillDelete
          className="contact-buttons__button"
          onClick={() => setVisibleConfirm(true)}
        />
      </div>

      <ModalConfirm
        title="Are you sure you want to delete the contact?"
        visibleConfirm={visibleConfirm}
        setVisibleConfirm={setVisibleConfirm}
        confirmFunc={confirmFunc}
      />

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm
          closeModal={closeModal}
          editedContact={contact}
          visible={visible}
        />
      </Modal>
    </div>
  );
}
