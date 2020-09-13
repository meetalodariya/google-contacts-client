import React from "react";
import { ContactsTableRows } from "./ContactTableRow";
import "./tableStyles.css";

export const ContactsTable = ({ profile, contacts }) => {
  return (
    <table className=" w-100 table-hover borderless mt-3" rules="none">
      <thead className="table-columns ">
        <tr>
          <th style={{ width: "6%" }}></th>
          <th style={{ width: "31%" }}>NAME</th>
          <th style={{ width: "31%" }}>EMAIL</th>
          <th style={{ width: "28%" }}>PHONE NUMBER</th>
          <th style={{ width: "45%" }}></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => {
          return (
            <ContactsTableRows
              key={index}
              name={contact.name}
              email={contact.email}
              photo={contact.photo}
              number={contact.phone}
            />
          );
        })}
      </tbody>
    </table>
  );
};

ContactsTable.displayName = "ContactsTable";
ContactsTable.propTypes = {};
ContactsTable.defaultProps = {};
