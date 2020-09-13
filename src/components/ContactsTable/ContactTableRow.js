import React from "react";

const colors = [
  "blue",
  "red",
  "yellow",
  "pink",
  "green",
  "brown",
  "darkblue",
  "peru",
  "steelblue",
  "slategrey",
];

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const ContactsTableRows = ({ photo, name, email, number }) => {
  return (
    <tr className="table-row">
      <td style={{ width: "6%" }}>
        <input type="checkbox" className="ml-2 checkbox"></input>
      </td>
      <td style={{ width: "31%" }}>
        <img
          className="contact-image "
          src={photo}
          alt="dp"
          style={{
            borderRadius: "50%",
            whiteSpace: "nowrap",
            border: "1px solid " + colors[randomInteger(0, 9)],
          }}
        ></img>
        <span className="row-detail">{name}</span>
      </td>
      <td className="row-email" style={{ width: "30%" }}>
        {email}
      </td>
      <td className="row-detail" style={{ width: "28%" }}>
        {number}
      </td>
      <td>
        <div className="bin bg" style={{ width: "45%" }}></div>
      </td>
    </tr>
  );
};

ContactsTableRows.displayName = "ContactsTableRows";
ContactsTableRows.propTypes = {};
ContactsTableRows.defaultProps = {};
