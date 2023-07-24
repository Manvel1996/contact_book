import React, { useState } from "react";

import { useSelector } from "react-redux";

import ContactsFilter from "../components/ContactsFilter";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";

import {
  CONTACT_PAGE_GET_COUNT,
  CONTACT_TYPE,
} from "../constants/contactConstants";

import {
  getContacts,
  getContactsTypes,
} from "../redux/features/auth/AuthActions";

import "../assets/styles/pages/ContactsBook.scss";

export default function AllContacts() {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState(CONTACT_TYPE.ALL);
  const [search, setSearch] = useState("");

  const contactsTypes = useSelector(getContactsTypes);

  const contactsList = useSelector(getContacts)?.filter((el) => {
    if (type === CONTACT_TYPE.ALL && search.trim()?.length === 0) {
      return true;
    } else if (el.type === type && search.trim()?.length === 0) {
      return true;
    } else if (
      el.type === type &&
      search.trim()?.length > 0 &&
      (el.userName.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.surname.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.email.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.phone.toLowerCase().includes(search.trim().toLowerCase()))
    ) {
      return true;
    }
  });

  const sliceStart = CONTACT_PAGE_GET_COUNT * (currentPage - 1);
  const contactsListSlice = contactsList.slice(
    sliceStart,
    sliceStart + CONTACT_PAGE_GET_COUNT
  );

  function changeType(e) {
    setType(e.target.value);
    setCurrentPage(1);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="contacts-book">
      <ContactsFilter
        contactsTypes={contactsTypes}
        type={type}
        search={search}
        setSearch={setSearch}
        changeType={changeType}
      />

      <Button onClick={() => setVisible(true)}>Add Contact</Button>

      <ContactList contactsList={contactsListSlice} />

      {contactsList?.length !== 0 && (
        <Pagination
          totalItems={contactsList?.length}
          itemsPerPage={CONTACT_PAGE_GET_COUNT}
          pageChange={setCurrentPage}
          currentPage={currentPage}
        />
      )}

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
