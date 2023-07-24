import React, { useState } from "react";

import { useSelector } from "react-redux";

import ContactList from "../components/ContactList";
import Pagination from "../components/UI/pagination/Pagination";
import Input from "../components/UI/input/Input";
import Modal from "../components/UI/modal/Modal";
import ContactForm from "../components/ContactForm";

import {
  CONTACT_PAGE_GET_COUNT,
  CONTACT_TYPE,
} from "../constants/contactConstants";

import { getContacts } from "../redux/features/auth/AuthActions";

import "../assets/styles/pages/Home.scss";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const favoriteContactsList = useSelector(getContacts)?.filter((el) => {
    if (
      el.type === CONTACT_TYPE.FAVORITE &&
      search.trim().toLowerCase()?.length === 0
    ) {
      return true;
    } else if (
      el.type === CONTACT_TYPE.FAVORITE &&
      search.trim().toLowerCase()?.length > 0 &&
      (el.userName.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.surname.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.email.toLowerCase().includes(search.trim().toLowerCase()) ||
        el.phone.toLowerCase().includes(search.trim().toLowerCase()))
    ) {
      return true;
    }
  });

  function pageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const sliceStart = CONTACT_PAGE_GET_COUNT * (currentPage - 1);
  const contactsListSlice = favoriteContactsList
    ? favoriteContactsList.slice(
        sliceStart,
        sliceStart + CONTACT_PAGE_GET_COUNT
      )
    : [];

  function searchContact(e) {
    setSearch(e.target.value);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="home">
      <Input
        label=""
        id="search-id"
        type="search"
        placeholder="Search..."
        onChange={searchContact}
        value={search}
      />

      <ContactList contactsList={contactsListSlice} />

      {contactsListSlice?.length !== 0 && (
        <Pagination
          totalItems={favoriteContactsList?.length}
          itemsPerPage={CONTACT_PAGE_GET_COUNT}
          pageChange={pageChange}
          currentPage={currentPage}
        />
      )}

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
