import React from "react";

import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

import "../assets/styles/components/ContactsFilter.scss";

export default function ContactsFilter({
  contactsTypes,
  type,
  search,
  setSearch,
  changeType,
}) {
  return (
    <div className="contacts-filter">
      <Input
        id="search-id"
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <Select
        className="select"
        value={type}
        onChangeSelect={changeType}
        defaultValue="TYPE"
        options={contactsTypes?.map((el) => {
          return { value: el, name: el };
        })}
      />
    </div>
  );
}
