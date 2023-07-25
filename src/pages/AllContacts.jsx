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
  CONTACT_GROUP,
} from "../constants/contactConstants";

import {
  getContacts,
  getContactsGroups,
} from "../redux/features/auth/AuthActions";

import "../assets/styles/pages/ContactsBook.scss";

export default function AllContacts() {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [group, setGroup] = useState(CONTACT_GROUP.ALL);
  const [search, setSearch] = useState("");

  const contactsGroups = useSelector(getContactsGroups);

  const contactsList = useSelector(getContacts)?.filter((el) => {
    if (group === CONTACT_GROUP.ALL && search.trim()?.length === 0) {
      return true;
    } else if (el.group === group && search.trim()?.length === 0) {
      return true;
    } else if (
      el.group === group &&
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

  function changeGroup(e) {
    setGroup(e.target.value);
    setCurrentPage(1);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="contacts-book">
      <ContactsFilter
        contactsGroups={contactsGroups}
        group={group}
        search={search}
        setSearch={setSearch}
        changeGroup={changeGroup}
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
