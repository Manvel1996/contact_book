import React from "react";

import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

import "../assets/styles/components/ContactsFilter.scss";

export default function ContactsFilter({
  contactsGroups,
  group,
  search,
  setSearch,
  changeGroup,
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
        onChangeSelect={changeGroup}
        options={contactsGroups}
        value={group}
        defaultValue="GROUP"
      />
    </div>
  );
}
