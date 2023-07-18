import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

import {
  changeContactsType,
  changeContactsSearch,
} from "../redux/features/contacts/ContactSlice";
import { getContactsType } from "../redux/features/contacts/ContactActions";

import { CONTACT_TYPE } from "../constants/contactConstants";

import "../assets/styles/components/ContactsFilter.scss";

export default function ContactsFilter() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const contactsType = useSelector(getContactsType);

  function changeType(val) {
    dispatch(changeContactsType(val));
  }

  function searchContact(e) {
    setSearch(e.target.value);
    dispatch(changeContactsSearch(e.target.value));
  }

  return (
    <div className="contacts-filter">
      <Input
        label=""
        id="search-id"
        type="search"
        placeholder="Search..."
        onChange={searchContact}
        value={search}
      />

      <Select
        className="select"
        value={contactsType}
        onChangeSelect={changeType}
        defaultValue="TYPE"
        options={[
          { value: CONTACT_TYPE.ALL, name: CONTACT_TYPE.ALL },
          { value: CONTACT_TYPE.FAVORITE, name: CONTACT_TYPE.FAVORITE },
        ]}
      />
    </div>
  );
}
